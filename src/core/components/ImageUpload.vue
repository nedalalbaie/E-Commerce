<template>
  <div class="mt-4">
    <input
      ref="fileUpload"
      class="hidden"
      type="file"
      accept="image/*"
      @change="handleFileUpload"
    >
    <div
      v-if="!base64Image && !isLoading"
      class="flex  items-center flex-col w-full bg-white rounded-lg h-28 border-4 border-slate-300 hover:-translate-y-2 transition-all delay-100 cursor-pointer mt-2 "
      @click="fileUploadClick"
    >
      <DragIcon />
      <p class="text-gray-500">
        Drag an image
      </p>
    </div>
    <div
      v-if="base64Image"
      class="relative"
    >
      <img
        class="rounded-lg  border-4 border-gray-200 w-[25rem] p-2"
        :src="base64Image"
        alt="uploaded image"
      >
      <div
        class="absolute -top-3 -left-1 bg-red-200 p-2 rounded-[50%] shadow-full-white dark:shadow-full-dark border-2 border-red-300 hover:-translate-y-1 transition-all delay-150 cursor-pointer"
        @click="deleteImage"
      >
        <GarbageIcon />
      </div>
    </div>
    <SpinAnimation
      :is-loading="isLoading"
      custom-style="animate-spin m-auto h-8 w-8 text-gray-400"
    />
  </div>
</template>
<script setup lang="ts">
import { type InputHTMLAttributes, ref } from 'vue'
import DragIcon from "@/core/components/icons/DragIcon.vue"
import GarbageIcon from "@/core/components/icons/GarbageIcon.vue"
import SpinAnimation from '@/core/components/icons/SpinAnimation.vue'
import { toBase64 } from '@/core/helpers/toBase64'
/* eslint-disable */
// const props = defineProps<{
//     imagePath: string
// }>()
const emit = defineEmits<{
    handleImage: [imageBase64: string]
}>()

const fileUpload: InputHTMLAttributes = ref(null)
const isLoading = ref(false)
const base64Image = ref("")

const handleFileUpload = (event: Event) => {
    isLoading.value = true
    const file = (event.target as HTMLInputElement).files?.[0]
    if (file) {
        toBase64(file).then(result => {
            isLoading.value = false
            base64Image.value = result
            emit('handleImage', base64Image.value)
        })
    }
}

const fileUploadClick = () => {
    fileUpload.value.click()
}

const deleteImage = () => {
    base64Image.value = ""
    if (fileUpload.value) {
        fileUpload.value.value = ''
    }
}

// watchEffect(() => {
//     base64Image.value = props.imagePath
// })
</script>