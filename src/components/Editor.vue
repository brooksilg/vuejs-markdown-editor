<template>
  <div class="editor">
    <textarea
      v-model="textAreaContent"
      class="editor-textarea"
      placeholder="Write your markdown text here"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Editor',
  computed: {
    ...mapState([
      'editorText',
    ]),
    textAreaContent: {
      get() {
        return this.editorText;
      },
      set(value) {
        this.updateEditorText(value);
      },
    },
  },
  methods: {
    ...mapMutations([
      'updateEditorText',
    ]),
  },
};
</script>

<style>
.editor {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.editor-textarea {
  flex: 1;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  resize: none;
  padding: 20px;
}
</style>
