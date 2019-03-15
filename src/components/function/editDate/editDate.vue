<template>
  <div class="editDate">
    <head-top :is-back="isBack" page-title="记日子"></head-top>
    <div class="editDate_wrapper">
        <calendar
		    v-model="calendarShow"
		    :defaultDate="defaultDate"
		    @change="handelChange">
		</calendar>
    </div>
  </div>
</template>

<script>
import headTop from '@/components/common/head';
export default {
    data(){
        return{
            "isBack": true,
            calendarShow: true,
			defaultDate: new Date()
        }
    },
    components:{
        headTop
    },
    methods:{
    	handelChange(){

    	}
    }
}
</script>

<style>
    .editDate_wrapper{
        position: fixed;
        left: 0px;
        top: 3.031rem;
        width: 100%;
        height: calc(100% - 3.031rem);
        background-color: white;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 501;
    }
    
   


</style>