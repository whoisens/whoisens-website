<template>
  <div class="cmp-widget cmp-widget-header">
    <header>
      <ol>
        <li :class="{active: isActive(link.name)}" v-for="link of links">
          <a :href="link.href" @click.prevent="goTo(link.href)">{{ link.text }}</a>
        </li>
      </ol>
    </header>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component export default class Header extends Vue {
        private links = [{
            name: 'home',
            href: '/',
            text: 'Home'
        }, {
            name: 'api',
            href: '/api',
            text: 'API'
        }, {
            name: 'faq',
            href: '/faq',
            text: 'FAQ'
        }];

        goTo(url: string) {
            this.$router.push(url);
        }

        isActive(name: string) {
            return this.$store.state.route.name === name;
        }
    }
</script>

<style lang="scss">
  .cmp-widget-header {
    ol {
      display: flex;
      justify-content: flex-end;
      height: 50px;
      align-items: center;

      li {
        margin: 0 0 0 50px;
        font-size: 18px;
        border-bottom: 2px solid transparent;
        padding: 0 5px 3px 5px;

        a:hover {
          text-decoration: none;
        }

        &.active, &.active:hover {
          border-bottom-color: #fb6d00b0;
        }

        &:hover {
          border-bottom-color: #fb6d00b0;
        }
      }
    }
  }
</style>
