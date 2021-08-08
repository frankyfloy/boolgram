<template>
    <v-app>
        <v-container
        hide-overflow
        fluid
        :class="!isAuthenticated ? 'd-flex flex-column justify-center welcome' : '' "
        >
            <div v-if="isAuthenticated">
                <Navbar/>
                <v-main>
                    <router-view/>
                </v-main>
            </div>

            <div v-else
                class="d-flex flex-column align-center">
                <Welcome
                class="my-3"
                width="300px"/>

                <a class="primary--text" href="https://it.vecteezy.com/vettori-gratis/selfie">Selfie Vettori di Vecteezy</a>
            </div>

        </v-container>
    </v-app>
</template>

<script>
    // Vuex
    import { mapGetters, mapActions} from 'vuex';

    import Welcome from "./views/Welcome.vue";
    import Navbar from "./components/Navbar.vue";

    export default {
        name: 'App',

        components:{
            Navbar,
            Welcome
        },

        computed: {
            ...mapGetters('authentication', [
                'isAuthenticated'
            ]),
        },

        methods: {
            // Set User - Mutation
            ...mapActions('authentication',['login']),
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

    .welcome{
        background-image: url('./assets/images/welcome1.jpg');
        background-repeat: no-repeat;
        background-size:cover;
        height : 100%;
    }

    .v-btn{

        &:not(.v-btn--round).v-size--default {
            min-width: 0;
            padding: 0 0;
        }

        &::before{
            background-color: transparent !important;
        }
    }

    a{
        color: #000000;
        font-size: 18px;
    }

</style>
