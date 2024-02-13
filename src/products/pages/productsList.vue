<template>
  <div>
    <h1 class="text-3xl">
      المنتجات
      <span>(20 )</span>
    </h1>
    <div class="flex items-center justify-between mt-6">
      <div class="flex justify-between items-center bg-[#FCF2EA] rounded-xl py-1 px-4">
        <input
          placeholder="إبحث عن منتجات"
          type="text"
          class="w-56 border-none p-2 rounded-lg outline-none transition-all duration-100 placeholder:text-gray-700"
        >
        <SearchIcon custom-style="w-6 h-6" />
      </div>
      <v-btn
        :append-icon="mdiPlus"
        :to="{ name: 'add-product' }"
        color="primary"
        size="large"
        rounded="xl"
        variant="elevated"
      >
        إضافة منتج
      </v-btn>
    </div>
    <div v-if="!products.data.value">
      <LoadingProducts />
    </div>
    <div class="grid grid-cols-productsCards gap-x-4 gap-y-8 mt-6">
      <div
        v-for="product in products.data.value?.data"
        :key="product.id"
        class="bg-white shadow-lg rounded-lg p-4"
      >
        <p class="text-xl text-center">
          {{ product.name }}
        </p>
        <div
          class="relative h-64 bg-cover bg-center mt-2"
          :style="getBackgroundImage(product.image1_path)"
        >
          <p class="absolute top-0 left-0 bg-red-600 rounded-br-xl text-white px-3">
            20% 
          </p>
          <p class="absolute bottom-0 right-0 bg-gray-600 rounded-tl-xl text-white px-3 py-2">
            {{ product.price }} دل
          </p>
        </div>
  
        <div class="mt-4 flex items-center border-b border-gray-700 pb-1">
          <p class="w-1/2">
            الوصف
          </p>
          <p class="w-1/2 text-center">
            {{ product.description }}
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
            {{ product.inventory_level }}
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
        <div class="flex justify-center gap-4 mt-6 text-white">
          <a
            class="flex items-center gap-2 bg-primary-100 hover:bg-primary-400 transition-colors duration-150 px-4 py-1 rounded-xl"
            :href="`/products/edit/${product.id}`"
          >
            <span>تعديل</span>
            <EditIcon />
          </a>
          <button
            class="flex items-center gap-2 bg-secondary-100 hover:bg-secondary-200 transition-colors duration-150 px-4 py-1 rounded-xl"
          >
            <span>حذف</span>
            <DeleteIcon fill="fill-white" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { getProducts } from "../products-service"
import type { PaginationParams } from '@/core/models/pagination-params'
import SearchIcon from "@/core/components/icons/SearchIcon.vue";
import { useQuery } from "@tanstack/vue-query";
import EditIcon from "@/core/components/icons/EditIcon.vue";
import DeleteIcon from "@/core/components/icons/DeleteIcon.vue";
import LoadingProducts from "../components/LoadingProducts.vue";
import {
  mdiPlus
} from '@mdi/js'

const listParams = ref<PaginationParams>({
  page: 1,
  limit: 10,
  productName: undefined,
  category_id: undefined
})

const products = useQuery({
  queryKey: ['products', listParams],
  queryFn: () => getProducts(listParams.value),
  select: (response) => response.result 
})

const storage = import.meta.env.VITE_API_Storage

const getBackgroundImage = (url: string) => ({
  backgroundImage: `${storage}${url}`
})

</script>