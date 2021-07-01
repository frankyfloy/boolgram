<template>
    <div class="text-center">

        <v-dialog
        v-model="dialog"
        width="500"
        retain-focus
        >
            <template v-slot:activator="{ on }">
                <v-btn
                icon
                class="mx-4"
                v-on="on"
                >
                    <v-avatar
                    color="brown"
                    size="60"
                    >
                        <span class="white--text text-h5">{{ user.initials }}</span>
                    </v-avatar>

                </v-btn>
            </template>

            <v-card
            min-width="500px"
            height="800px"
            app
            fixed
            right
            >

                <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                        <v-avatar
                        color="brown"
                        >
                            <span class="white--text text-h5">{{ user.initials }}</span>
                        </v-avatar>

                        <h3>{{ user.fullName }}</h3>
                        <p class="text-caption mt-1">
                            {{ user.email }}
                        </p>

                        <v-divider class="my-3"></v-divider>
                        <v-btn
                        depressed
                        rounded
                        text
                        >
                        Edit Account
                        </v-btn>

                        <v-divider class="my-3"></v-divider>
                        <v-btn
                            depressed
                            rounded
                            text
                            >
                            Disconnect
                        </v-btn>
                    </div>
                </v-list-item-content>
            </v-card>
        </v-dialog>

    </div>
</template>


<script>
export default {

    data: () => ({
        user: {
            initials: 'JD',
            fullName: 'John Doe',
            email: 'john.doe@doe.com',
        },
        dialog: false,
    }),
}
</script>
