<template>
  <form @submit.prevent="submit">
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-2 mt-6">
      <v-text-field
        v-model="coupon_code"
        label="كود الكوبون"
        variant="outlined"
        color="primary"
        placeholder="كود الكوبون"
        :error-messages="errors.coupon_code"
      />

      <v-text-field
        v-model="limit"
        label="الحد الأعلي"
        variant="outlined"
        color="primary"
        placeholder="الحد الأعلي"
        :error-messages="errors.limit"
      />

      <v-text-field
        v-model="discount_percentage"
        label="نسبة التخفيض"
        type="number"
        variant="outlined"
        color="primary"
        placeholder="نسبة التخفيض"
        :error-messages="errors.discount_percentage"
      />

      <v-text-field
        v-model="expire_date"
        label="إنتهاء الصلاحية"
        type="text"
        variant="outlined"
        color="primary"
        placeholder="إنتهاء الصلاحية"
        :error-messages="errors.expire_date"
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
        {{ editMode ? 'تعديل كوبون' : 'إضافة كوبون' }}
      </v-btn>
    </div>
  </form>
</template>
<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, useField } from 'vee-validate';
import { object, string, number } from 'zod';
import type { Coupon, CouponFormRequest } from "../models/coupon";
import { computed, watchEffect } from "vue";

const props = defineProps<{
    isLoading: boolean,
    coupon?: Coupon
}>()
const emit = defineEmits<{
    submit: [value: CouponFormRequest]
}>()

const editMode = computed(() => !!props.coupon)

const validationSchema = toTypedSchema(
    object({
        coupon_code: string().min(1, 'يجب إدخال كود الكوبون '),
        limit: number().min(1, 'يجب إدخال  الحد الأعلي  '),
        discount_percentage: number().min(1, 'يجب إدخال نسبة التخفيض  '),
        expire_date: string().min(1, 'يجب إدخال تاريخ إنتهاء الصلاحية ')
    })
);

const { handleSubmit, errors, meta, setValues } = useForm({
    validationSchema
});

const { value: coupon_code } = useField<string>('coupon_code');
const { value: limit } = useField<number>('limit');
const { value: discount_percentage } = useField<string>('discount_percentage');
const { value: expire_date } = useField<number>('expire_date');

watchEffect(() => {
    if (props.coupon) {
        setValues({
            ...props.coupon
        })
    }
})

const submit = handleSubmit(values => {
    emit("submit", values)
})

</script>