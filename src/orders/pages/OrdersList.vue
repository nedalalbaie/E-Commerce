<template>
  <div>
    <div class="flex items-center justify-between mt-6">
      <h1 class="text-3xl">
        الطلبات
        <span>(20 )</span>
      </h1>
      <div class="flex gap-4">
        <button class="bg-sky-200 py-1 px-2 rounded-md">
          قيد المعالجة
        </button>
        <button class="bg-sky-200 py-1 px-2 rounded-md">
          قيد التوصيل
        </button>
        <button class="bg-sky-200 py-1 px-2 rounded-md">
          تم التوصيل
        </button>
        <button class="bg-sky-200 py-1 px-2 rounded-md">
          ملغية
        </button>
      </div>
    </div>
    <div class="grid grid-cols-productsCards gap-x-4 gap-y-8 mt-6">
      <div
        v-for="order in orders.data.value?.data"
        :key="order.id"
        class="bg-white shadow-lg rounded-lg p-4"
      >
        <p class="text-xl text-center">
          #{{ order.order_number }}
        </p>
        <div class="mt-4 flex items-center border-b border-gray-700 pb-1">
          <p class="w-1/2">
            الحالة
          </p>
          <p
            class="w-1/2 text-center font-medium"
            :class="order.status === 'pending' ? 'text-orange-700' : 'text-green-600'"
          >
            {{ order.status === 'pending' ? 'قيد المعالجة' : 'تم التوصيل' }}
          </p>
        </div>
        <div class="mt-4 flex items-center border-b border-gray-700">
          <p class="w-1/2">
            الزبون
          </p>
          <p class="w-1/2 text-center">
            عبدالرحمن
          </p>
        </div>
        <div class="mt-4 flex items-center border-b border-gray-700">
          <p class="w-1/2">
            التاريخ
          </p>
          <p class="w-1/2 text-center">
            {{ formatToDate(order.created_at) }}
          </p>
        </div>
        <div class="mt-4 flex items-center border-b border-gray-700">
          <p class="w-1/2">
            عدد العناصر
          </p>
          <p class="w-1/2 text-center">
            5
          </p>
        </div>
        <div class="mt-4 flex items-center border-b border-gray-700">
          <p class="w-1/2">
            العنوان
          </p>
          <p class="w-1/2 text-center">
            {{ order.shipping_address }}
          </p>
        </div>
        <div class="mt-4 flex items-center border-b border-gray-700">
          <p class="w-1/2">
            رقم الهاتف
          </p>
          <p class="w-1/2 text-center">
            0925448193
          </p>
        </div>
        <div class="mt-4 flex items-center border-b border-gray-700">
          <p class="w-1/2">
            الإجمالي
          </p>
          <p class="w-1/2 text-center">
            {{ order.total_price }}
          </p>
        </div>
        <div class="flex justify-center gap-4 mt-6 text-white">
          <v-btn
            size="large"
            rounded="xl"
            variant="elevated"
            color="primary"
            type="submit"
            :to="{name: 'order-details', params: {id: order.id}}"
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
            type="submit"
            :to="{name: 'edit-order', params: {id: order.id}}"
            :disabled="order.status !== 'pending'"
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
            :disabled="order.status !== 'pending'"
          >
            إلغاء
            <template #prepend>
              <DeleteIcon fill="fill-white" />
            </template>
          </v-btn>
          <!--           
          <button 
            class="flex items-center gap-2 transition-colors duration-150 px-5 py-2 rounded-xl"
            :class="order.status !== 'pending' ? 'bg-gray-200' : 'bg-secondary-100 hover:bg-secondary-200' "
            :disabled="order.status !== 'pending'"
          >
            <DeleteIcon />
            <span>إلغاء</span>
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { getOrders } from "../orders-service"
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

const orders = useQuery({
  queryKey: ['orders', listParams],
  queryFn: () => getOrders(listParams.value)
})

const formatToDate = (date: string) => {
  const dateObject = new Date(date);
  if (!isNaN(dateObject.getTime())) {
    return dateObject.toLocaleDateString();
  }
}

</script>