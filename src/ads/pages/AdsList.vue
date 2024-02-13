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
        <button class="py-1 px-2 rounded-md flex items-center gap-2 border-2 border-gray-300">
          معطل
          <CheckIcon fill="black" />
        </button>
      </div>
    </div>

    <div class="grid grid-cols-[60%40%] ">
      <div
        v-for="ad in ads.data.value?.data"
        :key="ad.id"
        class="rounded-md shadow-md bg-white mt-10"
      >
        <div class="p-8 flex flex-col justify-between gap-8">
          <div>
            <div class="flex gap-2 text-2xl font-medium mt-4">
              <p>متجر Bananna</p>
              <p class="text-green-700">
                - مفعل
              </p>
            </div>
            <p class=" mt-8 text-lg">
              {{ ad.description }}
            </p>
          </div>

          <div class="flex gap-5">
            <v-btn
              size="large"
              rounded="xl"
              variant="elevated"
              color="primary"
              :to="{path: 'edit-ad', params: {id: ad.id}}"
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

        <div>
          <img
            :src="`${storage}${ad.url}`"
            alt=""
            class="w-full max-h-64 object-cover object-center rounded-l-md"
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getAds } from "../ads-service"
import { useQuery } from "@tanstack/vue-query";
import EditIcon from "@/core/components/icons/EditIcon.vue";
import DeleteIcon from "@/core/components/icons/DeleteIcon.vue";
import CheckIcon from "@/core/components/icons/CheckIcon.vue";

const storage = import.meta.env.VITE_API_Storage
  
const ads = useQuery({
  queryKey: ['ads'],
  queryFn: () => getAds(),
  select: (response) => response.result
})

</script>