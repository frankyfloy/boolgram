<template>
    <v-skeleton-loader
      v-bind="attrs"
      type="list-item-avatar-three-line, image, article"
    ></v-skeleton-loader>
</template>

<script>
    export default {
    name:"SkeletonPost",
    data: () => ({
        attrs: {
            class: 'mb-6',
            boilerplate: false,
            elevation: 2,
        },
    }),
  }
</script>
