<template>
    <div></div>
</template>

<script>
    import gql from 'graphql-tag';

    export default {
        name: "Verification",
        methods: {
            verify: function () {
                let token = this.$route.params.token;
                let mail = this.$route.params.mail;
                this.$apollo.query({
                    query: gql`query verify($email: String!, $token: String!){verify(email: $email, token: $token)}`,
                    variables: {
                        email: mail,
                        token: token
                    }
                }).then(res => {
                    alert(res.data.verify);
                }).catch(err => alert(err));
            }
        },
        created() {
            this.verify();
        }
    }
</script>

<style scoped lang="scss">

</style>
