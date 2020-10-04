<template>
  <div>
    <divider/>

    <header-large>
      IMAGE CONTAINER
    </header-large>

    <text-large>
      The `image-container` component provides the ability to render images.
    </text-large>

    <code-example title="Basic Example" :code="basicExample">
      <template v-slot:example>
        <image-container :src="basicExampleImage"/>
      </template>
    </code-example>

    <br/>
    <br/>

    <usage :props="props" :slots="slots"/>

    <br/>
    <br/>

    <code-example title="With Caption" :code="labelExample">
      <template v-slot:example>
        <image-container :src="labelExampleImage">
          <template v-slot:caption>
            <span>
              This is a caption.
            </span>
          </template>
        </image-container>
      </template>
    </code-example>
  </div>
</template>

<script>
import basicExampleImage from '../assets/field_note_examples/bird_1.jpg';
import labelExampleImage from '../assets/field_note_examples/bird_3.jpg';

export default {
  name: 'ImageContainerDocs',
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
