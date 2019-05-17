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
          <Collapse :data="result.reverseRecordResult" :url="revertResolveURL"
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
        components: {
            Collapse,
            LoadingInfo
        }
    }) export default class LookupForward extends Vue {
        get result() {
            return this.$store.state;
        }

        get reverseAddress() {
            return this.result.reverseRecordResult && this.result.reverseRecordResult.data && this.result.reverseRecordResult.data.reverseAddress;
        }

        get revertResolveResult() {
            return this.result.reverseRecordResult && this.result.reverseRecordResult.result;
        }

        get revertResolveURL() {
            return '/lookup/' + this.revertResolveResult;
        }

        get reverseAddressLoaded() {
            return !!this.result.reverseRecordResult;
        }
    }
</script>
