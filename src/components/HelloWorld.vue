<template>
    <div>
        <button v-on:click="submits()"></button>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                
            }
        },
        methods:{
            submits:function () {
                this.$http.getHelloWorld()
                    .then(function () {
                        
                    },function () {
                        
                    })
            }
        }
    }
</script>


<style>


</style>