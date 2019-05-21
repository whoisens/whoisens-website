<template>
  <div class="cmp-widget cmp-widget-footer">
    <footer>
      <section class="left">

      </section>
      <section class="icons">
        <a href="https://opensource.org/" rel="noreferrer nofollow" target="_blank">
          <img alt="Open Source" src="../../assets/images/icons/open-source.png" />
        </a>
        <a href="https://www.ethereum.org/" rel="noreferrer nofollow" target="_blank">
          <img alt="Ethereum" src="../../assets/images/icons/ethereum.svg" />
        </a>
        <a href="https://ens.domains/" rel="noreferrer nofollow" target="_blank">
          <img alt="ENS" src="../../assets/images/icons/ENS.svg" />
        </a>
        <a href="https://github.com/whoisens" rel="noreferrer nofollow" target="_blank">
          <img alt="Github" src="../../assets/images/icons/github.png" />
        </a>
      </section>
      <section class="version">
        <span>Version 0.0.5</span>
      </section>
    </footer>
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
  .cmp-widget-footer {
    footer {
      display: flex;
      align-items: baseline;
      margin: 50px 0 10px 0;

      .left {
        flex: 1;
      }

      .icons {
        flex: 3;
        text-align: center;

        a {
          margin: 0 10px 0 0;
        }

        img {
          height: 30px;
          filter: grayscale(100%);
          opacity: 0.5;

          &:hover {
            filter: none;
            opacity: 1;
          }
        }
      }

      .version {
        flex: 1;
        text-align: right;
        color: #999999a8;
      }
    }
  }
</style>
