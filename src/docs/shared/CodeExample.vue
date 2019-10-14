<template>
  <div class="code-example">
    <header-medium>
      {{title}}
    </header-medium>
    <div class="label" v-on:click="toggleCode">
      {{labelText}}
    </div>
    <code-content v-if="viewingCode" :code="code"/>
    <div v-else>
      <slot name="example"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeExample',
  props: {
    title: String,
    code: String,
  },
  computed: {
    labelText() {
      return this.viewingCode
        ? 'View Results'
        : 'View Code';
    },
  },
  data: () => ({
    viewingCode: false,
  }),
  methods: {
    toggleCode() {
      this.viewingCode = !this.viewingCode;
    },
  },
};
</script>

<style scoped>
.code-example .label {
    margin-bottom: 12px;
    margin-top: -12px;
    cursor: pointer;
    width: fit-content;
}
</style>
