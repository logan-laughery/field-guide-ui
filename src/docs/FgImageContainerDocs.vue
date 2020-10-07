<template>
  <div>
    <fg-divider/>

    <fg-header-large>
      FG IMAGE CONTAINER
    </fg-header-large>

    <fg-text-large>
      The `fg-image-container` component provides the ability to render images.
    </fg-text-large>

    <fg-code-example title="Basic Example" :code="basicExample">
      <template v-slot:example>
        <fg-image-container :src="basicExampleImage"/>
      </template>
    </fg-code-example>

    <br/>
    <br/>

    <fg-usage :props="props" :slots="slots"/>

    <br/>
    <br/>

    <fg-code-example title="With Caption" :code="labelExample">
      <template v-slot:example>
        <fg-image-container :src="labelExampleImage">
          <template v-slot:caption>
            <span>
              This is a caption.
            </span>
          </template>
        </fg-image-container>
      </template>
    </fg-code-example>
  </div>
</template>

<script>
import basicExampleImage from '../assets/field_note_examples/bird_1.jpg';
import labelExampleImage from '../assets/field_note_examples/bird_3.jpg';

export default {
  name: 'FgImageContainerDocs',
  data: () => ({
    basicExampleImage,
    basicExample: ''
      + '<template>\n'
      + '  <fg-image-container :src="birdImage">\n'
      + '</template>\n'
      + '\n'
      + '<script>\n'
      + 'import birdImage from \'../assets/field_note_examples/bird_1.jpg\';\n'
      + '\n'
      + 'export default {\n'
      + '  name: \'FgImageContainer\',\n'
      + '  data: () => ({\n'
      + '    birdImage,\n'
      + '  }),\n'
      + '};\n'
      + '<script>',
    labelExampleImage,
    labelExample: ''
      + '<template>\n'
      + '  <fg-image-container :src="labelImage">\n'
      + '   <template v-slot:caption>\n'
      + '     <span>\n'
      + '       This is a caption.\n'
      + '     </span>\n'
      + '   </template>\n'
      + '  </fg-image-container>\n'
      + '</template>\n'
      + '\n'
      + '<script>\n'
      + 'import labelImage from \'../assets/field_note_examples/bird_4.jpg\';\n'
      + '\n'
      + 'export default {\n'
      + '  name: \'FgImageContainer\',\n'
      + '  data: () => ({\n'
      + '    labelImage,\n'
      + '  }),\n'
      + '};\n'
      + '<script>',
    props: [
      {
        name: 'src',
        type: 'string',
        description: 'Image to be rendered',
      },
    ],
    slots: [
      {
        name: 'caption',
        description: 'Renders below the image.  Typically used for captions.',
      },
    ],
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
