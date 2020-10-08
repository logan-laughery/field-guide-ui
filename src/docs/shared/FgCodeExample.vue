<template>
  <div class="code-example">
    <fg-card
      :title="title"
    >
      <div class="label" v-on:click="toggleCode">
        {{labelText}}
      </div>
      <fg-code-content v-if="viewingCode" :code="code"/>
      <div v-else>
        <slot name="example"/>
      </div>
    </fg-card>
  </div>
</template>

<script>
export default {
  name: 'FgCodeExample',
  props: {
    title: String,
    code: String,
  },
  computed: {
    labelText() {
      return this.viewingCode
        ? '[ View Results ]'
        : '[ View Code ]';
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
    margin-bottom: 5px;
    margin-top: -12px;
    cursor: pointer;
    user-select: none;
    width: fit-content;
    color: #ef0000;
}
</style>
