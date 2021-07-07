<template>
    <v-app>
        <v-container
        hide-overflow
        fluid
        >
            <Navbar />
            <v-main>
                <router-view/>
            </v-main>
        </v-container>
    </v-app>
</template>

<script>

    import Navbar from "./components/Navbar.vue";
    export default {
        name: 'App',

        components:{
            Navbar
        },
    };
</script>


<style lang="scss">
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        text-decoration: none;
    }

    
    .v-btn{

        &:not(.v-btn--round).v-size--default {
            min-width: 0px;
            padding: 0 0px;
        }

        &::before{
            background-color: transparent !important;
        }
    }


</style>
