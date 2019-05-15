<template>
  <a :href="href" :title="title" :target="target" rel="noreferrer nofollow">
    <slot>{{ href }}</slot>
  </a>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        props: {
            href: {
                type: String
            },
            title: {
                type: String,
                default: ''
            },
            target: {
                type: String,
                default: '_blank'
            }
        }
    }) export default class Link extends Vue {
    }
</script>

<style lang="scss">
</style>
