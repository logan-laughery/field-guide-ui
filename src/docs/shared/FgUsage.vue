<template>
  <div>
    <fg-header-large>
      FgUsage
    </fg-header-large>

    <fg-header-medium v-if="props.length">
      Props
    </fg-header-medium>
    <div
      v-for="(prop, index) in props"
      :key="index"
    >
      <fg-text-large>
        {{prop.name}} | {{prop.type}} | {{prop.description}}
      </fg-text-large>
    </div>

    <fg-header-medium v-if="slots.length">
      Slots
    </fg-header-medium>
    <div
      v-for="(slot, index) in slots"
      :key="'slot-' + index"
    >
      <fg-text-large>
        {{slot.name}} | {{slot.description}}
      </fg-text-large>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FgUsage',
  props: {
    props: {
      type: Array,
      default() {
        return [];
      },
    },
    slots: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
</style>
