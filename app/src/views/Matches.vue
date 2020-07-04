<template>
  <div class="matches">
    <HeaderMenu title="Matches" backLink="/standings"></HeaderMenu>
    <CenterContent>
      <Subtitle text="Semi-finals"></Subtitle>
      <Match :match="match"></Match>
    </CenterContent>
  </div>
</template>

<script lang="ts">
import CenterContent from '@/components/CenterContent.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';
import Match from '@/components/Match.vue';
import Subtitle from '@/components/Subtitle.vue';
import { IMatch } from '@/models';

const tMatch: IMatch = {
  id: 19283,
  teams: [{
    id: 1,
    name: 'Team 1',
  }, {
    id: 2,
    name: 'Team 2',
  }],
  score: {
    1: 3,
    2: 1,
  },
};

export default {
  name: 'Matches',
  data: () => {
    return {
      match: tMatch,
    };
  },
  components: {
    CenterContent,
    HeaderMenu,
    Match,
    Subtitle,
  },
};
</script>
