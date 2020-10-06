<template>
  <div>
    <divider/>

    <header-large>
      Table
    </header-large>

    <text-large>
      The `table` component provides the ability to organize
      content into different rows.
    </text-large>

    <code-example title="Basic Example" :code="basicExample">
      <template v-slot:example>
        <Table
          :items="items"
          :headers="headers"
        />
      </template>
    </code-example>

    <br/>
    <br/>

    <usage :props="props" :slots="slots"/>

  </div>
</template>

<script>
// eslint-disable-next-line no-useless-escape
const basicExample = '<template>\n  <Table\n    :items=\"items\"\n    :headers=\"headers\"\n  \/>\n<\/template>\n\n<script>\nexport default {\n  name: \'TableExample\',\n  data: () => ({\n    headers: [\n      {\n        label: \'Label1\',\n        valueKey: \'Value1\',\n        rightAlign: false,\n      },\n      {\n        label: \'Label2\',\n        valueKey: \'Value2\',\n        rightAlign: false,\n      },\n      {\n        label: \'Label3\',\n        valueKey: \'Value3\',\n        rightAlign: false,\n      },\n      {\n        label: \'Label4\',\n        valueKey: \'Value4\',\n        rightAlign: false,\n      },\n    ],\n    items: [\n      {\n        Value1: \'Value1\',\n        Value2: \'Value2\',\n        Value3: \'Value3\',\n        Value4: \'Value4\',\n      },\n      {\n        Value1: \'Value1\',\n        Value2: \'Value2\',\n        Value3: \'Value3\',\n        Value4: \'Value4\',\n      },\n      {\n        Value1: \'Value1\',\n        Value2: \'Value2\',\n        Value3: \'Value3\',\n        Value4: \'Value4\',\n      },\n      {\n        Value1: \'Value1\',\n        Value2: \'Value2\',\n        Value3: \'Value3\',\n        Value4: \'Value4\',\n      },\n    ],\n  }),\n};\n<\/script>';

export default {
  name: 'TableDocs',
  data: () => ({
    headers: [
      {
        label: 'Label1',
        valueKey: 'Value1',
        rightAlign: true,
      },
      {
        label: 'Label2',
        valueKey: 'Value2',
        rightAlign: false,
      },
      {
        label: 'Label3',
        valueKey: 'Value3',
        rightAlign: false,
      },
      {
        label: 'Label4',
        valueKey: 'Value4',
        rightAlign: false,
      },
    ],
    items: [
      {
        Value1: 'Value1',
        Value2: 'Value2',
        Value3: 'Value3',
        Value4: 'Value4',
      },
      {
        Value1: 'Value1',
        Value2: 'Value2',
        Value3: 'Value3',
        Value4: 'Value4',
      },
      {
        Value1: 'Value1',
        Value2: 'Value2',
        Value3: 'Value3',
        Value4: 'Value4',
      },
      {
        Value1: 'Value1',
        Value2: 'Value2',
        Value3: 'Value3',
        Value4: 'Value4',
      },
    ],
    props: [
      {
        name: 'Headers',
        type: 'Array',
        description: 'Array of header objects {label: x, valueKey: x, rightAlign: x}',
      },
      {
        name: 'Items',
        type: 'Array',
        description: 'Array of item objects',
      },
    ],
    slots: [],
    basicExample,
  }),
};
</script>

<style scoped>
.divider {
  margin: 32px 0px;
}
</style>
