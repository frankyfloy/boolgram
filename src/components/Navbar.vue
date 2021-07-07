<template>

    <v-app-bar
    app
    height="80"
    class="black"
    >
        <v-col
        :cols="this.$vuetify.breakpoint.mdAndUp ? 2 : 2"
        :class="this.$vuetify.breakpoint.mdAndUp ? '' : 'px-0'"
        >

            <v-btn
            :to="{ name: 'Home', params: {} }"
            plain
            exact-active-class
            >
                <v-img
                    v-if="this.$vuetify.breakpoint.width > 1000"
                    class="hidden-md-and-down"
                    contain
                    height="50px"
                    width="120px"
                    src="@/assets/images/logoWhite.png"
                    lazy-src="@/assets/images/logoWhite.png"
                >
                </v-img>

                <v-icon
                v-else
                size="45"
                color="white"
                >mdi-instagram
                </v-icon>
            </v-btn>


        </v-col>

        <v-col
        cols="4"
        class="hidden-md-and-down pr-5">
            <SearchProfile/>
        </v-col>

        <v-col
        :cols="this.$vuetify.breakpoint.mdAndUp ? 3 : 10"
        :class="this.$vuetify.breakpoint.mdAndUp ? 'justify-space-between ml-auto' : 'justify-space-between px-0'"
        class="d-flex align-center ">

            <v-btn class=""
            plain
            :to="{ name: 'Home', params: {} }"
            >
                <v-icon
                size="25"
                color="white"
                >mdi-home
                </v-icon>

            </v-btn>

            <v-btn
            :to="{ name: 'Chat', params: {} }"
            plain
            >
                <v-icon
                color="white"
                size="25"
                >mdi-forum
                </v-icon>
            </v-btn>

            <NewPost />

            <v-btn
            :to="{ name: 'Globalpost', params: {} }"
            plain
            >
                <v-icon
                color="white"
                size="25"
                >mdi-compass
                </v-icon>
            </v-btn>

            <Notifications :loading="loading"/>

            <AvatarMenu/>

        </v-col>

    </v-app-bar>
</template>

<script>
    import SearchProfile from "../components/Search-profile.vue";
    import AvatarMenu from "../components/Avatar-menu.vue";
    import Notifications from "../components/Notifications.vue";
    import NewPost from "../components/New-post.vue";

export default {
    name: 'Navbar',

    components:{
        AvatarMenu,
        SearchProfile,
        Notifications,
        NewPost
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
