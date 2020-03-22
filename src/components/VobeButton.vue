<template>
  <button @click="clicked()">
    {{text}}
  </button>
</template>

<script>
  export default {
    name: "vobe-button",
    props: {
      text: String,
      callback: Function
    },
    methods: {
      clicked() {
        if (this.callback)
          this.callback();
      }
    }
  }
</script>

<style scoped lang="scss">
  button {
    transition: all .15s ease-in-out;
    $bg-color: rgb(117, 84, 255);
    float: right;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    outline: none;
    font-size: 14px;
    height: 32px;
    border-radius: 5px;
    background-color: $bg-color;
    color: white;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: $bg-color * 0.8;
    }

    &:active {
      background-color: $bg-color * 1.2;
    }

  }
</style>
