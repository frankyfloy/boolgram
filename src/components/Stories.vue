<template>
    <div class="text-center">
        <v-dialog
        width="350"
        v-model="dialog"
        retain-focus
        class="d-flex align-center"
        >
            <template v-slot:activator="{ on }">
                <v-btn
                icon
                class="mx-5 my-10"
                v-on="on"
                >
                    <Avatar
                    :profile='profile'
                    :size="60"
                    />
                </v-btn>
            </template>

            <v-item v-slot="{ active, toggle }">

                <v-card
                height="600"
                class="d-flex align-center portrait"
                @click="toggle"
                >
                    <v-img
                    :src="profile.profile_picture"
                    :aspect-ratio="16/9"
                    height="100%"
                    contain
                    >
                    </v-img>
                </v-card>

            </v-item>
        </v-dialog>
    </div>
</template>

<script>
import Avatar from "./Avatar.vue";

export default {
    name: "Stories",
    props: {
        profile: {
            type: Object,
        },
    },
    components:{
        Avatar,
    },
    data: () => ({
        active: true,
        user: {
            initials: 'JD',
            fullName: 'John Doe',
            email: 'john.doe@doe.com',
        },
        dialog: false,
    }),
}
</script>
