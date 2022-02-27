<template>
  <div id="app">
    <to-do-list></to-do-list>
    <youtube></youtube>
    <facebook></facebook>
  </div>
</template>

<script>
import list from './components/list.vue';
import test_yt from './components/test_yt.vue';
import test_fb from './components/test_fb.vue';

export default {
  name: 'app',
  components: {
    'to-do-list': list,
    'youtube': test_yt,
    'facebook': test_fb
  }
}
</script>

<style>

</style>