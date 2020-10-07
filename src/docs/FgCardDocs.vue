<template>
  <div>
    <fg-divider/>

    <fg-header-large>
      FgCard
    </fg-header-large>

    <fg-text-large>
      The `fg-card` component provides the ability to organize
      content into different sections.
    </fg-text-large>

    <fg-code-example title="Basic Example" :code="basicExample">
      <template v-slot:example>
        <fg-card title="Card Title">
          <fg-text-large>
            Card Body
          </fg-text-large>
        </fg-card>
      </template>
    </fg-code-example>

    <br/>
    <br/>

    <fg-usage :props="props" :slots="slots"/>

    <br/>
    <br/>

    <fg-code-example title="With Shadow" :code="shadowExample">
      <template v-slot:example>
        <fg-card
          title="Card Title"
          shadow
        >
          <fg-text-large>
            Card Body
          </fg-text-large>
        </fg-card>
      </template>
    </fg-code-example>
  </div>
</template>

<script>
export default {
  name: 'FgCardDocs',
  data: () => ({
    basicExample: ''
      + '<template>\n'
      + '  <fg-card title="Card Title">\n'
      + '    <fg-text-large>\n'
      + '      Card Body\n'
      + '    </fg-text-large>\n'
      + '  </fg-card>\n'
      + '</template>\n'
      + '\n'
      + '<script>\n'
      + 'export default {\n'
      + '  name: \'CardExample\',\n'
      + '};\n'
      + '<script>',
    shadowExample: ''
      + '<template>\n'
      + '  <fg-card\n'
      + '    title="Card Title"\n'
      + '    shadow\n'
      + '  >\n'
      + '    <fg-text-large>\n'
      + '      Card Body\n'
      + '    </fg-text-large>\n'
      + '  </fg-card>\n'
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
