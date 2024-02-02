<template>
  <div>
    <div class="flex items-center justify-between mt-6">
      <h1 class="text-3xl">
        الإعلانات
        <span>(3)</span>
      </h1>
      <div class="flex gap-4">
        <button class="bg-sky-200 py-1 px-2 rounded-md flex items-center gap-2">
          مفعل
          <CheckIcon fill="black" />
        </button>
        <button class="bg-sky-200 py-1 px-2 rounded-md flex items-center gap-2">
          معطل
          <CheckIcon fill="black" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { getAds } from "../ads-service"
import type { PaginationParams } from '@/core/models/pagination-params'
import { useQuery } from "@tanstack/vue-query";
import EditIcon from "@/core/components/icons/EditIcon.vue";
import DeleteIcon from "@/core/components/icons/DeleteIcon.vue";
import CheckIcon from "@/core/components/icons/CheckIcon.vue";

const listParams = ref<PaginationParams>({
    page: 1,
    limit: 10,
    name: undefined,
    categoryId: undefined
})

const ads = useQuery({
    queryKey: ['ads', listParams],
    queryFn: () => getAds(listParams.value),
    select: (response) => response.data
})

</script>