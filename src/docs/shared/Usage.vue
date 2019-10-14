<template>
  <card title="Usage" class="usage">
    <header-medium v-if="props.length">
      Props
    </header-medium>
    <div
      v-for="(prop, index) in props"
      :key="index"
    >
      <text-large>
        {{prop.name}} | {{prop.type}} | {{prop.description}}
      </text-large>
    </div>

    <header-medium v-if="slots.length">
      Slots
    </header-medium>
    <div
      v-for="(slot, index) in slots"
      :key="'slot-' + index"
    >
      <text-large>
        {{slot.name}} | {{slot.description}}
      </text-large>
    </div>
  </card>
</template>

<script>
export default {
  name: 'Usage',
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
