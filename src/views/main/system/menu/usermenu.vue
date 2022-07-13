<template>
  <div class="menus">
    <page-table :pageTableConfig="pageTableConfig" pageName="menu">
    </page-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageTable from '@/components/pageTbale'

import { pageTableConfig } from './config/page.config'

export default defineComponent({
  name: 'menus',
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
