<template>
    <v-app>
        <v-container >

            <Navbar/>

            <v-row>
                <v-main app>
                    <router-view/>
                </v-main>
            </v-row>

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

        data: () => ({

        }),
    };
</script>
