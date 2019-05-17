<template>
  <div class="cmp-page cmp-page-home">
    <Header />

    <div class="title">
      <img src="../../assets/images/logo.svg" title="WhoisENS Logo" />
      <h1>Whois <abbr title="Ethereum Name Service">ENS</abbr></h1>
    </div>

    <h2>Advanced detail information about any Ethereum address. 100% free and Open Source.</h2>
    <Search />
    <Footer />
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    import Search from '@/components/widgets/Search.vue';
    import Header from '@/components/widgets/Header.vue';
    import Footer from '@/components/widgets/Footer.vue';

    @Component({
        components: {
            Search,
            Header,
            Footer
        }
    }) export default class Main extends Vue {
    }
</script>

<style lang="scss">
  .cmp-page-home {
    display: flex;
    flex-direction: column;
    height: 100%;

    .cmp-widget-search {
      width: 100%;
      flex: 1;
      align-items: center;
      justify-content: center;
      display: flex;
    }

    .title {
      display: flex;

      img {
        width: 73px;
        height: 81px;
        vertical-align: middle;
      }

      h1 {
        font-size: 50px;
        margin: 20px 0;

        &:first-letter {
          color: rgba(251, 0, 15, 0.69);
        }
      }

      h2 {
        font-size: 17px;
      }

      abbr {
        color: #fb6d00b0;
        text-decoration-color: #333;
      }
    }
  }
</style>
