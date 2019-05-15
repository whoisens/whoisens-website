<template>
  <li>
    <div class="title">
      <h3>
        <span>Reverse lookup </span>
        <span>
              <LoadingInfo :isLoading="!reverseAddressLoaded">
                  {{ reverseAddress ? '[' + reverseAddress + ']' : '' }}
              </LoadingInfo>
            </span>
      </h3>
    </div>
    <div class="info">
      <ul>
        <li>
          <Collapse :data="result.revertResolverResult" :url="revertResolveURL"
                    title="Pointed to Ethereum name"></Collapse>
        </li>
      </ul>
    </div>
  </li>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    import Collapse from '@/components/widgets/Collapse.vue';
    import LoadingInfo from '../elements/LoadingInfo.vue';

    @Component({
        props: {
            reverseAddress: {
                type: String
            },
            result: {
                type: Object
            }
        }, components: {
            Collapse,
            LoadingInfo
        }
    }) export default class LookupForward extends Vue {
        get revertResolveResult() {
            return this.$props.result.revertResolverResult && this.$props.result.revertResolverResult.result;
        }

        get revertResolveURL() {
            return '/lookup/' + this.revertResolveResult;
        }

        get reverseAddressLoaded() {
            return !!this.$store.state.revertResolverResult;
        }
    }
</script>
