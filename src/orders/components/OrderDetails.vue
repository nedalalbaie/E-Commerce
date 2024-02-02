<template>
  <div
    class="flex items-center justify-between mt-6"
  >
    <h1 class="text-3xl flex items-center gap-2">
      الطلب #12345 - قيد المعالجة
      <div class="h-6 w-6 rounded-[50%] bg-orange-300" />
    </h1>
    <div class="flex gap-4">
      <v-btn
        size="large"
        rounded="xl"
        variant="elevated"
        color="primary"
        @click="editOrder"
      >
        تعديل
        <template #prepend>
          <EditIcon />
        </template>
      </v-btn>

      <v-dialog width="500">
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
            :title="dialogQuestion(props.order?.order_number as number)"
            rounded="lg"
            color="#EFE9F5"
            style="padding-block: 1.75rem !important ;"
          >
            <v-card-text>
              سيتم الغاء هذه الطبية بشكل نهائي، سيتلقى الزبون اشعارا يوضح ان الطبية تم الغاؤها.
            </v-card-text>

            <v-card-actions>
              <v-spacer />

              <v-btn
                text="لا"
                @click="isActive.value = false"
              />
              <v-btn
                text="نعم"
                @click="isActive.value = false; onCancelOrder(props.order?.id as number)"
              />
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </div>
  </div>

  <div class="bg-white rounded-md shadow-md pt-6 mt-6">
    <div class="bg-primary-100 text-white grid grid-cols-3 px-8 py-1">
      <p>الزبون</p>
      <p>رقم الهاتف</p>
      <p>العنوان</p>
    </div>
  
    <div class="grid grid-cols-3 px-8 py-6">
      <p>الزبون</p>
      <p>رقم الهاتف</p>
      <p>العنوان</p>
    </div>
  </div>

  <div class="bg-white rounded-md shadow-md pt-6 mt-6">
    <div class="bg-primary-100 text-white grid grid-cols-3 px-8 py-1">
      <p>العنصر</p>
      <p>الكمية</p>
      <p>السعر</p>
    </div>

    <slot />

    <div class="bg-primary-100 text-white px-8 py-2 text-xl text-center">
      <p>الإجمالي 3450.00 د.ل</p>
    </div>
  </div>

  <div class="bg-white shadow-md p-4 rounded-md mt-4 text-lg font-medium flex gap-2 ">
    <p>ملاحظات الزبون:</p>
    <p>يرجى التوصيل بعد الساعة 4 عصراً</p>
  </div>
</template>
<script setup lang="ts">
import DeleteIcon from "@/core/components/icons/DeleteIcon.vue";
import EditIcon from "@/core/components/icons/EditIcon.vue";
import type { Order } from "../models/order";
import { cancelOrder } from "../orders-service";
import router from "@/router";
import { useQueryClient, useMutation } from "@tanstack/vue-query";

// eslint-disable-next-line vue/valid-define-props
const props = defineProps<{
  order?: Order
}>()
const emit = defineEmits(["submit"])

const dialogQuestion = (productCode: number) => {
    return `إلغاء الطلبية ${productCode} ?`
}

const queryClient = useQueryClient()
const cancelOrderMutation = useMutation({
  mutationFn: cancelOrder,
  onSuccess: () => {
    router.replace({ name: 'orders' })
    queryClient.invalidateQueries({ queryKey: ['orders'] })
  },
  onError: (error) => {
    console.log(error)
  }
})

const onCancelOrder = (id: number) => {
  cancelOrderMutation.mutate(id)
}

const editOrder = () => {
  emit("submit")
}
</script>