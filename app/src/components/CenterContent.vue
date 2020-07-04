<template>
  <div class="center">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CenterContent extends Vue { }
</script>

<style lang="scss" scoped>
.center {
  max-width: 800px
}
</style>
