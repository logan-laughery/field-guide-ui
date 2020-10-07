<template>
  <FgContainer mobile>
    <template slot="sidebar" slot-scope="sidebar">
      <fg-side-bar
        class="side-bar"
        :toggle="sidebar.toggle"
        title="Field Guide"
        :page="currentRouteName"
      >
        <fg-content>
          <fg-header-large v-if="!sidebar.isMobile">
            FIELD GUIDE
          </fg-header-large>
          <br v-if="!sidebar.isMobile"/>
          <fg-header-medium>
            Overview
          </fg-header-medium>
          <router-link
            v-for="overviewLink in overviewLinks"
            @click.native="sidebar.close"
            :to="overviewLink.to"
            :key="overviewLink.label"
          >
            {{getLinkText(overviewLink)}}
          </router-link>
          <fg-header-medium>
            Components
          </fg-header-medium>
          <router-link
            v-for="componentLink in componentLinks"
            @click.native="sidebar.close"
            :to="componentLink.to"
            :key="componentLink.label"
          >
            {{getLinkText(componentLink)}}
          </router-link>
        </fg-content>
      </fg-side-bar>
    </template>
    <template slot="content">
      <fg-content padding>
        <router-view/>
      </fg-content>
    </template>
  </FgContainer>
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
        to: '/FgImageContainer',
        label: 'Fg Image Container',
      },
      {
        to: '/FgCard',
        label: 'FgCard',
      },
      {
        to: '/FgTable',
        label: 'FgTable',
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
