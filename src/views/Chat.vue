<template>
    <ConsolePost
    :nameGroup="'Chat'"
    />
</template>

<script>
import ConsolePost from "../pages/home/Console-post.vue";
export default {
    name: "Chat",
    components:{
        ConsolePost,
    },
};
</script>
