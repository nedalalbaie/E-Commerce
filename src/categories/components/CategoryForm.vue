<template>
  <form @submit.prevent="submit">
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-2 mt-6">
      <v-text-field
        v-model="name"
        label="إسم التصنيف"
        variant="outlined"
        color="primary"
        placeholder="إسم التصنيف"
        :error-messages="errors.name"
      />

      <v-text-field
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
      <h3 class="text-xl">
        قم بالضغط لرفع صورة
      </h3>

      <div class="mt-8 w-1/4">
        <ImageUpload
          @handle-image="handleImage"
        />
      </div>
    </div>

    <div class="mt-6">
      <v-btn
        :disabled="!meta.valid"
        size="large"
        variant="elevated"
        color="primary"
        type="submit"
        :loading="props.isLoading"
      >
        {{ editMode ? 'تعديل' : 'إضافة' }}
      </v-btn>
    </div>
  </form>
</template>
<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, useField } from 'vee-validate';
import { object, string, } from 'zod';
import type { Category } from "../models/Category";
import { computed, ref, watchEffect } from "vue";
import ImageUpload from "@/core/components/ImageUpload.vue"

const props = defineProps<{
    isLoading: boolean,
    category?: Category
}>()
const emit = defineEmits<{
    submit: [value: {
        name: string;
        description: string;
        image_path: string;
    }]
}>()

const base64Image = ref("")

const editMode = computed(() => !!props.category)

const validationSchema = toTypedSchema(
    object({
        name: editMode.value ? string() : string().min(1, 'يجب إدخال إسم التصنيف '),
        description: editMode.value ? string() : string().min(1, 'يجب إدخال التفاصيل  '),
    })
);

const { handleSubmit, errors, meta, setValues } = useForm({
    validationSchema
});

const { value: name } = useField<string>('name');
const { value: description } = useField<string>('description');

watchEffect(() => {
    if (props.category) {
        setValues({
            name: props.category.name,
            description: props.category.description
        })
    }
})

const submit = handleSubmit(values => {
    const payload = {
        ...values,
        image_path: base64Image.value
    }
    emit("submit", payload)
    console.log(payload);

})

const handleImage = (image: string) => {
  base64Image.value = image
}


</script>