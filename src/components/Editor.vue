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
      'inputMarkdown',
    ]),
    textAreaContent: {
      get() {
        return this.inputMarkdown;
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
