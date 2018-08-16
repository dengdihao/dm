<template>
    <div>
        <button @click="submits()">发送请求</button>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                
            }
        },
        methods:{
            submits(){
                this.$http.getHelloWorld();
            }
        }
    }
</script>