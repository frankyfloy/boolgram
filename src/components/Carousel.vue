<template>
    <v-card
    color="grey lighten-5"
    elevation="3"
    >
        <v-toolbar
        color="grey lighten-2"
        height="35px"
        >
            <v-toolbar-title class="subtitle-2">Storie</v-toolbar-title>
        </v-toolbar>

        <v-slide-group
            v-model="model"
            class="v-slide-group"
        >
            <v-slide-item
            v-for="(profile, i) in stories"
            :key="'history' + i"
            v-slot="{ active, toggle }"
            >
                <Stories
                :profile="profile"
                @click="toggle"
                />
            </v-slide-item>

        </v-slide-group>

     </v-card>
</template>

<script>
import Stories from "./Stories.vue";

    export default {
        name: "Carousel",
        props: {
            stories: {
                type: Array,
            },
        },
        components:{
            Stories,
        },

        data: () => ({
            model: null,
        }),

        created(){
            console.log();
        }
    }
</script>

<style scoped>
    .v-slide-group{
      overflow-x: hidden;
    }
</style>
