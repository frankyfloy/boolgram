<template>
    <div class="">
        <strong>
            <router-link :to="{ name: 'Profile', params: {} }">
                {{ comment.username}}
            </router-link>
        </strong>
        <span v-text="comment.text"
        class="pl-2"
        ></span>
    </div>
</template>

<script>
export default {
    name: "SingleComment",
    props: {
        comment: {
            type: Object,
        },
    },
}
</script>
