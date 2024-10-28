<template>
  <div>
    <nav
      class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3"
    >
      <div
        class="container px-4 mx-auto flex flex-wrap items-center justify-between"
      >
        <div
          class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
        >
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contacts">Contacts</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
  <img alt="Vue logo" src="./assets/logo.png" width="30" height="30" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import "./main.css";
import "./main.styl";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  display flex
  flex-direction column
  justify-content space-between
</style>
