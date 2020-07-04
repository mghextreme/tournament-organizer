<template>
  <header class="top-menu">
    <router-link v-if="backLink" :to="backLink">Back</router-link>
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
.top-menu {

}
</style>
