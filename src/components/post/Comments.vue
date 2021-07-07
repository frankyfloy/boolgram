<template lang="html">
    <div
    color="deep-purple accent-4"
    class="d-flex flex-column align-start"
    >

        <div
          v-for="(comment, n) in comments"
          :key="'comments' + n + '_Post' + postNum"
        >
            <SingleComment
            v-if="n < 3"
            :comment="comment"
            />
        </div>

        <div class="text-center">
            <v-dialog
            v-model="dialog"
            width="400px"
            retain-focus
            >
                <template v-slot:activator="{ on }">
                    <v-btn
                    text
                    plain
                    v-on="on"
                    color="blue darken-4"
                    class="font-weight-bold pl-0"
                    >
                        <small>Mostra tutti e <strong>{{numComments}}</strong> i commenti</small>

                    </v-btn>
                </template>

                <v-card
                min-width="80%"
                height="80%"
                app
                fixed
                right
                >
                    <h3 class="text-center py-3">Commenti</h3>
                    <v-divider></v-divider>
                    <v-list>
                        <v-list-item
                          v-for="(comment, n) in comments"
                          :key="'comments' + n + '_Post' + postNum"
                        >
                            <v-list-item-content>
                                <SingleComment
                                :comment="comment"
                                />
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
import SingleComment from "@/components/post/SingleComment.vue";

export default {

    name: "Comments",
    components:{
        SingleComment
    },
    props: {
        comments: {
            type: Array,
        },
        postNum:{
            type:  Number,
        }
    },
    data: () => ({
        numComments: 0,
        dialog: false,
    }),

    mounted(){
        this.numComments = this.comments.length;
    }
}
</script>
