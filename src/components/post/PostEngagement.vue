<template>
    <v-card
    class="d-flex flex-column"
    elevation="2"
    >
        <NavPost/>

        <Likes
        v-if="likes[0]"
        :likes="likes"
        :postNum="postNum"
        class="px-3 mt-3"
        />

        <Comments
        v-if="comments[0]"
        :comments="comments"
        :postNum="postNum"
        class="px-3 my-3"
        />

    </v-card>
</template>

<script>

import NavPost from "@/components/post/NavPost.vue";
import Likes from "@/components/post/Likes.vue";
import Comments from "@/components/post/Comments.vue";

export default {

    name: "PostEngagement",
    components:{
        NavPost,
        Likes,
        Comments,
    },
    props: {
        comments: {
            type: Array,
        },
        likes: {
            type: Array,
        },
        statusReq:{
            type:  Boolean,
        },
        postNum:{
            type:  Number,
        }
    },
};
</script>
