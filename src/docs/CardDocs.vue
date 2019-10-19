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

    <usage :props="props" :slots="slots"/>

    <code-example title="With Shadow" :code="labelExample">
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
import basicExampleImage from '../assets/field_note_examples/bird_1.jpg';
import labelExampleImage from '../assets/field_note_examples/bird_3.jpg';

export default {
  name: 'CardDocs',
  data: () => ({
    basicExampleImage,
    basicExample: ''
      + '<template>\n'
      + '  <image-container :src="birdImage">\n'
      + '</template>\n'
      + '\n'
      + '<script>\n'
      + 'import birdImage from \'../assets/field_note_examples/bird_1.jpg\';\n'
      + '\n'
      + 'export default {\n'
      + '  name: \'ImageContainer\',\n'
      + '  data: () => ({\n'
      + '    birdImage,\n'
      + '  }),\n'
      + '};\n'
      + '<script>',
    labelExampleImage,
    labelExample: ''
      + '<template>\n'
      + '  <image-container :src="labelImage">\n'
      + '   <template v-slot:caption>\n'
      + '     <span>\n'
      + '       This is a caption.\n'
      + '     </span>\n'
      + '   </template>\n'
      + '  </image-container>\n'
      + '</template>\n'
      + '\n'
      + '<script>\n'
      + 'import labelImage from \'../assets/field_note_examples/bird_4.jpg\';\n'
      + '\n'
      + 'export default {\n'
      + '  name: \'ImageContainer\',\n'
      + '  data: () => ({\n'
      + '    labelImage,\n'
      + '  }),\n'
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
