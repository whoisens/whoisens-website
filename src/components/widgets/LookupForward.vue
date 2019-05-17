<template>
  <li>
    <div class="title">
      <h3>Forward lookup [{{ result.ethAddress }}]</h3>
    </div>
    <div class="info">
      <ul>
        <li>
          <Collapse :data="result.addressResult" title="Pointed address"></Collapse>
        </li>

        <li>
          <Collapse :data="result.contentHashResult" :url="resolveContentHashResult"
                    title="Pointed content"></Collapse>
        </li>
      </ul>
    </div>
  </li>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    import Collapse from '@/components/widgets/Collapse.vue';

    @Component({
        components: {
            Collapse
        }
    }) export default class LookupForward extends Vue {
        get result() {
            return this.$store.state;
        }

        get resolveContentHashResult() {
            return this.result && this.result.contentHashResult && this.result.contentHashResult.result;
        }
    }
</script>
