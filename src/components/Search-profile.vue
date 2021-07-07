<template>
    <v-autocomplete
    :loading="isLoading"
    color="black"
    @click="inputActive()"
    hide-details
    label="Cerca un profilo..."
    solo
    light
    clearable
    >
        <template v-slot:no-data>
            <v-list-item>
                <v-list-item-title>
                    Trova
                    <strong>Amici</strong>
                </v-list-item-title>
            </v-list-item>
        </template>
    </v-autocomplete>
</template>


<script>
  export default {
    data: () => ({
      isLoading: false,

    }),

    methods:{
        inputActive(){
            this.isLoading = !this.isLoading;
        }
    }
  }
</script>
