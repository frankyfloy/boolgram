<template>
    <v-item-group active-class="primary">

        <v-card
        max-width="100%"
        width="100%"
        elevation="4"
        class="pb-3"
        color="grey lighten-5"
        >
            <v-toolbar
              color="grey lighten-2"
              height="35px"
              class="mb-10"
              elevation="1"
            >
                <v-toolbar-title class="subtitle-2">{{nameGroup}}</v-toolbar-title>
            </v-toolbar>

            <v-col v-if="!statusReq"
            cols="12"
            >
                <SkeletonPost />
            </v-col>

            <v-col
                v-for="(post, i) in posts"
                :key="'post' + i"
                cols="12"
                class="py-0"
            >
                <Header
                :post="post"
                />

                <v-item v-slot="{ active, toggle }">
                    <div
                    class="d-flex flex-column">
                        <v-card
                            :img="post.post_image"
                            elevation="2"
                            class="d-flex align-center portrait rounded-0"
                            height="500"
                            width="100%"
                            @click="toggle"
                        >
                            <v-scroll-y-transition>
                              <div
                                v-if="active"
                                class="text-h2 flex-grow-1 text-center"
                              >
                                #hashtag
                              </div>
                            </v-scroll-y-transition>
                        </v-card>
                    </div>
                </v-item>

                <!-- Commenti e like -->
                <PostEngagement
                :comments="post.comments"
                :likes="post.likes"
                :postNum="i"
                />
                <v-divider v-if="i < posts.length - 1"
                class="my-10"></v-divider>
            </v-col>
        </v-card>
    </v-item-group>
</template>

<script>

import PostEngagement from "@/components/post/PostEngagement.vue";
import SkeletonPost from "@/components/SkeletonPost.vue";
import Header from "@/components/post/Header.vue";

    export default {
    components:{
        SkeletonPost,
        PostEngagement,
        Header
    },
    data: () => ({
        benched: 0,

        attrs: {
            class: 'mb-6',
            boilerplate: true,
            elevation: 2,
        },
    }),
    props: {
        posts: {
            type: Array,
        },
        statusReq:{
            type:  Boolean,
        },
        nameGroup:{
            type: String,
        }
    },
  }
</script>

<style scoped>
    .object{
        border: 1px solid black;
    }
</style>
