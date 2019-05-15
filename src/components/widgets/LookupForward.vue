<template>
  <li>
    <div class="title">
      <h3>Forward lookup [{{ lookupAddress }}]</h3>
    </div>
    <div class="info">
      <ul>
        <li>
          <Collapse :data="result.resolverAddress" title="Pointed address"></Collapse>
        </li>

        <li>
          <Collapse :data="result.resolverContentHash" :url="resolveContentHashResult"
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
        props: {
            lookupAddress: {
                type: String
            },
            result: {
                type: Object
            }
        }, components: {
            Collapse
        }
    }) export default class LookupForward extends Vue {
        get resolveContentHashResult() {
            return this.$props.result && this.$props.result.resolverContentHash && this.$props.result.resolverContentHash.result;
        }
    }
</script>
