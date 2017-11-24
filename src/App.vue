<template>
<div id="main">
	<my-home v-if="$route.path=='/'"></my-home>
  <router-view></router-view>
</div>
</template>

<script>
import myhome from './components/my-home.vue'

export default {
  name: 'main',
  components: {'my-home':myhome}
}
</script>

<style>
body {padding: 0!important;}
</style>