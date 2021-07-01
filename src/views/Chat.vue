<template>
    <v-container>
        <v-row>
            <v-col>
                <!-- FAKE DATA -->
                <v-menu
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
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </div>
                    </template>
                </v-menu>

                <v-menu
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
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </div>
                    </template>
                </v-menu>

                <v-menu
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
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </div>
                    </template>
                </v-menu>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: "Chat",
    components:{

    },
    data: () => ({

    }),

    watch: {

    },
};
</script>
