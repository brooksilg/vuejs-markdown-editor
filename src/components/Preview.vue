<template>
  <div class="preview">
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="preview-html"
      v-html="renderedHTML"
    />
    <!-- eslint-enable vue/no-v-html -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import markdown from '../api/markdown';

export default {
  name: 'Preview',
  computed: {
    ...mapState([
      'editorText',
    ]),
    renderedHTML() {
      return markdown.markdownToHTML(this.editorText);
    },
  },
};
</script>

<style>
  .preview {
    padding: 20px;
  }
</style>
