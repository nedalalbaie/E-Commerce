<template>
  <form @submit.prevent="submit">
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-2 mt-6">
      <v-text-field
        v-model="name"
        label="إسم المنتج"
        variant="outlined"
        color="primary"
        placeholder="إسم المنتج"
        :error-messages="errors.name"
      />

      <v-autocomplete
        v-model="category_id"
        :hide-no-data="false"
        item-title="name"
        item-value="id"
        :items="categories.data.value"
        :loading="categories.isPending.value"
        hide-selected
        label="التصنيفات"
        placeholder="التصنيفات"
        variant="outlined"
        color="primary"
        auto-select-first
        :error-messages="errors.category_id"
      >
        <template #no-data>
          <v-list-item>
            <v-list-item-title>
              لا توجد نتائج
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-autocomplete>

      <v-text-field
        v-model="product_code"
        label="رمز المنتج"
        variant="outlined"
        color="primary"
        placeholder="رمز المنتج"
        :error-messages="errors.product_code"
      />

      <v-text-field
        v-model="price"
        label="السعر"
        type="number"
        variant="outlined"
        color="primary"
        placeholder="السعر"
        :error-messages="errors.price"
        @input="convertPriceToNumber"
      />

      <v-text-field
        v-model="quantity"
        label="الكمية"
        type="number"
        variant="outlined"
        color="primary"
        placeholder="الكمية"
        :error-messages="errors.quantity"
        @input="convertQuantityToNumber"
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

      <div>
        <p class="text-xl mb-4">
          الجنس
        </p>
        <v-radio-group
          v-model="gender"
          inline
        >
          <v-radio
            label="أولاد"
            :value="GENDER.MALE"
            color="#00658D"
          />
          <v-radio
            label="بنات"
            :value="GENDER.FEMALE"
            color="#A13763"
          />
          <v-radio
            label="كلاهما"
            :value="GENDER.BOTH"
            color="primary"
          />
        </v-radio-group>
      </div>
    </div>

    <div>
      <h3 class="text-xl">
        الصور
      </h3>
      <p class="mt-2">
        يمكنك رفع ما يصل إلي 4 صور لهذا المنتج، اذا كانت هناك صورة فيمكنك تبديلها بالضغط واختيار صورة اخرى
      </p>

      <div class="mt-8 grid grid-cols-4 gap-4">
        <ImageUpload
          v-for="index in 4"
          :key="index"
          :index="index"
          @handle-image="handleImage"
        />
      </div>
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
        {{ editMode ? 'تعديل منتج' : 'إضافة منتج' }}
      </v-btn>
    </div>
  </form>
</template>
<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, useField } from 'vee-validate';
import { object, string, number } from 'zod';
import type { Product } from "../models/product";
import { GENDER } from "../models/gender"
import { computed, reactive, ref, watchEffect } from "vue";
import { getCategories } from "@/categories/categories-service";
import { useQuery } from "@tanstack/vue-query";
import ImageUpload from "@/core/components/ImageUpload.vue"

const props = defineProps<{
  isLoading: boolean,
  product?: Product
}>()
const emit = defineEmits<{
  submit: [value: {
    name: string;
    product_code: string;
    description: string;
    category_id: number;
    price: number;
    quantity: number;
    gender: number;
    image1_path: string;
    image2_path: string;
    image3_path: string;
    image4_path: string;
  }]
}>()

const base64Images = reactive([ "", "", "", "",])

const editMode = computed(() => !!props.product)
const listParams = ref({
  page: 1,
  limit: 50,
})

const categories = useQuery({
  queryKey: ['categories', listParams],
  queryFn: () => getCategories(listParams.value),
  select: (response) => response.data
})

const validationSchema = toTypedSchema(
  object({
    name: editMode.value ? string() : string().min(1, 'يجب إدخال إسم المنتج '),
    product_code: editMode.value ? string() : string().min(1, 'يجب إدخال رمز المنتج '),
    description: editMode.value ? string() : string().min(1, 'يجب إدخال التفاصيل  '),
    category_id: number().min(1, 'يجب إختيار التصنيف'),
    price: number().min(1, 'يجب إدخال السعر'),
    quantity: number().min(1, 'يجب إدخال الكمية'),
    gender: number().min(1, 'يجب إدخال الجنس')
  })
);

const { handleSubmit, errors, meta, setValues } = useForm({
  validationSchema,
  initialValues: {category_id: 20}
});

const { value: name } = useField<string>('name');
const { value: product_code } = useField<number>('product_code');
const { value: description } = useField<string>('description');
const { value: category_id } = useField<number>('category_id');
const { value: price } = useField<number>('price');
const { value: quantity } = useField<number>('quantity');
const { value: gender } = useField<number>('gender');

watchEffect(() => {
  if (props.product) {
    setValues({
      name: props.product.name,
      product_code: props.product.product_code,
      description: props.product.description,
      category_id: props.product.category_id,
      price: props.product.price,
      quantity: props.product.quantity,
    })
  }
})

const convertPriceToNumber = () => {
  price.value = Number(price.value)
}

const convertQuantityToNumber = () => {
  quantity.value = Number(quantity.value)
}

const submit = handleSubmit(values => {
  const payload = {
    ...values,
    image1_path: base64Images[0] ,
    image2_path: base64Images[1],
    image3_path: base64Images[2],
    image4_path: base64Images[3]
  }
  emit("submit", payload) 
  console.log(payload);
  
})

const handleImage = (base64Image: string, index: number) => {
  base64Images[index - 1] = base64Image
}


</script>