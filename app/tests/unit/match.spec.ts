import { shallowMount } from '@vue/test-utils';
import Match from '@/components/Match.vue';

describe('Match.vue', () => {
  it('renders component', () => {
    const match = {
      id: 123,
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
    const wrapper = shallowMount(Match, {
      propsData: { match },
    });

    expect(wrapper.contains('table')).toBeTruthy();
  });
});
