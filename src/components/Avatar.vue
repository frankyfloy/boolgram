<template>
    <v-avatar
    :size="size"
    >
        <v-img
        v-if="image"
        :src="image"
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
            image: {
                type: String,
            },
            size:{
                type:Number,
            }
        },
    }
</script>
