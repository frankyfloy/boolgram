<template>
    <v-container>
        <v-row>
            <v-col>
                <ConsolePost
                :nameGroup="`Global post`"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import ConsolePost from "../pages/home/Console-post.vue";

export default {
    name: "Globalpost",
    components:{
        ConsolePost,
    },
};
</script>
