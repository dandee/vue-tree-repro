<template>
  <div class='items'>
    <b-container fluid>
      <b-row>
        <b-col>
          <b-card>
            <tree-view id='tree' :load-nodes-async='loadTree' :model-defaults='items.treeDefaults' :selectionMode='"single"'>
              <template v-slot:loading-root>
                <div class='d-flex justify-content-center'>
                  <div class='spinner-border text-primary' role='status'>
                    <span class='sr-only'>Loading</span>
                  </div>
                </div>
              </template>
            </tree-view>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid />

    <b-container fluid />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

import { itemsStore } from '@/store/items';


@Component
export default class Items extends Vue {
  public items = itemsStore();

  public loadTree(): Promise<any> {
    return this.items.getItems()
      .then(() => this.items.itemTree);
  }
}
</script>

<style lang='scss' scoped>
.items {
  display: grid;
  grid-template-columns: 32ch 1fr 48ch;
  grid-template-rows: 1fr;
  width: 100vw;
  height: 100%;
}
</style>
