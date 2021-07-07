<template>
    <v-avatar
    :size="size"
    >
        <v-img
        v-if="profile.profile_picture"
        :src="profile.profile_picture"
        >
        </v-img>

        <v-icon
        v-else
        dense
        >mdi-image-off
        </v-icon>
    </v-avatar>

</template>

<script>
    export default {
        name: "Avatar",
        props: {
            profile: {
                type: Object,
            },
            size:{
                type:Number,
            }
        },
    }
</script>
