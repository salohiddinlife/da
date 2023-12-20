<template>
  <div class="ibook">
    <div class="container">
      <div class="ibook__photos">
        <img :src="products.image" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
  export default {
    computed:{
      ...mapState(['products'])
    },
    methods:{
      ...mapActions(['getImgs'])
    }
  }
</script>

<style lang="scss" scoped>

</style>