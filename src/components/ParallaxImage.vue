<template>
  <div class="parallax-image">
    <img :src="bgImage"/>
  </div>
</template>

<script>
  import img from '@/assets/wp/@idoevolve.jpg';


  export default {
    name: "ParallaxImage",
    props: {
      src: {
        type: String,
        required: true
      },
      factor: {
        type: Number,
        default: 0.5
      }
    },
    computed: {
      bgImage() {
        return img;
      }
    },
    mounted() {
      /*document.getElementById('app')
          .addEventListener('mousemove', (e) =>
              document.getElementsByClassName('parallax-image').forEach(i =>
                  i.setAttribute('style', `margin-left: ${e.clientX / 160}px; margin-top: ${e.clientY / 90}px`)));*/
    }
  }
</script>

<style scoped lang="scss">
  .parallax-image {
    overflow: hidden;
    height: 100%;
    width: 100%;

    img {
      height: 100%;
      float: left;
    }
  }
</style>
