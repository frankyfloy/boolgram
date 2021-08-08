<template>
    <div
    color="deep-purple accent-4"
    class="d-flex align-center"
    >
        <Avatar
        :profile="likes[0]"
        :size="25"
        />

        <small class="px-2">Piace a</small>

        <small class="pr-1">
            <router-link
            :to="{ name: 'Profile', params: {} }">
                <strong
                color="indigo accent-3">
                    {{ likes[0].username}}
                </strong>
            </router-link>
        </small>

        <small class="pl-1">e altri</small>

        <div class="text-center">

            <v-dialog
            v-model="dialog"
            width="400px"
            retain-focus
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                    icon
                    v-on="on"
                    color="indigo accent-3"
                    class="font-weight-bold"
                    >
                     {{numLikes}}
                    </v-btn>

                </template>

                <v-card
                min-width="80%"
                height="80%"
                app
                fixed
                right
                >
                    <h3 class="text-center py-3">Likes</h3>
                    <v-divider></v-divider>
                    <v-list>
                        <v-list-item
                          v-for="(like, n) in likes"
                          :key="'like' + n + '_Post' + postNum"
                        >

                            <v-list-item-content>
                                <router-link
                                :to="{ name: 'Profile', params: {} }">
                                    <v-list-item-title>
                                        <span>{{like.username}}</span>
                                    </v-list-item-title>
                                </router-link>
                            </v-list-item-content>

                        </v-list-item>
                    </v-list>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>


<script>
import Avatar from "@/components/Avatar.vue";

export default {

    name: "Likes",

    components:{
        Avatar
    },
    props: {
        likes:{
            type:  Array,
        },
        postNum:{
            type:  Number,
        }
    },

    data: () => ({
        numLikes: 0,
        dialog: false,
    }),

    mounted(){
        this.numLikes = this.likes.length;
    }
}
</script>
