<template>
  <div :class="{error: isErrorClass}" class="cmp-page cmp-page-lookup">
    <Header />
    <Search />

    <div class="error-content not-found" v-if="nameOwner && !found">
      <h2>Not found</h2>
    </div>
    <div class="error-content legacy" v-else-if="result.registrarExpired && legacy">
      <p>Name was registered using old ENS. It should be migrated by
        <time datetime="2020-05-04">May 4th, 2020</time>
        otherwise it will be released. <a
            href="https://medium.com/the-ethereum-name-service/step-by-step-guide-to-migrating-your-eth-name-to-the-new-ens-registrar-5314431e22f2"
            rel="nofollow" target="_blank">Details</a>
      </p>
    </div>
    <div class="error-content fatal" v-else-if="incorrectEthName">
      <h2>Incorrect Ethereum name</h2>
    </div>
    <ol v-else-if="isReverseEthName">
      <LookupReverse :result="result" :reverseAddress="reverseAddress" />
    </ol>
    <ol v-else-if="result.registrarExpired && nameOwner">
      <LookupNameInfo :lookupAddress="lookupAddress" :result="result" />
      <LookupForward :lookupAddress="lookupAddress" :result="result" />
      <LookupReverse :result="result" :reverseAddress="reverseAddress" />
    </ol>
    <div class="loading-content" v-else>
      <LoadingInfo />
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    import LoadingInfo from '../elements/LoadingInfo.vue';
    import LookupNameInfo from '../widgets/LookupNameInfo.vue';
    import LookupForward from '../widgets/LookupForward.vue';
    import LookupReverse from '../widgets/LookupReverse.vue';

    import Search from '../widgets/Search.vue';
    import Header from '../widgets/Header.vue';

    import {ENS, EthNameType} from 'whoisens-lib';

    @Component({
        components: {
            LoadingInfo,

            LookupNameInfo,
            LookupForward,
            LookupReverse,

            Search,
            Header
        }
    }) export default class Lookup extends Vue {
        private ens: ENS = new ENS();

        get isErrorClass() {
            return this.nameOwner && (!this.found || this.legacy) || this.incorrectEthName;
        }

        get incorrectEthName() {
            return this.$store.state.ethNameType === EthNameType.error;
        }

        get isReverseEthName() {
            return this.$store.state.ethNameType === EthNameType.address;
        }

        get lookupAddress() {
            return this.$store.state.ethName;
        }

        get reverseAddress() {
            return this.$store.state.revertResolverResult && this.$store.state.revertResolverResult.data.reverseAddress;
        }

        get nameOwner() {
            return this.$store.state.nameOwnerResult && this.$store.state.nameOwnerResult.result;
        }

        get expires() {
            return this.$store.state.registrarExpired && this.$store.state.registrarExpired.result;
        }

        get found() {
            return this.nameOwner !== '0x';
        }

        get legacy() {
            return this.$store.state.registrarExpired && !this.expires;
        }

        get result() {
            return this.$store.state;
        }

        async created() {
            await this.$store.dispatch('getInfoForEthName', this.$router.currentRoute.params.addr);
        }
    }
</script>

<style lang="scss">
  .cmp-page-lookup {
    height: 100%;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: calc(30px + 1vw + 1vh + .5vmin);
    }

    > ol > li {
      margin: 40px 0 0 0;
      box-shadow: 1px 1px 5px 0 #ccc;
      padding: 20px;
    }

    .title h3 {
      font-size: 22px;
      color: #038ab9;
      margin: 0 0 20px 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .info {
      margin: 10px 0 0 0;
    }

    .info > ul > li {
      line-height: 30px;
    }

    .cmp-widget-technical-info {
      margin: 20px 0 20px 15px;
    }

    &.error {
      .not-found, .fatal, .legacy {
        font-size: 20px;
      }
    }

    .error-content, .loading-content {
      flex: 1;
      justify-content: center;
      align-items: center;
      display: flex;
    }
  }
</style>
