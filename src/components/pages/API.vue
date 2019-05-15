<template>
  <div class="cmp-page cmp-page-faq">
    <Header />

    <div class="frame">
      <iframe :class="{hidden: isLoading}" ref="iframe" src="/API.html" />
      <LoadingInfo v-show="isLoading" />
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    import Header from '../widgets/Header.vue';
    import LoadingInfo from '../elements/LoadingInfo.vue';

    @Component({
        components: {
            Header,
            LoadingInfo
        }
    }) export default class API extends Vue {
        data() {
            return {
                isLoading: true
            }
        }

        mounted() {
            const iframe = <HTMLIFrameElement>this.$refs.iframe;

            iframe.addEventListener('load', () => {
                this.$data.isLoading = false;
                if (!iframe.contentWindow) return console.error('contentWindow is null');
                iframe.style.height = iframe.contentWindow.document.getElementsByClassName('stackedit__right')[0].scrollHeight + 'px';
            });
        }
    }
</script>

<style lang="scss">
  .cmp-page-faq {
    height: 100%;

    .hidden {
      visibility: hidden;
    }

    .frame {
      width: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
