<template>
  <Container>
    <SideBar>
      <header-large>
        FIELD GUIDE
      </header-large>
    </SideBar>
    <Content>
      <router-view/>
    </Content>
  </Container>
</template>

<script>
import './components/index';

export default {
  name: 'app',
};
</script>

<style>
</style>
