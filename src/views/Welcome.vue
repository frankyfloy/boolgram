<template>
    <v-card
    width="50%"
    :class="this.$vuetify.breakpoint.mdAndUp ? '' : 'px-0 pb-0'"
    class="card d-flex flex-column justify-space-around"
    >
        <v-toolbar
            class="toolbar"
        color="grey lighten-2"
        elevation="1"
        height="50px"
        >
            <v-toolbar-title class="subtitle-4 text-center">Login</v-toolbar-title>
        </v-toolbar>
        <Authenticator class="pl-3 my-5 d-flex flex-column"/>
    </v-card>
</template>

<script>
import Authenticator from "../components/welcome/Authenticator.vue";

export default {
    name: "Welcome",
    components:{
        Authenticator
    }
};
</script>

<style scoped lang="scss">
    .card,toolbar{
        background-color: rgba(0, 0 , 0 , 0.6);
    }
</style>
