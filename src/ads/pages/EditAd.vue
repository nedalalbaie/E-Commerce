<template>
  <h1 class="text-2xl font-medium ">
    تعديل إعلان 
  </h1>
  <AdsForm
    :is-loading="editAdMutation.isPending.value"
    @submit="handleSubmit"
  />
</template>
<script setup lang="ts">
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { postAd } from "../ads-service"
import router from "@/router";
import AdsForm from "../components/AdsForm.vue"
import type { PostAdRequest } from '../models/ads';

const queryClient = useQueryClient()
const editAdMutation = useMutation({
    mutationFn: postAd,
    onSuccess: () => {
        router.replace({ name: 'categories' })
        queryClient.invalidateQueries({ queryKey: ['categories'] })
    },
    onError: (error) => {
        console.log(error)
    }
})

const handleSubmit = (payload: PostAdRequest) => {
    editAdMutation.mutate(payload)
}
</script>