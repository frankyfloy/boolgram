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
                <v-toolbar-title class="subtitle-2">Post</v-toolbar-title>
            </v-toolbar>

            <v-col v-if="!statusReq"
            cols="12"
            >
                <SkeletonPost/>
            </v-col>

            <v-col
                v-for="(post, i) in postsList"
                :key="'post' + i"
                cols="12"
                class="py-0"
            >
                <Header
                :creator="post.user_id"
                :content="post.content"
                :avatar="post.image"
                />

                <v-item v-slot="{ active, toggle }">
                    <div
                    class="d-flex flex-column">
                        <v-card
                            elevation="5"
                            :img="post.image"

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

                <!-- Commenti e like
                <PostEngagement
                :comments="post.comments"
                :likes="post.likes"
                :postNum="i"
                />-->
                <v-divider v-if="i < postsList.length - 1"
                class="my-10"></v-divider>
            </v-col>
        </v-card>
    </v-item-group>
</template>

<script>

// Vuex
import { mapGetters, mapActions} from 'vuex';

//import PostEngagement from "@/components/post/PostEngagement.vue";
import SkeletonPost from "@/components/SkeletonPost.vue";
import Header from "@/components/post/Header.vue";

export default {
    components:{
        SkeletonPost,
        Header
    },
    data: () => ({
        benched: 0,
        statusReq: false,
        attrs: {
            class: 'mb-6',
            boilerplate: true,
            elevation: 2,
        },
    }),
    mounted() {

      setTimeout(() => {
        this.postsRequest();
        this.statusReq = true;
      }, 3000);

    },

    computed: {
      ...mapGetters('posts', [
        'postsList',
      ])
    },

    methods:{
      ...mapActions('posts', [
        'postsRequest',
      ])
    }
}
</script>
