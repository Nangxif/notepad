# 如何把前端项目部署到阿里云ECS服务器

## 一、ECS的购买

[学生服务器购买网址](https://promotion.aliyun.com/ntms/act/campus2018.html?spm=5176.10695662.1244717.1.3b50640fAy8l5h)24岁以下，阿里自动获得学生身份！
我选择的是“云翼计划”的云服务器ECS，预装环境CentOS 7.3 64位，地域选择与自己所在地相近的，选择一个月，最后的价格是9.5元，不贵。没记错话应该会要你设置一下服务器的账号和密码，一般账号用root，密码自己设置。
申请完ECS之后，我们先设置一下安全组，按照下面的步骤，进行安全组的设置

目前此项目设置的安全组列表如下

## 二、Xshell 6的连接
这里我采用的是Xshell 6来作为访问ECS服务器的工具
打开Xshell创建新的对话，点击“连接”输入主机号（这个主机号是你购买的ECS的公网ip）等信息，端口号默认22

然后点击“用户身份验证”输入账号root密码

## 三、配置简介

当前项目，我在ECS上部署的工具版本分别为
node ---- 6.9.1
mongoDB ---- 3.0.2
> 之前用过一次mongodb是2.4版本的，在mongod运行的时候，报错MongoError: Server at 127.0.0.1:27017 reports maximum wire version 0, but this version of the Node.js Driver requires at least 2 (MongoDB 2.6)，经过几次测试，3.0.2版本不会报错。



## 四、安装node和npm
把yum更新到最新版本：

```
yum -y update
```

我们将使用最新源代码构建Node.js，要进行软件的安装，需要一组用来编译源代码的开发工具：

```
yum -y groupinstall "Development Tools"
```

开始安装Node.js，先进入/usr/src文件夹，这个文件夹通常用来存放软件源代码:

```
cd /usr/src 
```

下载Node.js压缩包

```
wget http://nodejs.org/dist/v6.9.1/node-v6.9.1.tar.gz 
```

解压缩源文件，并且进入到压缩后的文件夹中:

```
tar zxf node-v6.9.1.tar.gz
cd node-v6.9.1
```

执行配置脚本来进行编译预处理:

```
./configure 
```

开始编译源代码（这一步耗费时间比较长）

```
make
```

当编译完成后，我们需要使之在系统范围内可用, 编译后的二进制文件将被放置到系统路径，默认情况下，Node二进制文件应该放在/user/local/bin/node文件夹下

```
make install
```

现在已经安装了Node.js, 可以开始部署应用程序。首先要使用Node.js的应用管理模块，pm2(用于启动程序并在需要时重启非常有用的模块）：

```
npm -g install pm2 
```

建立超级链接, 不然 sudo node 时会报 "command not found"

```
sudo ln -s /usr/local/bin/node /usr/bin/node 
sudo ln -s /usr/local/lib/node /usr/lib/node 
sudo ln -s /usr/local/bin/npm /usr/bin/npm
```

>在编译node的时候，很有可能会报出gcc版本太低的错误，解决方法如下

```
yum -y install texinfo
mkdir /opt/soft/
cd /opt/soft/
wget http://ftp.gnu.org/gnu/gcc/gcc-8.2.0/gcc-8.2.0.tar.gz
tar -C /usr/local -xzf gcc-8.2.0.tar.gz
cd /usr/local/gcc-8.2.0
./contrib/download_prerequisites 
mkdir build 
cd build 
../configure -enable-checking=release -enable-languages=c,c++ -disable-multilib
yum groupinstall "Development Tools" 
make #这个步骤非常耗时长
make install 
reboot #一定要记得重启

find / -name "libstdc++.so*"
输出如下（最新动态库的目录）
/usr/local/gcc-8.2.0/build/stage1-x86_64-pc-linux-gnu/libstdc++-v3/src/.libs/libstdc++.so.6.0.25
/usr/local/gcc-8.2.0/build/stage1-x86_64-pc-linux-gnu/libstdc++-v3/src/.libs/libstdc++.so.6
/usr/local/gcc-8.2.0/build/stage1-x86_64-pc-linux-gnu/libstdc++-v3/src/.libs/libstdc++.so

复制最新动态库文件libstdc++.so.6.0.25到/usr/lib64下
cp /usr/local/gcc-8.2.0/build/stage1-x86_64-pc-linux-gnu/libstdc++-v3/src/.libs/libstdc++.so.6.0.25 /usr/lib64

复制后，修改系统默认动态库的指向，即：重建默认库的软连接。切换工作目录至/usr/lib64：
cd /usr/lib64

删除原来软连接
rm -rf libstdc++.so.6

将默认库的软连接指向最新动态库：
ln -s libstdc++.so.6.0.25 libstdc++.so.6

默认动态库升级完成。重新运行以下命令检查动态库：
strings /usr/lib64/libstdc++.so.6 | grep GLIBC

gcc -v 查看版本号就变成8.2了
```


## 五、安装mongodb

进入/usr/local目录

```
cd /usr/local
```

下载解压文件

```
wget https://fastdl.mongodb.org/linux/mongodb-linux-i686-3.0.2.tgz
gzip -d mongodb-linux-i686-3.0.2.tgz
tar xvf mongodb-linux-i686-3.0.2.tar
```

重命名并且进入

```
mv mongodb-linux-i686-3.0.2 mongodb3.0.2
cd mongodb3.0.2/bin
```

配置一下路径，方便直接使用mongod命令

```
export MONGO_PATH=/usr/local/mongodb3.0.2
export PATH=$PATH:$MONGO_PATH/bin
mongod --version
```

在接口项目中创建一个mongodb文件夹，里面的项目目录如下
mongodb
----config
--------mongodb.conf(配置文件，内容为mongod的参数)
----db(存放数据库文件)
----logs(该文件夹用于存放日志)

mongodb.conf的内容
```
dbpath=/home/server/mongodb/db
logpath=/home/server/mongodb/logs/mongodb.log
logappend=true
journal=true
port=27017
fork=true
auth=false
```

*****

> 到目前为止环境就算是弄好了

## 六、开启服务

先打开mongodb，进入接口项目mongodb/config，输入

```
mongod --config mongodb.conf
```

如果开启成功的话，控制台一般会输出类似的日志

```
about to fork child process, waiting until server is ready for connections.
forked process: 17461
child process started successfully, parent exiting
```

而且在浏览器访问"公网ip：27017"的时候，浏览器显示It looks like you are trying to access MongoDB over HTTP on the native driver port.
而且MongoDB Compass也可以连接得上。
> 注意：在关闭mongodb 的时候，千万不要用kill 进程，来进行关闭，这样会损害数据库的数据，mongodb提供了一个命令mongod --shutdown。万一真的被kill的话，该怎么办呢？只能删除db文件夹下面的lock文件，然后mongod --config mongodb.conf --repair以修复模式重新打开。

进入后台接口项目文件夹，bin，用pm2托管

```
pm2 start www
```

进入前端项目文件夹，

```
pm2 start run dev
```



