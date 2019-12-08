<template>
  <div class="preview">
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="preview-html markdown-body"
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
  @import '../assets/css/github-markdown.min.css';
  .preview {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    overflow: auto;
    padding: 20px;
    box-sizing: border-box;
  }
</style>
