<template>
  <div>
    <divider/>

    <header-large>
      CARD
    </header-large>

    <text-large>
      The `card` component provides the ability to organize
      content into different sections.
    </text-large>

    <code-example title="Basic Example" :code="basicExample">
      <template v-slot:example>
        <card title="Card Title">
          <text-large>
            Card Body
          </text-large>
        </card>
      </template>
    </code-example>

    <br/>
    <br/>

    <usage :props="props" :slots="slots"/>

    <br/>
    <br/>

    <code-example title="With Shadow" :code="shadowExample">
      <template v-slot:example>
        <card
          title="Card Title"
          shadow
        >
          <text-large>
            Card Body
          </text-large>
        </card>
      </template>
    </code-example>
  </div>
</template>

<script>
export default {
  name: 'CardDocs',
  data: () => ({
    basicExample: ''
      + '<template>\n'
      + '  <card title="Card Title">\n'
      + '    <text-large>\n'
      + '      Card Body\n'
      + '    </text-large>\n'
      + '  </card>\n'
      + '</template>\n'
      + '\n'
      + '<script>\n'
      + 'export default {\n'
      + '  name: \'CardExample\',\n'
      + '};\n'
      + '<script>',
    shadowExample: ''
      + '<template>\n'
      + '  <card\n'
      + '    title="Card Title"\n'
      + '    shadow\n'
      + '  >\n'
      + '    <text-large>\n'
      + '      Card Body\n'
      + '    </text-large>\n'
      + '  </card>\n'
      + '</template>\n'
      + '\n'
      + '<script>\n'
      + 'export default {\n'
      + '  name: \'CardExample\',\n'
      + '};\n'
      + '<script>',
    props: [
      {
        name: 'title',
        type: 'string',
        description: 'Title of card',
      },
    ],
    slots: [],
  }),
};
</script>

<style scoped>
.divider {
  margin: 32px 0px;
}
.image-container {
  width: 200px;
}
</style>
