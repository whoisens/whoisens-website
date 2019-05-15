<template>
  <div class="cmp-widget cmp-widget-technical-info">
    <slot></slot>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component export default class TechnicalInfo extends Vue {
    }
</script>

<style lang="scss">
  .cmp-widget-technical-info {
    padding: 10px 15px;
    background: #fff96e66;
  }
</style>
