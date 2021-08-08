<template>
    <v-menu
    bottom
    min-width="200px"
    rounded
    offset-y
    >
        <template v-slot:activator="{ on }">
            <v-btn
            icon
            v-on="on"
            >
                <v-avatar
                size="45"
                class="m-4 outline-white"
                >
                    <v-img
                    v-if="user.profile_picture"
                    src="@/assets/images/fotoProfilo.jpg"
                    contain
                    >
                    </v-img>

                    <v-icon
                    v-else
                    dense
                    >mdi-image-off
                    </v-icon>
                </v-avatar>

            </v-btn>
        </template>


        <v-card>
            <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                    <Avatar
                    :profile="user"
                    :size="25"
                    />

                <h3>{{ user.fullName }}</h3>
                <p class="text-caption mt-1">
                    {{ user.email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn
                depressed
                rounded
                text
                >
                Edit Account
                    </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn
                    @click="disconnect()"
                    depressed
                    rounded
                    text
                    >
                    Disconnect
                </v-btn>
                </div>
                </v-list-item-content>
        </v-card>
    </v-menu>
</template>


<script>

import Avatar from "@/components/Avatar.vue";

// Vuex
import {  mapActions} from 'vuex';


export default {
    components:{
        Avatar
    },
    data: () => ({
        user: {
            profile_picture : '@/assets/images/fotoProfilo.jpg',
            username: 'Frankyfloy',
            initials: 'FS',
            fullName: 'Francesco Sica',
            email: 'fsica171@gmail.com',
        },
    }),

    methods: {

        // Set User - Mutation
        ...mapActions('authentication',['disconnect']),
    },


}
</script>


<style media="screen">
    .outline-white{
        border: 2px solid #EEEEEE;
    }
</style>
