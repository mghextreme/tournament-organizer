import { shallowMount } from '@vue/test-utils';
import HeaderMenu from '@/components/HeaderMenu.vue';

describe('Match.vue', () => {
  it('renders component', () => {
    const title = 'Header';
    const wrapper = shallowMount(HeaderMenu, {
      propsData: { title },
    });

    expect(wrapper.text()).toMatch(title);
  });

  it('renders back button', () => {
    const title = 'Header';
    const wrapper = shallowMount(HeaderMenu, {
      propsData: { title },
    });

    expect(wrapper.findComponent({ ref: 'router-link' })).toBeTruthy();
  });
});
