<template>
  <div class="cmp-widget cmp-widget-header">
    <ol>
      <li class="home">
        <a @click.prevent="goTo('/')" href="/">Home</a>
      </li>

      <li>
        <a @click.prevent="goTo('/api')" href="/api">API</a>
      </li>

      <li>
        <a @click.prevent="goTo('/faq')" href="/faq">FAQ</a>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component export default class Header extends Vue {
        goTo(url: string) {
            this.$router.push(url);
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
      }
    }
  }
</style>
