<template>
  <div class="cmp-page cmp-page-home">
    <Header />
    <Search />
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    import Search from '@/components/widgets/Search.vue';
    import Header from '@/components/widgets/Header.vue';

    @Component({
        components: {
            Search,
            Header
        }
    }) export default class Main extends Vue {
    }
</script>

<style lang="scss">
  .cmp-page-home {
    .cmp-widget-search {
      position: absolute;
      width: calc(100% - 2 * 3%);
      text-align: center;
      top: calc(50% - 50px);
    }

    h1 {
      font-size: 50px;
    }
  }
</style>
