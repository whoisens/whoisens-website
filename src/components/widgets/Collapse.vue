<template>
  <div class="cmp-widget cmp-widget-collapse">
    <CollapseEl :isEnabled="!!contractAddress">
        <span slot="title">
            <span class="label">{{ title }}</span>
            <span class="value">
                <LoadingInfo :isLoading="!isLoaded">
                    <span class="error" v-if="error">{{ error }}</span>
                    <span v-else-if="!address">-</span>
                    <Link :href="linkURL" v-else-if="!noLink">{{ address }}</Link>
                    <span v-else>{{ address }}</span>
                </LoadingInfo>
            </span>
        </span>
      <div slot="content">
        <TechnicalInfo>
          <ul>
            <li>
              <span class="label">Contract address</span>
              <span>
                <Link :href="contractURL">{{ contractAddress }}</Link>
                {{ getContractName(contractAddress) }}
              </span>
            </li>
            <li>
              <span class="label">Contract method</span>
              <span>{{ contractMethod }}</span>
            </li>
          </ul>
        </TechnicalInfo>
      </div>
    </CollapseEl>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    import CollapseEl from '../elements/Collapse.vue';
    import LoadingInfo from '../elements/LoadingInfo.vue';
    import Link from '../elements/Link.vue';
    import TechnicalInfo from './TechnicalInfo.vue';

    import {ContractNames, config} from 'whoisens-lib';

    @Component({
        props: {
            title: {
                type: String
            },
            data: {
                type: Object
            },
            url: {
                type: String
            },
            noLink: {
                type: Boolean,
                default: false
            }
        },
        components: {
            CollapseEl,
            LoadingInfo,
            Link,
            TechnicalInfo
        }
    }) export default class Collapse extends Vue {
        get address() {
            return this.$props.data && this.$props.data.result;
        }

        get error() {
            return this.$props.data && this.$props.data.error;
        }

        get linkURL() {
            return this.$props.url || `${config.scan_url}/${this.address}`;
        }

        get contractAddress() {
            return this.$props.data && this.$props.data.contractAddress;
        }

        get contractMethod() {
            return this.$props.data && this.$props.data.contractMethod;
        }

        get contractURL() {
            return `${config.scan_url}/${this.contractAddress}#readContract`;
        }

        get isLoaded() {
            return !!this.contractAddress || !!this.error;
        }

        getContractName(name: string) {
            return ContractNames.getName(name);
        }
    }
</script>

<style lang="scss">
  .cmp-widget-collapse {
    white-space: nowrap;

    .label {
      font-weight: bold;
      margin: 0 5px 0 0;
    }

    .label:after {
      content: ":";
    }

    .error {
      color: #bf0000;
    }

    li {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
