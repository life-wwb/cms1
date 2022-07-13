<template>
  <div class="category">
    <page-table
      pageName="category"
      :pageTableConfig="pageTableConfig"
    ></page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageTable from '@/components/pageTbale/src/pageTable.vue'

import { pageTableConfig } from './config/page.config'

export default defineComponent({
  name: 'category',
  components: {
    pageTable
  },
  setup() {
    return {
      pageTableConfig
    }
  }
})
</script>

<style scoped></style>
