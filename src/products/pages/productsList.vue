<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="text-3xl">
        المنتجات
        <span>(20 )</span>
      </h1>
      <div class="flex justify-between items-center bg-[#FCF2EA] rounded-xl py-1 px-4">
        <input
          placeholder="أبحث عن المنتجات"
          type="text"
          class="w-56 border-none p-2 rounded-lg outline-none transition-all duration-100"
        >
        <SearchIcon custom-style="w-6 h-6" />
      </div>
    </div>
    <div
      class="bg-white w-72 shadow-md rounded-lg p-4"
    >
      <p class="text-center">
        سرير مواليد Happy Baby
      </p>
      <div class="relative h-64 bg-product bg-cover bg-center">
        <p class="absolute top-0 left-0 bg-red-600 rounded-br-xl text-white px-3">
          20%
        </p>
        <p class="absolute bottom-0 right-0 bg-gray-600 rounded-tl-xl text-white px-3 py-2">
          199.00 299.00 دل
        </p>
      </div>

      <div class="mt-4 flex items-center border-b border-gray-700 pb-1">
        <p class="w-1/2">
          الوصف
        </p>
        <p class="w-1/2 text-center">
          سرير مواليد من شركة Happy Baby
        </p>
      </div>
      <div class="mt-4 flex items-center border-b border-gray-700">
        <p class="w-1/2">
          التصنيف
        </p>
        <p class="w-1/2 text-center">
          سرير
        </p>
      </div>
      <div class="mt-4 flex items-center border-b border-gray-700">
        <p class="w-1/2">
          الجنس
        </p>
        <p class="w-1/2 text-center">
          --
        </p>
      </div>
      <div class="mt-4 flex items-center border-b border-gray-700">
        <p class="w-1/2">
          اللون
        </p>
        <p class="w-1/2 text-center">
          البني
        </p>
      </div>
      <div class="mt-4 flex items-center border-b border-gray-700">
        <p class="w-1/2">
          الكمية
        </p>
        <p class="w-1/2 text-center">
          27
        </p>
      </div>
      <div class="mt-4 flex items-center border-b border-gray-700">
        <p class="w-1/2">
          الحجم
        </p>
        <p class="w-1/2 text-center">
          90*110 سم
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getProducts } from "../products-service"
import type { PaginationParams } from '@/core/models/pagination-params'
import SearchIcon from "@/core/components/icons/SearchIcon.vue";
import { useQuery } from "@tanstack/vue-query";

const listParams = ref<PaginationParams>({
    page: 1,
    limit: 10,
    name: undefined,
    categoryId: undefined
})

const products = useQuery({
    queryKey: ['products', listParams],
    queryFn: () => getProducts(listParams.value)
})

onMounted(() => {
})

const getBackgroundImage = (url: string) => ({
    backgroundImage: `url(${url})`
})
</script>