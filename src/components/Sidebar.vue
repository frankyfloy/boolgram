<v-navigation-drawer
v-model="showMenu"
app
fixed
right
top= "0px"
width= "280px"
color="indigo darken-2"
>
<v-btn
  class="mx-5 my-5"
  fab
  dark
  x-small
  color="primary"
>
    <v-icon dark>
        mdi-close
    </v-icon>
</v-btn>
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



<script>

export default {
    name: "Sidebar",
    components:{

    },
    data: () => ({

        // SIDEBAR
        showMenu: true,
        items: [
            { title: 'Comment 1' },
            { title: 'Comment 2' },
            { title: 'Comment 3' },
            { title: 'Comment 4' },
        ],
    }),
    watch: {

    },
};
</script>
