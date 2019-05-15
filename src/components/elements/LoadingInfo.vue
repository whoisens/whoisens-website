<template>
  <span class="cmp-element cmp-element-loading-info">
      <span class="loader" v-if="isLoading"></span>
      <slot v-else></slot>
  </span>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        props: {
            isLoading: {
                type: Boolean,
                default: true
            }
        }
    }) export default class LoadingInfo extends Vue {
    }
</script>

<style lang="scss">
  .cmp-element-loading-info {
    .loader {
      width: 130px;
      height: 6px;
      background: url('../../assets/images/ajax-loader.gif') no-repeat center center;
      display: inline-block;
      opacity: 0.3;
      vertical-align: middle;
    }
  }
</style>
