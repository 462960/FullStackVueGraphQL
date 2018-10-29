<template>
  <v-app>
    <!-- Horisontal navbar -->
    <v-toolbar fixed color="primary" dark>
      <!-- App title -->
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor: pointer">
          VueShare
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Search input -->
      <v-text-field flex prepend-icon="search" placeholder="Search posts" color="accent" single-line hide-details></v-text-field>
      <v-spacer></v-spacer>
      <!-- Horisontal navbar links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in horisontalNavItems" :key="item.title" :to="item.link">
          <v-icon left class="hidden-sm-only">{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- App content -->
    <main>
      <v-container class="mt-4">
        <router-view />
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    horisontalNavItems() {
      return [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
    }
  }
};
</script>



