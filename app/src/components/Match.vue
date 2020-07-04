<template>
  <div class="match">
    <table>
      <tbody>
        <tr v-for="team in match.teams" :key="team.id">
          <td>Icon</td>
          <td>{{ team.name }}</td>
          <td>{{ match.score[team.id] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IMatch } from '@/models';

@Component
export default class Match extends Vue {
  @Prop() public match!: IMatch;
}
</script>

<style scoped lang="scss">
.match {

}
</style>
