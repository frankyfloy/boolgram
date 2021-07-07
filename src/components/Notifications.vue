<template>
    <v-menu
    bottom
    right
    min-width="300px"

    rounded
    offset-y
    transition="scale-transition"
    >
        <template v-slot:activator="{ on }">
            <v-btn
            @click="view()"
            v-on="on"
            :loading="loading"
            color="white"
            plain
            min-width="0"

            aria-label="Notifications" role="notification" aria-hidden="false"
            >
                <!-- TODO: add: pulse prop when there are new notifications -->
                <v-badge
                    :color="newNotifications ? 'green' : ''"
                    :content="newNotifications"

                >
                    <v-icon
                    :color="newNotifications ? 'red' : 'white'"
                    size="25"
                    >mdi-heart</v-icon>
                </v-badge>
            </v-btn>
        </template>

        <v-card>
            <v-list-item-content
            min-width="500px"
            class="justify-center">
                Inserire Notifiche
            </v-list-item-content>
        </v-card>

    </v-menu>
</template>

<script>
export default {
    data: () => ({
        user: {
            initials: 'JD',
            fullName: 'John Doe',
            email: 'john.doe@doe.com',
        },
        loading: false,

        // STUB number notifications
        newNotifications:5,
    }),

    methods: {
      async view () {
        this.loading = true

        await new Promise(resolve => setTimeout(resolve, 3000))

        this.loading = false
        this.newNotifications = 0;
      },
    },
}
</script>


<style lang="scss">


</style>
