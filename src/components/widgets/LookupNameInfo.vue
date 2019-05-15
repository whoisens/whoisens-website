<template>
  <li>
    <div class="title">
      <h3>Name information [{{ lookupAddress }}]</h3>
    </div>
    <div class="info">
      <ul>
        <li>
          <Collapse :data="result.nameOwnerResult" title="Name owner"></Collapse>
        </li>

        <li>
          <Collapse :data="result.registrarOwnerResult" title="Registrar owner"></Collapse>
        </li>

        <li>
          <Collapse :data="registrarExpired" :noLink="true" title="Expired"></Collapse>
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
    }) export default class LookupNameInfo extends Vue {
        get registrarExpired() {
            const registrarExpired = this.$props.result.registrarExpired;

            if (!registrarExpired) return;

            return {
                ...registrarExpired,
                result: this.formatDate(registrarExpired.result * 1000)
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
