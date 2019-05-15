<template>
  <div class="cmp-widget cmp-widget-search">
    <form @submit.prevent="doLookup">
      <input autofocus name="address" placeholder="whoisens.eth" v-model="addressValue" />
      <button :disabled="!addressValue" type="submit">Lookup</button>
    </form>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component export default class Main extends Vue {
        private addressValue = '';

        async doLookup(event: Event) {
            const target = <HTMLFormElement>event.target;
            const addressNode = <HTMLInputElement>target.elements.namedItem('address');
            const addressValue = addressNode.value;

            this.$store.dispatch('getInfoForEthName', addressValue);
            this.$router.push(`/lookup/${addressValue}`);
        }

        created() {
            this.addressValue = this.$router.currentRoute.params.addr || 'whoisens.eth';
        }
    }
</script>

<style lang="scss">
  .cmp-widget-search {
    grid-area: 2/2;

    form {
      margin: 20px 0 0 0;
      white-space: nowrap;
    }

    input, button {
      font-size: calc(8px + 1vw + 1vh + .5vmin);
    }
  }
</style>
