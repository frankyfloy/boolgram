<template>
    <div class="text-center">
        <v-dialog
        v-model="dialog"
        width="80%"
        retain-focus
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
                <div class="d-flex flex-column">

                    <v-card
                    class="d-flex align-center portrait"
                    dark
                    @click="toggle"
                    min-width="500px"
                    height="800px"
                    >
                        <v-img
                        :src="profile.profile_picture"
                        :aspect-ratio="16/9"
                        center
                        >
                        </v-img>
                    </v-card>
                </div>
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
