<template>
  <div :class="{disabled: !isEnabled, expanded: !collapsed}" class="cmp-element cmp-element-collapse">
    <span @click="toggleCollapse" @keypress="handleKeyPress" class="arrow" tabindex="0">⌃</span>

    <slot name="title"></slot>

    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        props: {
            isEnabled: {
                type: Boolean,
                default: true
            },
            isCollapsed: {
                type: Boolean,
                default: true
            }
        }
    }) export default class Collapse extends Vue {
        data() {
            return {
                collapsed: this.$props.isCollapsed
            }
        }

        private toggleCollapse() {
            this.$data.collapsed = !this.$data.collapsed;
        }

        private handleKeyPress(event: KeyboardEvent) {
            if (event.key === 'Enter') this.toggleCollapse();
        }
    }
</script>

<style lang="scss">
  .cmp-element-collapse {
    overflow: hidden;
    text-overflow: ellipsis;

    &.expanded {
      .content {
        display: block;
      }

      .arrow {
        transform: rotate(180deg);
        top: -2px;
      }
    }

    &.disabled .arrow {
      pointer-events: none;
      opacity: 0.3;
      position: relative;
      z-index: -1;
    }

    .content {
      display: none;
    }

    .arrow {
      transform: rotate(90deg);
      display: inline-block;
      font-size: 14px;
      cursor: pointer;
      transition: transform 0.2s;
      user-select: none;
      position: relative;
      color: #756b05;
      margin: 0 5px;
      width: 15px;
      height: 15px;
      text-align: center;
      line-height: 15px;
    }
  }
</style>
