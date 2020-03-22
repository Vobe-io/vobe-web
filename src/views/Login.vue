<template>
  <div id="login">

    <a id="login-bg-author" href="https://unsplash.com/@larrytwh">@larrytwh</a>
    <parallax-image src="@/assets/wp/@idoevolve" id="login-bg"></parallax-image>

    <div id="login-cover">

      <div id="login-form">
        <div id="login-form-head">
          <img class='logo' src="@/assets/logo/vobe_logo.svg">
          <h1>Login</h1>
        </div>

        <div id="login-inputs">

          <img class='text-icon' src="@/assets/icons/identity.svg">
          <input type="text" id="identity">

          <img class='text-icon' src="@/assets/icons/key.svg">
          <input type="password" id="password">

        </div>

        <div id="login-actions">
          <a href="">recover account</a>
          <vobe-button text="Login" :callback="login"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import ParallaxImage from "@/components/ParallaxImage.vue";
  import VobeButton from "@/components/VobeButton.vue";
  import gql from 'graphql-tag';


  export default {
    name: "Login",
    components: {VobeButton, ParallaxImage},
    comments: {},
    methods: {
      async login() {
        this.$apollo.query({
          query: gql`query signin($identity: String!, $password: String!){signin(identity: $identity, password: $password){token}}`,
          variables: {
            identity: document.getElementById('identity').value,
            password: document.getElementById('password').value
          }
        }).then(res => {
          let session = res.data.signin.token;
          if (session !== undefined)
            this.$cookie.set('session-token', session, 60);
        }).catch(err => alert(err));
      }
    },
  }
</script>

<style scoped lang="scss">

  #login-actions {
    display: flex;

    justify-content: space-between;
    margin-left: 75px;
    margin-right: 25px;

    a {
      margin-top: auto;
      margin-bottom: auto;
      float: left;
      text-decoration: none;
      color: grey;
    }

  }

  .text-icon {
    height: 25px;
    margin-bottom: -7.5px;
  }

  input[type='text'], input[type='password'] {
    border: none;
    border-bottom: 2px solid #1E2226;
    outline: none;
    padding: 2.5px;
    font-size: 17.5px;
    background-color: transparent;
  }

  #login-inputs {
    margin-top: 50px;
    padding: 25px;
    display: grid;
    grid-template-columns: 25px 300px;
    grid-template-rows: 25px 25px;
    grid-row-gap: 45px;
    grid-column-gap: 25px;
    grid-template-areas: ". ." ". .";
  }

  #login-form {
    height: 650px;

    #login-form-head {
      display: flex;
      align-items: center;

      & > * {
        margin: 20px;
      }
    }

    .logo {
      height: 100px
    }

  }


  #login {
    width: 100%;

    #login-bg {
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;

      & > img {
        height: 100%;
      }
    }

    #login-cover {
      z-index: 1;
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 100%;

      background-image: url("~@/assets/login_cover.png");
      background-size: cover;

      display: flex;
      justify-content: center;
      align-items: center;

      & > * {
        margin-left: 600px;
      }
    }
  }

  #login-bg-author {
    z-index: 1000;
    text-decoration: none;
    position: absolute;
    bottom: 0;
    left: 0;
    color: white;
    opacity: 0.25;
    padding: 5px;

    &:hover {
      text-decoration: underline;
      opacity: 0.35;
    }
  }
</style>
