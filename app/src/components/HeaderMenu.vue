<template>
  <header class="top-menu">
    <router-link class="back" v-if="backLink" :to="backLink">Back</router-link>
    <h1>{{ title }}</h1>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HeaderMenu extends Vue {
  @Prop() private title!: string;
  @Prop() private backLink?: string;
}
</script>

<style scoped lang="scss">
@import '@/style/const.scss';

.top-menu {
  @include flex();

  position: relative;
  padding: 0.7em;
  background: $color-background-2;
  font-size: 1.6em;
  font-weight: 700;
  margin-bottom: 0.7em;

  .back {
    position: absolute;
    left: 1em;
  }
}
</style>
