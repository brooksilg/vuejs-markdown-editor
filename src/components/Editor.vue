<template>
  <div>
    <h1>Editor</h1>
    <textarea
      v-model="textAreaContent"
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
