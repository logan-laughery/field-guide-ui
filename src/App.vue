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
            v-for="overviewLink in overviewLinks"
            @click.native="sidebar.close"
            :to="overviewLink.to"
            :key="overviewLink.label"
          >
            {{getLinkText(overviewLink)}}
          </router-link>
          <header-medium>
            Components
          </header-medium>
          <router-link
            v-for="componentLink in componentLinks"
            @click.native="sidebar.close"
            :to="componentLink.to"
            :key="componentLink.label"
          >
            {{getLinkText(componentLink)}}
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
  data: () => ({
    componentLinks: [
      {
        to: '/ImageContainer',
        label: 'Image Container',
      },
      {
        to: '/Card',
        label: 'Card',
      },
      {
        to: '/Table',
        label: 'Table',
      },
    ],
    overviewLinks: [
      {
        to: '/Introduction',
        label: 'Introduction',
      },
      {
        to: '/Setup',
        label: 'Setup',
      },
    ],
  }),
  methods: {
    getLinkText(link) {
      if (this.$route.path === link.to) {
        return `> ${link.label}`;
      }

      return link.label;
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
.side-bar a.router-link-active {
  text-decoration: none;
  padding-left: 6px;
  cursor: default;
}
.content.padding > div {
  padding-bottom: 30px;
}
</style>
