<template>
  <h2 class="text-2xl font-semibold">
    الكوبونات
  </h2>
  <div class="flex justify-between mt-8">
    <div class="w-72">
      <v-text-field
        v-model="searchValue"
        label="البحث"
        variant="outlined"
        color="primary"
        clearable
        placeholder="البحث"
        density="compact"
        @input="handleSearch"
      />
    </div>
    <v-btn
      :append-icon="mdiPlus"
      :to="{ name: 'add-coupon' }"
      color="primary"
      variant="elevated"
    >
      إضافة كوبون
    </v-btn>
  </div>
  
  <LoadingSkeleton v-if="coupones.isPending.value" />

  <div
    v-if="coupones.data.value"
    class="shadow-lg rounded-lg mt-4 border border-gray-200"
  >
    <v-data-table-server
      sticky
      :items-per-page="listParams.limit"
      :page="listParams.page"
      :headers="headers"
      :items-length="coupones.data.value.total"
      :items="coupones.data.value.data"
      :loading="coupones.isPending.value"
      @update:options="onTableOptionsChange({ page: $event.page, limit: $event.itemsPerPage })"
    >
      <template #[`item.actions`]="{ item }">
        <v-btn
          :append-icon="mdiTagEdit"
          color="grey-darken-2"
          size="small"
          variant="elevated"
          :to="{ name: 'edit-coupon', params: { id: item.id } }"
        >
          تعديل
        </v-btn>
      </template>
    </v-data-table-server>
  </div>
</template>
<script setup lang="ts">
  import {
    mdiPlus,
    mdiTagEdit
  } from '@mdi/js'
import { ref } from "vue";
import { getCoupons } from "../coupons-service"
import type { PaginationParams } from '@/core/models/pagination-params'
import { useQuery } from "@tanstack/vue-query";
import debounce from 'lodash.debounce'
import LoadingSkeleton from "@/core/components/LoadingSkeleton.vue"

const searchValue = ref('');   
const listParams = ref<PaginationParams>({
  page: 1,
  limit: 10,
  productName: undefined,
  category_id: undefined
})

const coupones = useQuery({
  queryKey: ['coupones', listParams],
  queryFn: () => getCoupons(listParams.value),
  select: (response) => response.data
})

const headers = [
  { title: 'الكود', value: 'name', width: '300px', sortable: false, },
  { title: 'الحد الأعلي', value: 'customer.name', width: '300px', sortable: false },
  { title: 'نسبة التخفيض', value: 'funder', width: '300px', sortable: false },
  { title: 'تاريخ إنتهاء الصلاحية', value: 'price', width: '300px', sortable: false }
]

const onTableOptionsChange = ({ page, limit }: PaginationParams) => {
  listParams.value = {
    ...listParams.value,
    page: page ?? 1,
    limit: limit ?? 10 
  }
}

const handleSearch  = debounce(() => {
    listParams.value.productName = searchValue.value
}, 300)

</script>