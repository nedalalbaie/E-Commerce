<template>
  <div>
    <div class="flex items-center justify-between mt-6">
      <h1 class="text-3xl">
        الطلبات
        <span>(20 )</span>
      </h1>
      <div class="flex gap-4">
        <p class="bg-sky-200 py-1 px-2 rounded-md">
          قيد المعالجة
        </p>
        <p class="bg-sky-200 py-1 px-2 rounded-md">
          قيد التوصيل
        </p>
        <p class="bg-sky-200 py-1 px-2 rounded-md">
          تم التوصيل
        </p>
        <p class="bg-sky-200 py-1 px-2 rounded-md">
          ملغية
        </p>
      </div>
    </div>
    <div class="grid grid-cols-productsCards gap-x-4 gap-y-8 mt-6">
      <div
        v-for="i in 5"
        :key="i"
        class="bg-white shadow-lg rounded-lg p-4"
      >
        <p class="text-xl text-center">
          سرير مواليد Happy Baby
        </p>
        <div class="relative h-64 bg-product bg-cover bg-center mt-2">
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
        <div class="flex justify-center gap-4 mt-6 text-white">
          <button
            class="flex items-center gap-2 bg-primary-100 hover:bg-primary-400 transition-colors duration-150 px-4 py-1 rounded-xl"
          >
            <span>تعديل</span>
            <EditIcon />
          </button>
          <button
            class="flex items-center gap-2 bg-secondary-100 hover:bg-secondary-200 transition-colors duration-150 px-4 py-1 rounded-xl"
          >
            <span>حذف</span>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  <script setup lang="ts">
  import { ref } from "vue";
  import { getOrders } from "../orders-service"
  import type { PaginationParams } from '@/core/models/pagination-params'
  import SearchIcon from "@/core/components/icons/SearchIcon.vue";
  import { useQuery } from "@tanstack/vue-query";
  import EditIcon from "@/core/components/icons/EditIcon.vue";
  import DeleteIcon from "@/core/components/icons/DeleteIcon.vue";
  import {
    mdiPlus
  } from '@mdi/js'
  
  const listParams = ref<PaginationParams>({
    page: 1,
    limit: 10,
    name: undefined,
    categoryId: undefined
  })
  
  // const orders = useQuery({
  //   queryKey: ['products', listParams],
  //   queryFn: () => getOrders(listParams.value)
  // })
  
  // const getBackgroundImage = (url: string) => ({
  //   backgroundImage: `url(${url})`
  // })
  
  const products = [
    {
      id: "",
      code: "#001830",
      status: "تم التوصيل",
      customer: "Mohammed",
      createdAt: "28-3-2023",
      price: "29.00 ",
      inventory_level: "number",
      image1_path: "../../../assets/images/bed.png"
    },
  ]
  </script>