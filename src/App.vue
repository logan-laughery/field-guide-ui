<template>
  <Container mobile>
    <template slot="sidebar" slot-scope="sidebar">
      <SideBar
        class="side-bar"
        :toggle="sidebar.toggle"
        title="Field Guide"
        :page="currentRouteName"
      >
        <Content>
          <header-large v-if="!sidebar.isMobile">
            FIELD GUIDE
          </header-large>
          <br v-if="!sidebar.isMobile"/>
          <header-medium>
            Overview
          </header-medium>
          <router-link
            @click.native="sidebar.close"
            to="/Introduction"
          >
            Introduction
          </router-link>
          <router-link
            @click.native="sidebar.close"
            to="/Introduction"
          >
            Setup
          </router-link>
          <header-medium>
            Components
          </header-medium>
          <router-link
            @click.native="sidebar.close"
            to="/ImageContainer"
          >
            Image Container
          </router-link>
          <router-link
            @click.native="sidebar.close"
            to="/Card"
          >
            Card
          </router-link>
        </Content>
      </SideBar>
    </template>
    <template slot="content">
      <Content padding>
        <router-view/>
      </Content>
    </template>
  </Container>
</template>

<script>
import './components/index';
import './docs/shared/index';

export default {
  name: 'app',
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
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
  margin-top: 10px;
  margin-bottom: 10px;
  display: block;
}
.side-bar a:visited {
  text-decoration: inherit;
  color: inherit;
}
.side-bar a:hover, .side-bar a:active  {
  text-decoration: underline;
}
.content.padding > div {
  padding-bottom: 30px;
}
</style>
