<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            :style="{ textAlign: header.align ? header.align : 'left'  }"
          >
            {{ header.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in items" :key="'row' + rowIndex">
          <td
            v-for="(col, colIndex) in Object.keys(row).length"
            :key="'col' + colIndex"
            :style="{ textAlign: headers[colIndex].align ? headers[colIndex].align : 'left'  }"
          >
            {{ row[headers[colIndex].value] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import 'highlight.js/styles/default.css';

export default {
  name: 'Table',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    headers: {
      type: Array,
      required: true,
      default: () => [],
      validator: (headers) => {
        const requiredKeys = ['label', 'valueKey'];
        return headers.every(
          (header) => requiredKeys.every(
            (key) => Object.prototype.hasOwnProperty.call(header, key),
          ),
        );
      },
    },
  },
};
</script>

<style scoped>
.table-container th {
  font-weight: normal;
  border-bottom: 2px dashed;
  padding-bottom: .35em;
}
.table-container td {
  padding-top: .5em;
}
</style>
