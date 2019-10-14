<template>
  <Container>
    <SideBar class="side-bar">
      <Content>
        <header-large>
          FIELD GUIDE
        </header-large>
        <br/>
        <header-medium>
          Overview
        </header-medium>
        <router-link to="/Introduction">
          Introduction
        </router-link>
        <text-large>
          Setup
        </text-large>
        <header-medium>
          Components
        </header-medium>
        <router-link to="/ImageContainer">
          Image Container
        </router-link>
      </Content>
    </SideBar>
    <Content padding>
      <router-view/>
    </Content>
  </Container>
</template>

<script>
import './components/index';
import './docs/shared/index';

export default {
  name: 'app',
};
</script>

<style scoped>
.side-bar {
  padding: 0px;
  padding-right: 2px;
}
.side-bar a {
  text-decoration: inherit;
  color: inherit;
  font-size: 20px;
  font-weight: 400;
  padding-left: 20px;
}
.side-bar a:visited {
  text-decoration: inherit;
  color: inherit;
}
.side-bar a:hover {
  text-decoration: underline;
}
</style>
