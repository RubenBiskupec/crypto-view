<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      CRYPTO LAND

      <v-spacer></v-spacer>

      JAMIE_JOE & SLAV_VIKING
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
