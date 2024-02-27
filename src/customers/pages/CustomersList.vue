<template>
  <div>
    <h1 class="text-3xl mt-6">
      الزبائن
      <span>
        {{ customers.data.value?.length! > 0 ? `(${customers.data.value?.length!})` : '' }}
      </span>
    </h1>

    <div
      v-for="customer in customers.data.value"
      :key="customer.id"
      class="bg-white rounded-lg shadow-md mt-10 p-8"
    >
      <div class="flex gap-20 text-xl font-medium mt-4">
        <p>
          <span>الإسم : </span>
          <span>{{ customer.name }}</span>
        </p>

        <p>
          <span>
            العنوان :
          </span>
          <span>
            {{ customer.address }}
          </span>
        </p>
      </div>

      <div class="flex gap-5 mt-6">
        <v-btn
          size="large"
          rounded="xl"
          variant="elevated"
          color="primary"
          type="submit"
          :to="{ name: 'view-customer', params: { id: customer.id } }"
        >
          عرض
          <template #prepend>
            <ViewIconVue />
          </template>
        </v-btn>

        <v-btn
          size="large"
          rounded="xl"
          variant="elevated"
          color="primary"
          :to="{ name: 'edit-customer', params: { id: customer.id } }"
        >
          تعديل
          <template #prepend>
            <EditIcon />
          </template>
        </v-btn>

        <v-btn
          size="large"
          rounded="xl"
          variant="elevated"
          color="#004C6B"
          type="submit"
        >
          حذف
          <template #prepend>
            <DeleteIcon fill="fill-white" />
          </template>
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { getCustomers } from "../customers-service"
import type { PaginationParams } from '@/core/models/pagination-params'
import { useQuery } from "@tanstack/vue-query";
import EditIcon from "@/core/components/icons/EditIcon.vue";
import DeleteIcon from "@/core/components/icons/DeleteIcon.vue";
import ViewIconVue from "@/core/components/icons/ViewIcon.vue";

const listParams = ref<PaginationParams>({
  page: 1,
  limit: 10,
  productName: undefined,
  category_id: undefined
})

const customers = useQuery({
  queryKey: ['ads', listParams],
  queryFn: () => getCustomers(listParams.value),
  select: (response) => response.data
})

</script>