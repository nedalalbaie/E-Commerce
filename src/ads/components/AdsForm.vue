<template>
  <form @submit.prevent="submit">
    <div class="grid gap-x-8 gap-y-2 mt-6">
      <v-text-field
        v-model="address"
        class="lg:w-1/2"
        label="العنوان"
        variant="outlined"
        color="primary"
        placeholder="العنوان"
        :error-messages="errors.address"
      />

      <v-textarea
        v-model="description"
        label="التفاصيل"
        type="text"
        variant="outlined"
        color="primary"
        placeholder="التفاصيل"
        :error-messages="errors.description"
      />
    </div>

    <div>
      <v-switch
        inset
        label="تفعيل"
      />
      <p>
        الإعلان مفعل حالياً وسيظهر للمستخدمين
      </p>
    </div>

    <div class="mt-8 lg:w-1/4">
      <AdImageUpload
        @handle-image="handleImage"
      />
    </div>

    <div class="mt-3">
      <v-btn
        :disabled="!meta.valid"
        size="large"
        variant="elevated"
        color="primary"
        type="submit"
        :loading="props.isLoading"
      >
        {{ editMode ? 'تعديل ' : 'حفظ' }}
      </v-btn>
    </div> 
  </form>
</template>
<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, useField } from 'vee-validate';
import { object, string } from 'zod';
import type { PostAdRequest, Ad } from "../models/ads";
import { computed, ref, watchEffect } from "vue";
import AdImageUpload from "../components/AdImageUpload.vue"

type AdForm = PostAdRequest

const props = defineProps<{
    isLoading: boolean,
    ad?: Ad
}>()
const emit = defineEmits<{
    submit: [value: AdForm]
}>()

const base64Image = ref<File>()
const editMode = computed(() => !!props.ad)

const validationSchema = toTypedSchema(
    object({
        address: editMode.value ? string() : string().min(1, 'يجب إدخال  العنوان '),
        description: editMode.value ? string() : string().min(1, 'يجب إدخال التفاصيل  '),
    })
);

const { handleSubmit, errors, meta, setValues } = useForm({
    validationSchema
});

const { value: address } = useField<number>('address');
const { value: description } = useField<string>('description');

watchEffect(() => {
    if (props.ad) {
        setValues({
            address: props.ad.address,
            description: props.ad.description,
        })
    }
})

const submit = handleSubmit(values => {
    const payload = {

    }
    emit("submit", {
        ...values,
        url: base64Image.value,
    })
    console.log(payload);
})

const handleImage = (imageFile: File | null ) => {
    base64Image.value = imageFile as File
}


</script>