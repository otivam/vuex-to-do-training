<template>
  <div id="app">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <facebook img="facebook_img_2.jpg" title="Test title (FB post)" info="What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></facebook>
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
  },
  data() {
    return {
      img: '',
      title: '',
      info: ''
    }
  }
}
</script>

<style>

@import '~bootstrap/dist/css/bootstrap.css'
</style>