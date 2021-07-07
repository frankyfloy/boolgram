<template lang="html">
    <v-toolbar
    class="d-flex py-3"
    height="auto"
    elevation="2"
    >
        <v-toolbar-title
        class="d-flex"
        >
            <router-link :to="{ name: 'Profile', params: {} }">
                <Avatar
                :profile='post'
                :size="50"
                />
            </router-link>

            <div class="d-flex flex-column pl-3 justify-center">
                <router-link
                :to="{ name: 'Profile', params: {} }"
                >
                    {{post.profile_name}}
                </router-link>

                <small>{{post.post_text}}</small>
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
        post: {
            type: Object,
        },
    },
}
</script>
