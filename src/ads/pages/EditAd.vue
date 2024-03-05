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
import router from "@/router";
import { postAd } from "../ads-service"
import AdsForm from "../components/AdsForm.vue"
import type { PostOrPatchAdRequest } from '../models/ads';

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

const handleSubmit = (payload: PostOrPatchAdRequest) => {
   console.log(payload);
   
    editAdMutation.mutate(payload)
}
</script>