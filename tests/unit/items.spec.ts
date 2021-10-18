import VueCompositionAPI from '@vue/composition-api'
import { setActivePinia, createPinia, PiniaPlugin } from 'pinia';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import TreeView from '@grapoza/vue-tree'

import { itemsStore } from '@/store/items';
import Items from '@/components/items.vue';


const localVue = createLocalVue();
localVue.use(VueCompositionAPI);
localVue.use(PiniaPlugin);
localVue.component("tree-view", TreeView);

describe('items.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  });

  it('renders', () => {
    const wrapper = shallowMount(Items, {
      localVue
    });

    const wrapperDiv = wrapper.find('div.tree');
    expect(wrapperDiv.exists()).toBe(true);
  })
});
