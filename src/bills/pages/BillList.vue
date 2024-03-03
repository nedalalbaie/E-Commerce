<template>
  <div>
    <div class="flex items-center justify-between mt-6">
      <h1 class="text-3xl">
        الفواتير
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
        v-for="bill in bills.data.value?.data"
        :key="bill.id"
        class="bg-white shadow-lg rounded-lg p-4"
      >
        <p class="text-xl text-center">
          #
        </p>
        <div class="mt-4 flex items-center border-b border-gray-700">
          <p class="w-1/2">
            الزبون
          </p>
          <p class="w-1/2 text-center">
            {{ bill.customer_name }}
          </p>
        </div>
        <div class="mt-4 flex items-center border-b border-gray-700">
          <p class="w-1/2">
            التاريخ
          </p>
          <p class="w-1/2 text-center">
            {{ formatToDate(bill.created_at) }}
          </p>
        </div>
        <div class="mt-4 flex items-center border-b border-gray-700">
          <p class="w-1/2">
            عدد العناصر
          </p>
          <p class="w-1/2 text-center">
            {{ bill.quantity.length }}
          </p>
        </div>
        <div class="mt-4 flex items-center border-b border-gray-700">
          <p class="w-1/2">
            الإجمالي
          </p>
          <p class="w-1/2 text-center">
            {{ bill.total_price }}
          </p>
        </div>
        <div class="flex justify-center gap-4 mt-6 text-white">
          <v-btn
            size="large"
            rounded="xl"
            variant="elevated"
            color="primary"
            type="submit"
            :to="{ name: 'bill-details', params: { id: bill.id } }"
          >
            عرض
            <template #prepend>
              <ViewIconVue />
            </template>
          </v-btn>

          <v-dialog
            width="500"
          >
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                size="large"
                rounded="xl"
                variant="elevated"
                color="#004C6B"
                type="submit"
              >
                إلغاء
                <template #prepend>
                  <DeleteIcon fill="fill-white" />
                </template>
              </v-btn>
            </template>

            <template #default="{ isActive }">
              <v-card
                :title="dialogQuestion(bill.id)"
                rounded="lg"
                color="#EFE9F5"
                style="padding-block: 1.75rem !important ;"
              >
                <v-card-text>
                  سيتم الغاء هذه الفاتورة بشكل نهائي، سيتلقى الزبون اشعارا يوضح ان الفاتورة تم الغاؤها.
                </v-card-text>

                <v-card-actions>
                  <v-spacer />

                  <v-btn
                    text="لا"
                    @click="isActive.value = false"
                  />
                  <v-btn
                    text="نعم"
                    @click="isActive.value = false; onCancelOrder(bill.id)"
                  />
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { getBills, cancelBill } from "../bill-service"
import type { PaginationParams } from '@/core/models/pagination-params'
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import DeleteIcon from "@/core/components/icons/DeleteIcon.vue";
import ViewIconVue from "@/core/components/icons/ViewIcon.vue";

const listParams = ref<PaginationParams>({
  page: 1,
  limit: 10,
  productName: undefined,
  category_id: undefined
})

const bills = useQuery({
  queryKey: ['bills', listParams],
  queryFn: () => getBills(listParams.value)
})

const queryClient = useQueryClient()
const cancelBillMutation = useMutation({
  mutationFn: cancelBill,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['bills'] })
  },
  onError: (error) => {
    console.log(error)
  }
})

const onCancelOrder = (id: number) => {
  cancelBillMutation.mutate(id)
}

const dialogQuestion = (billCode: number) => {
  return `إلغاء الفاتورة ${billCode}# ?`
}

const formatToDate = (date: string) => {
  const dateObject = new Date(date);
  if (!isNaN(dateObject.getTime())) {
    return dateObject.toLocaleDateString();
  }
}

</script>