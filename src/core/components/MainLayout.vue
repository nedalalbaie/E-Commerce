<template>
  <v-layout
    class="rounded-md"
    style="direction: rtl;"
  >
    <v-navigation-drawer
      permanent
      width="100"
      color="secondary"
    >
      <v-divider />
      <div class="flex flex-col items-center ">
        <router-link
          v-for="(item, i) in navRoutes"
          :key="i"
          :to="item.route"
          class="mt-4 rounded-md p-2 hover:bg-red-200 "
        >
          <v-icon
            class="cursor-pointer" 
            size="38"
            :icon="item.icon"
            :value="item"
          />  
        </router-link>
        <div
          class="cursor-pointer rounded-md hover:bg-red-200 p-2 mt-20"
          @click="logout"
        >
          <v-icon
            class="cursor-pointer" 
            size="38"
            :icon="mdiLogout"
          />
        </div>
      </div>
    </v-navigation-drawer>

    <v-main class="min-h-screen bg-[#FFF8F4]">
      <main class="max-w-[1400px] mx-auto px-6 py-10">
        <RouterView />
      </main>
    </v-main>
  </v-layout>
</template>
  
<script setup lang="ts">
import { mdiLogout } from "@mdi/js"
import { useTheme } from 'vuetify';
import { logout } from "@/auth/auth-service"
import themeStore from "@/core/stores/theme-store"
import ProductIcon from './icons/ProductIcon.vue';
import CategoryIcon from "./icons/CategoryIcon.vue"
import ReceiptIcon from "./icons/ReceiptIcon.vue"
import AdsIcon from "./icons/AdsIcon.vue"
import UserIcon from "./icons/UserIcon.vue"

const theme = useTheme()

const toggleTheme = () => {
    themeStore.toggleTheme()
    theme.global.name.value = themeStore.theme
}

const navRoutes = [
    { title: 'المنتجات', icon: ProductIcon, alt: 'Products', route: '/products' },
    { title: 'التصنيفات', icon: CategoryIcon, alt: 'Categories',  route: '/categories' },
    { title: 'الطلبات', icon: ReceiptIcon, alt: 'Orders', route: '/orders' },
    { title: 'الإعلانات', icon: AdsIcon, alt: 'Ads', route: '/ads' },
    { title: 'الزبائن', icon: UserIcon, alt: 'Users', route: '/customers' },
    { title: 'الكوبونات', icon: UserIcon, alt: 'coupons', route: '/coupons' },
    { title: 'الإحصائيات', icon: UserIcon, alt: 'statistics', route: '/statistics' },
]

</script>
  
<style scoped>
a.router-link-active {
  background-color: #f4c691;
}
</style>