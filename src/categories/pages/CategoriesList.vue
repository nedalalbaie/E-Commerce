<template>
  <div>
    <h1 class="text-3xl">
      التصنيفات
      <span>(20 )</span>
    </h1>
    <div class="md:flex items-center justify-between mt-6">
      <div class="flex justify-between items-center bg-[#FCF2EA] rounded-xl py-1 px-4 mb-4 md:mb-0">
        <input
          placeholder="إبحث عن تصنيفات"
          type="text"
          class="w-56 border-none p-2 rounded-lg outline-none transition-all duration-100 placeholder:text-gray-700"
        >
        <SearchIcon custom-style="w-6 h-6" />
      </div>
      <v-btn
        :append-icon="mdiPlus"
        :to="{ name: 'add-category' }"
        color="primary"
        size="large"
        rounded="xl"
        variant="elevated"
      >
        إضافة تصنيف
      </v-btn>
    </div>

    <div class="mt-8">
      <div
        v-for="category in categories.data.value?.data"
        :key="category.id"
        class="flex justify-between items-center bg-white rounded-lg p-6 mt-4 shadow-md"
      >
        <p class="text-xl">
          {{ category.name }} - {{ category.description }}
        </p>
        <div>
          <!-- <img
            class="w-40 h-40 object-cover rounded-lg my-2 border border-gray-200"
            :src="category.image_path"
            alt=""
          > -->
        </div>
        <div class="flex flex-col md:flex-row gap-4">
          <v-btn
            :append-icon="mdiPlus"
            color="primary"
            rounded="xl"
            variant="elevated"
          >
            تعديل
          </v-btn>
          <v-btn
            :append-icon="mdiPlus"
            color="#004C6B"
            rounded="xl"
            variant="elevated"
          >
            حذف
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SearchIcon from "@/core/components/icons/SearchIcon.vue";
import type { PaginationParams } from "@/core/models/pagination-params";
import {
    mdiPlus
} from '@mdi/js'
import { useQuery } from "@tanstack/vue-query";
import { ref } from "vue";
import { getCategories } from "../categories-service";

const listParams = ref<PaginationParams>({
  page: 1,
  limit: 10,
  name: undefined,
  categoryId: undefined
})

const categories = useQuery({
  queryKey: ['categories', listParams],
  queryFn: () => getCategories(listParams.value)
})


</script>