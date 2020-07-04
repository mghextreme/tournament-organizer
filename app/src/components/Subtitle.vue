<template>
  <div class="subtitle">
    <h2>{{ text }}</h2>
    <hr />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class CenterContent extends Vue {
  @Prop() private text!: string;
}
</script>

<style lang="scss" scoped>
@import '@/style/const.scss';

.subtitle {
  h2 {
    padding: 0.4em 0.3em;
    text-align: left;
    font-size: 1.3em;
  }

  hr {
    margin: 0 auto 0 0;
    width: 50px;
    border-bottom: 1px solid $color-foreground;
  }
}
</style>
