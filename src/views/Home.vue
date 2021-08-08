<template>
    <v-row
    class="justify-center"
    >
        <v-col
        cols="12"
        lg="6"
        md="12"
        sm="12"
        xs="12"
        :class="this.$vuetify.breakpoint.mdAndUp ? '' : 'px-0 pb-0'"
        >
            <v-col
            cols="12"
            :class="this.$vuetify.breakpoint.mdAndUp ? '' : 'px-0'"
            >
                <Carousel
                :stories="storiesList"/>
            </v-col>
            <v-col
            cols="12"
            :class="this.$vuetify.breakpoint.mdAndUp ? '' : 'px-0'"
            >
                <ConsolePost/>
            </v-col>
        </v-col>

        <v-col
        cols="4"
        class="hidden-md-and-down"
        >
            <v-col
            cols="12"
            >
                <Tips
                :profiles='storiesList'
                />
            </v-col>
        </v-col>
    </v-row>
</template>

<script>

import Carousel from "../components/Carousel.vue";
import ConsolePost from "../pages/home/Console-post.vue";
import Tips from "../components/home/Tips.vue";

// Vuex
import { mapGetters, mapActions} from 'vuex';

export default {

    name: "Home",
    components:{
        Carousel,
        ConsolePost,
        Tips
    },
    data: () => ({}),
    mounted() {
        this.storiesRequest();
    },
    computed: {
        ...mapGetters('stories', [
            'storiesList'
        ])
    },
    methods:{
        ...mapActions('stories', [
            'storiesRequest',
        ])
    }
}
</script>

