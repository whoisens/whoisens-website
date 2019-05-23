<template>
  <div class="cmp-widget cmp-widget-search">
    <form @submit.prevent="doLookup">
      <input autofocus name="address" placeholder="name.eth, 0xHASH, HASH.addr.reverse" spellcheck="false"
             v-model="addressValue" />
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
    form {
      margin: 20px 0 0 0;
      white-space: nowrap;
    }

    input, button {
      font-size: calc(8px + 1vw + 1vh + .5vmin);
    }

    input {
      background: transparent;
      border: none;
      border-bottom: 2px dashed rgba(251,109,0,0.7);
      border-radius: 0;
      outline: none;

      &::placeholder {
        font-size: 19px;
      }

      &:hover {
      }
    }

    button {
      background-color: transparent;
      color: rgba(251,109,0,0.7);
      border: 2px solid rgba(251,109,0,0.7);
      transition: all 0.5s;

      &:hover {
        background-color: rgba(250,108,0,0.84);
        color: #333;
      }
    }
  }
</style>
