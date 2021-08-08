<template lang="html">
    <v-toolbar
    class="d-flex py-3"
    height="auto"
    elevation="5"
    >
        <v-toolbar-title
        class="d-flex text-wrap"
        >
            <router-link :to="{ name: 'Profile', params: {} }">
                <Avatar
                :image='avatar'
                :size="50"
                />
            </router-link>

            <div class="d-flex flex-column pl-3 justify-center">
                <router-link
                :to="{ name: 'Profile', params: {} }"
                >
                    <h4>{{creator}}</h4>
                </router-link>
                <small>{{content}}</small>
            </div>
        </v-toolbar-title>
    </v-toolbar>
</template>

<script>
import Avatar from "@/components/Avatar.vue";

export default {
    name: "Header",
    components:{
        Avatar
    },
    props: {
      creator:{
        type: Number
      },
      content:{
        type: String
      },
      avatar:{
        type: String
      }
    }
}
</script>
