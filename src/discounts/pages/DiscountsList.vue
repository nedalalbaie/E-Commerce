<template>
  <h2 class="text-2xl font-semibold">
    التخفيضات
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
      :to="{ name: 'add-discount' }"
      color="primary"
      variant="elevated"
    >
      إضافة تخفيض
    </v-btn>
  </div>
  <!-- <LoadingSkeleton v-if="discounts.isPending.value" /> -->
  <div
    v-if="discounts"
    class="shadow-lg rounded-lg mt-4 border border-gray-200"
  >
    <v-data-table-server
      sticky
      :items-per-page="listParams.limit"
      :page="listParams.page"
      :headers="headers"
      :items-length="discounts.length"
      :items="discounts"
      @update:options="onTableOptionsChange({ page: $event.page, limit: $event.itemsPerPage })"
    >
      <template #[`item.actions`]="{ item }">
        <v-btn
          :append-icon="mdiTagEdit"
          color="grey-darken-2"
          size="small"
          variant="elevated"
          :to="{ name: 'edit-discount', params: { id: item.id } }"
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
// import { getDiscounts } from "../discounts-service"
import type { PaginationParams } from '@/core/models/pagination-params'
import { useQuery } from "@tanstack/vue-query";
import debounce from 'lodash.debounce'

const searchValue = ref('');
const listParams = ref<PaginationParams>({
  page: 1,
  limit: 10,
  name: undefined,
  categoryId: undefined
})

// const discounts = useQuery({
//   queryKey: ['discounts', listParams],
//   queryFn: () => getDiscounts(listParams.value),
//   select: (response) => response.data
// })

const discounts = [
  {
    id: 1,
    code: '343',
    discount_type: 'percentage',
    amount: 203,
    start_date: '2024/5/6',
    end_date: '2025/6/8'
  },
  {
    id: 2,
    code: '343',
    discount_type: 'fixed',
    amount: 350,
    start_date: '2024/5/6',
    end_date: '2025/6/8'
  },
]

const headers = [
  { title: 'الكود', value: 'code', width: '300px', sortable: false, },
  { title: 'نوع التخفيض', value: 'discount_type', width: '300px', sortable: false },
  { title: 'نسبة التخفيض', value: 'amount', width: '300px', sortable: false },
  { title: 'تاريخ بداية التخفيض', value: 'start_date', width: '300px', sortable: false },
  { title: 'تاريخ إنتهاء الصلاحية', value: 'end_date', width: '300px', sortable: false }
]

const onTableOptionsChange = ({ page, limit }: PaginationParams) => {
  listParams.value = {
    ...listParams.value,
    page: page ?? 1,
    limit: limit ?? 10
  }
}

const handleSearch = debounce(() => {
  listParams.value.name = searchValue.value
}, 300)

</script>