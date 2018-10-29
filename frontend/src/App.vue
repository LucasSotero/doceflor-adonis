<template>
  <v-app>
    <v-navigation-drawer persistent :clipped="true" v-model="drawer" app class="pink" dark>
      <v-list dense>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-action class="white--text">
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="white--text">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="true" dense dark color="pink">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content color="#bababa">
      <router-view/>
    </v-content>
    <v-footer class="pa-3">
    <v-spacer></v-spacer>
      <div>&copy;{{ title + new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: true,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'DoceFlor'
    }
  }
}
</script>
