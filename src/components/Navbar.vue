<template>
    <v-system-bar
    app
    height="70"
    class="white"
    >
        <v-col
        class="d-flex align-center"
        >
            <div class="mx-3">
                <v-img
                    contain
                    height="50px"
                    width="120px"
                    src="@/assets/logo.png"
                    lazy-src="@/assets/logo.png"
                >
                </v-img>
            </div>
        </v-col>

        <v-col>
            <SearchProfile/>
        </v-col>

        <v-col
        class="d-flex align-center justify-end">

            <router-link class="px-3" :to="{ name: 'Home', params: {} }">
                <font-awesome-icon icon="house-user"  size="lg" :style="{ color: 'black' }" />
            </router-link>

            <router-link class="px-3" :to="{ name: 'Chat', params: {} }">
                <font-awesome-icon :icon="['far', 'paper-plane']"  size="lg" :style="{ color: 'black' }" />
            </router-link>

            <router-link :disabled="true" class="px-3" :to="{ name: 'CreatePost', params: {} }">
                <font-awesome-icon :icon="['far', 'plus-square']"  size="lg" :style="{ color: 'black' }" />
            </router-link>

            <router-link :disabled="true" class="px-3" :to="{ name: 'GlobalPost', params: {} }">
                <font-awesome-icon :icon="['far', 'compass']"  size="lg" :style="{ color: 'black' }" />
            </router-link>

            <Notifications :loading="loading"/>

            <AvatarMenu />

        </v-col>

    </v-system-bar>
</template>

<script>
    import SearchProfile from "../components/Search-profile.vue";
    import AvatarMenu from "../components/Avatar-menu.vue";
    import Notifications from "../components/Notifications.vue";

export default {
    name: 'Navbar',

    components:{
        AvatarMenu,
        SearchProfile,
        Notifications,
    },

    data: () => ({
        loading: false
    }),




    methods: {
      async remove () {
        this.loading = true

        await new Promise(resolve => setTimeout(resolve, 3000))

        this.loading = false
      },
    },

  }
</script>
