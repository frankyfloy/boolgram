<template>

    <v-dialog
    v-model="dialog"
    width="80%"
    retain-focus
    transition="scale-transition"
    origin="center center"
    >
        <template v-slot:activator="{ on }">
            <v-btn
            v-on="on"
            color="white"
            plain
            >
                <v-icon
                size="25"
                >mdi-plus-box
                </v-icon>
            </v-btn>
        </template>

        <v-card
        width="100%"
        height="500px"
        app
        fixed
        right
        >
            <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                    NEW POST
                </div>
            </v-list-item-content>
        </v-card>
    </v-dialog>
</template>


<script>

export default {
    // STUB DATI USER
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
