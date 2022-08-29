<template>
  <div id="app">
    <div>
      <Gnb/>
      <router-view />
    </div>
  </div>
</template>

<script>
import Gnb from "@/components/navigation/Gnb.vue";
export default {
  name: 'App',
  components: {
    Gnb,
  }
}
</script>

<style>
body{
  margin:0px;
  padding:0px;
  width:100%;
  height: 100%;
  font-family: 'Nanum Gothic', sans-serif;
}
</style>
