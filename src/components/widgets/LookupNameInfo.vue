<template>
  <li>
    <div class="title">
      <h3>Name information [{{ result.ethAddress }}]</h3>
    </div>
    <div class="info">
      <ul>
        <li>
          <Collapse :data="result.ownerResult" title="Name owner"></Collapse>
        </li>

        <li>
          <Collapse :data="result.controllerResult" title="Controller owner"></Collapse>
        </li>

        <li>
          <Collapse :data="expirationDateResult" :noLink="true" title="Expires"></Collapse>
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
    }) export default class LookupNameInfo extends Vue {
        get result() {
            return this.$store.state;
        }

        get expirationDateResult() {
            const expirationDateResult = this.result.expirationDateResult;

            if (!expirationDateResult) return;

            return {
                ...expirationDateResult,
                result: this.formatDate(expirationDateResult.result * 1000)
            }
        }

        private formatDate(date: Date | number): string | undefined {
            if (!date) return;

            const locale = 'en-us';
            const d = new Date(date);

            const day = d.getDate();
            const month = d.toLocaleString(locale, {month: 'long'});
            const year = d.getFullYear();

            const time = d.toLocaleString(locale, {hour12: false, hour: 'numeric', minute: 'numeric'});

            return `${month} ${day}, ${year} @ ${time}`;
        }
    }
</script>
