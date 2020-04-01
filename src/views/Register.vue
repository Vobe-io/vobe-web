<template>
    <div id="register">
        <a id="register-bg-author" href="https://unsplash.com/@larrytwh">@larrytwh</a>
        <parallax-image src="@/assets/wp/@jaymantri" id="register-bg"></parallax-image>

        <div id="register-cover">
            <div id="register-form">
                <div id="register-form-head">
                    <img alt="Vobe-Logo" class="logo" src="@/assets/logo/vobe_logo.svg">
                    <h1>Register</h1>
                </div>
                <div id="register-inputs">
                    <!-- USERNAME -->
                    <img alt="ID" class="text-icon" src="@/assets/icons/identity.svg">
                    <input type="text" id="username">
                    <!-- MAIL -->
                    <img alt="MAIL" class="text-icon" src="@/assets/icons/mail.svg">
                    <input type="email" id="email">
                    <!-- PASSWORD -->
                    <img alt="PW" class="text-icon" src="@/assets/icons/key.svg">
                    <input type="password" id="password">
                    <!-- PASSWORD CONFIRM -->
                    <img alt="PWC" class="text-icon" src="@/assets/icons/key1.svg">
                    <input type="password" id="password-c">
                </div>
                <div id="register-actions">
                    <vobe-button text="Register" :callback="register" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ParallaxImage from "@/components/ParallaxImage";
    import VobeButton from "@/components/VobeButton";
    import gql from 'graphql-tag';

    export default {
        name: "Register",
        components: {VobeButton, ParallaxImage},
        methods: {
            async register() {
                this.$apollo.query({
                    query: gql`query signup($username: String!, $email: String!, $password: String!){signup(username: $username, email: $email, password: $password){token}}`,
                    variables: {
                        username: document.getElementById('username').value,
                        email: document.getElementById('email').value,
                        password: document.getElementById('password').value
                    }
                }).then(() => {
                    alert('Please check your spam folder');
                }).catch(err => alert(err));
            }
        }
    }
</script>

<style scoped lang="scss">
    #register-actions {
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

    input[type='text'], input[type='password'], input[type='email'] {
        border: none;
        border-bottom: 2px solid #1E2226;
        outline: none;
        padding: 2.5px;
        font-size: 17.5px;
        background-color: transparent;
    }

    #register-inputs {
        margin-top: 50px;
        padding: 25px;
        display: grid;
        grid-template-columns: 25px 300px;
        grid-template-rows: 25px 25px;
        grid-row-gap: 45px;
        grid-column-gap: 25px;
        grid-template-areas: ". ." ". .";
    }

    #register-form {
        height: 650px;

        #register-form-head {
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


    #register {
        width: 100%;

        #register-bg {
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

        #register-cover {
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

    #register-bg-author {
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
