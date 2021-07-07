<template>
    <v-card
    max-width="100%"
    elevation="4"
    color="grey lighten-5"
    >

        <v-toolbar
          color="grey lighten-2"
          height="35px"
          elevation="1"
        >
            <v-toolbar-title class="subtitle-2">Suggerimenti per te</v-toolbar-title>
            <a class="ml-auto subtitle-2">Mostra tutti</a>
        </v-toolbar>


        <v-container fluid>
            <v-row dense>
                <v-col
                v-for="(profile, i) in profiles"
                :key="'profile' + i"
                cols="12"
                >
                    <div class="d-flex align-center py-3">
                        <router-link class="px-3" :to="{ name: 'Profile', params: {} }">

                            <Avatar
                            :profile='profile'
                            />

                        </router-link>

                        <p class="my-5" v-text="profile.profile_name"></p>
                    </div>

                    <v-divider></v-divider>
                </v-col>

                <small class="ml-auto mr-1">© 2021 INSTAGRAM DI FACEBOOK</small>
            </v-row>
        </v-container>
     </v-card>
</template>

<script>
import Avatar from "../Avatar.vue";

export default {
    name: "Tips",
    props: {
        profiles: {
            type: Array,
        },
    },
    components:{
        Avatar
    },
    data: () => ({
        model: null,
    }),
}
</script>
