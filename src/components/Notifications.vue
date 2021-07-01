<template>
    <v-menu
    bottom
    min-width="500px"
    rounded
    offset-y
    >
        <template v-slot:activator="{ on }">
            <v-btn
            icon
            v-on="on"
            >
                <!-- TODO: add: pulse prop when there are new notifications  -->
                <v-badge

                    color="green"
                      content="6"
                >
                    <font-awesome-icon :icon="['far', 'heart']"  size="2x" :style="{ color: '#D50000' }" />
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
    }),
}
</script>
