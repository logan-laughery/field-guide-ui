<template>
  <div class="card-container"  v-bind:class="{ shadow: shadow }">
    <div class="card-header">
      <div class="card-header-left"/>
      <div class="card-header-title">
        <header-medium>
          {{title}}
        </header-medium>
      </div>
      <div class="card-header-right"/>
    </div>
    <div class="card-body">
      <slot/>
    </div>
  </div>
</template>

<script>
import 'highlight.js/styles/default.css';

export default {
  name: 'Card',
  props: {
    title: String,
    shadow: Boolean,
  },
};
</script>

<style scoped>
.card-header {
  display: flex;
  flex-direction: row;
  height: 30px;
  overflow: hidden;
}

.card-header-left {
  border-left-color: black;
  border-left-style: solid;
  border-left-width: 2px;
  border-top-color: black;
  border-top-style: solid;
  border-top-width: 2px;
  height: 50%;
  width: 12px;
  align-self: flex-end;
}

.card-header-title {
  align-self: center;
  padding-left: 6px;
  padding-right: 6px;
}

.card-header-right {
  border-right-color: black;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: black;
  border-top-style: solid;
  border-top-width: 2px;
  height: 50%;
  flex-grow: 1;
  align-self: flex-end;
}

.card-body {
  border-width: 2px;
  border-style: solid;
  padding: 16px;
  border-top: 0px;
}

.shadow .card-header-right {
  border-right-width: 6px;
}

.shadow .card-body {
  border-right-width: 6px;
  border-bottom-width: 6px;
}
</style>
