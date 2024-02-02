<template>
  <OrderDetails>
    <template #default>
      <div
        v-for="product in orderProducts"
        :key="product.id"
        class="grid grid-cols-3 px-8 py-3"
      >
        <p class="border-b-2 border-neutral-600 pb-1 w-fit">
          سرير مواليد Happy Baby
        </p>
        <p>1</p>
        <p>199.0</p>
      </div>
    </template>
  </OrderDetails>
</template>

<script setup lang="ts">
import OrderDetails from "../components/OrderDetails.vue"

let orderProducts = [
  {
    id: 1,
    item: "سرير مواليد Happy Baby",
    quantity: 1,
    price: 199.0
  },
  {
    id: 2,
    item: "مناشف اطفال",
    quantity: 3,
    price: 20.0
  },
]
</script>