<template>
  <Header :pages="pages"/>
  <RouterView/>
</template>

<script>
import Header from '@/components/Header.vue'
  export default {
    components:{
      Header,
    },
    data(){
        return{
          pages: [
            {name: 'ImgBook', url: '/'},
            {name: 'ImgBook 2.0', url: '/ImgBook2ver'}
          ]
        }
      }
  }
</script>

<style lang="scss" scoped>

</style>
