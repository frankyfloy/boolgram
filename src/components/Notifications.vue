<template>
    <v-menu
    bottom
    min-width="500px"
    rounded
    offset-y
    >
        <template v-slot:activator="{ on }">
            <v-btn
            v-on="on"
            :loading="loading"
            @click="view()"
            :plain="!newNotifications"

            class="ma-1"
            aria-label="Notifications" role="notification" aria-hidden="false"
            >
                <!-- TODO: add: pulse prop when there are new notifications -->
                <v-badge
                    :value="newNotifications"
                    :pulse="newNotifications"
                    color="green"
                    :content="newNotifications"
                >
                    <font-awesome-icon :icon="['far', 'heart']"  size="2x" :style="{ color: '#D50000' }"/>
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
