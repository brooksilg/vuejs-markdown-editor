<template>
  <div id="app">
    <Editor />
    <Preview />
  </div>
</template>

<script>
import Editor from './components/Editor.vue';
import Preview from './components/Preview.vue';

export default {
  name: 'App',
  components: {
    Editor,
    Preview,
  },
};
</script>
