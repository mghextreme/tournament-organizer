<template>
  <div class="standings">
    <HeaderMenu title="Standings"></HeaderMenu>
    <router-link to="/matches">Matches</router-link>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu';

export default {
  name: 'Standings',
  components: {
    HeaderMenu,
  },
};
</script>
