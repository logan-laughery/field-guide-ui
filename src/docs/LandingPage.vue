<template>
  <div>
    <divider/>
    <text-large>
      A design system inspired by the simplicity and useability
      found in vintage field guides.
    </text-large>
    <divider/>
    <image-container
      v-for="(image, index) in images"
      :src="image"
      :key="index"
    />
  </div>
</template>

<script>
import birdImageOne from '../assets/field_note_examples/bird_1.jpg';
import birdImageTwo from '../assets/field_note_examples/bird_2.jpg';
import birdImageThree from '../assets/field_note_examples/bird_3.jpg';
import birdImageFour from '../assets/field_note_examples/bird_4.jpg';
import birdImageFive from '../assets/field_note_examples/bird_5.jpg';
import fossilImageOne from '../assets/field_note_examples/fossil_1.jpg';
import fossilImageTwo from '../assets/field_note_examples/fossil_2.jpg';
import fossilImageThree from '../assets/field_note_examples/fossil_3.jpg';
import plantImageOne from '../assets/field_note_examples/plant_1.jpg';


export default {
  name: 'LandingPage',
  data: () => ({
    images: [
      birdImageOne,
      birdImageTwo,
      birdImageThree,
      birdImageFour,
      birdImageFive,
      fossilImageOne,
      fossilImageTwo,
      fossilImageThree,
      plantImageOne,
    ],
  }),
};
</script>

<style scoped>
.divider {
  margin: 32px 0px;
}
.text-large {
  max-width: 450px;
}
.image-container {
  width: 200px;
  margin: 20px;
  margin-left: 0px;
  margin-top: 0px;
}
</style>
