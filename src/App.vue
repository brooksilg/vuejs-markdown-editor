<template>
  <div id="app">
    <rs-panes
      split-to="columns"
      :allow-resize="true"
      size="50"
      units="percents"
    >
      <div slot="firstPane">
        <Editor />
      </div>
      <div slot="secondPane">
        <Preview />
      </div>
    </rs-panes>
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

<style>
  html, body{
    margin: 0;
    padding: 0;
  }
</style>
