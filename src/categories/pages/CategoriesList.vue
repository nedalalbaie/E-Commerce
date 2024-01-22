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
        v-for="i in 5"
        :key="i"
        class="flex justify-between items-center bg-white rounded-lg p-6 mt-4"
      >
        <p class="text-xl">
          سرير - 2 منتج
        </p>
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
import {
    mdiPlus
} from '@mdi/js'

// const listParams = ref<PaginationParams>({
//   page: 1,
//   limit: 10,
//   name: undefined,
//   categoryId: undefined
// })

// const categories = useQuery({
//   queryKey: ['categories', listParams],
//   queryFn: () => getCategories(listParams.value)
// })


</script>