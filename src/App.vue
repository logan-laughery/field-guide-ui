<template>
  <Container mobile>
    <template slot="sidebar" slot-scope="scope">
      <SideBar
        class="side-bar"
        :toggle="scope.toggle"
      >
        <Content>
          <header-large>
            FIELD GUIDE
          </header-large>
          <br/>
          <header-medium>
            Overview
          </header-medium>
          <router-link
            @click.native="scope.close"
            to="/Introduction"
          >
            Introduction
          </router-link>
          <router-link
            @click.native="scope.close"
            to="/Introduction"
          >
            Setup
          </router-link>
          <header-medium>
            Components
          </header-medium>
          <router-link
            @click.native="scope.close"
            to="/ImageContainer"
          >
            Image Container
          </router-link>
          <router-link
            @click.native="scope.close"
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
