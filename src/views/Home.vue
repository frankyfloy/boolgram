<template>
    <v-container>
        <v-row>
            <v-col>
                <div
                class="d-flex py-10 mb-10 overflow-x-auto">

                    <Stories
                    v-for="n in 40"
                    :key="n"
                    />

                </div>

                <v-menu
                v-for="n in 10"
                :key="n"
                v-model="showMenu"
                absolute
                offset-y
                >
                    <template v-slot:activator="{ on, attrs }">
                        <div class="px-3">
                            <v-card
                                class="portrait"
                                img="https://cdn.vuetifyjs.com/images/cards/girl.jpg"
                                height="300"
                                width="600"
                                v-bind="attrs"
                                v-on="on"
                            >
                            </v-card>

                            <v-list>
                                <v-list-item
                                  v-for="(item, index) in items"
                                  :key="index"
                                >
                                    <v-list-item-title v-html="'Post ' + n  + ' '  + item.title" ></v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </div>
                    </template>
                </v-menu>
            </v-col>

            <v-navigation-drawer
            app
            fixed
            right
            top= "0px"
            width= "280px"
            color="indigo darken-2"
            >
                <v-list
                dense
                rounded
                >
                    <v-list-item
                    v-for="(item, i) in 5"
                    :key="item.title"
                    link
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-html="item.title + '' + i"></v-list-item-title>
                        </v-list-item-content>

                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-row>
    </v-container>
</template>


<script>
import Stories from "../components/Stories.vue";

export default {
    name: "Home",
    components:{
        Stories,
    },
    data: () => ({

        // SIDEBAR
        showMenu: false,
        items: [
            { title: 'Comment 1' },
            { title: 'Comment 2' },
            { title: 'Comment 3' },
            { title: 'Comment 4' },
        ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>
