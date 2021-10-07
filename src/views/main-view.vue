<template>
  <Items/>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

import Items from '@/components/items.vue';


@Component({
  components: {
    Items
  }
})
export default class MainView extends Vue {
}
</script>
