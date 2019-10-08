<template>
  <Container>
    <SideBar>
      <Content>
        <header-large>
          FIELD GUIDE
        </header-large>
        <br/>
        <header-medium>
          Overview
        </header-medium>
        <text-large>
          Introduction
        </text-large>
        <text-large>
          Setup
        </text-large>
        <header-medium>
          Components
        </header-medium>
        <text-large>
          Text
        </text-large>
      </Content>
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
.side-bar {
  padding: 0px;
  padding-right: 2px;
}
</style>
