<template>
  <header class="bg-background fixed z-50 w-full">
    <nav class="flex h-16 items-center justify-around" ref="nav">
      <a class="text-2xl font-semibold tracking-wider uppercase" href="#home">
        Ng Zhun Onn
      </a>

      <ul
        class="bg-background ease-z-10 fixed top-16 flex w-full flex-col items-center gap-4 text-xl duration-300 md:static md:z-0 md:w-auto md:flex-row md:shadow-none! lg:gap-8"
        :class="{
          'translate-y-0': isMenuOpen,
          '-translate-y-5/4 md:translate-y-0': !isMenuOpen,
        }"
      >
        <li
          v-for="item in menuItems"
          :key="item.name"
          class="w-full py-4 text-center md:w-auto md:py-0"
          @click="isMenuOpen = false"
        >
          <a :href="item.href" class="block w-full hover:underline md:w-auto">
            {{ item.name }}
          </a>
        </li>
      </ul>

      <button
        class="md:hidden"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle Menu"
      >
        <div class="cursor-pointer space-y-2">
          <span
            class="bg-text block h-0.5 w-7 duration-200"
            :class="{ 'translate-y-2.5 rotate-45': isMenuOpen }"
          />
          <span
            class="bg-text block h-0.5 w-7 duration-200"
            :class="{ 'scale-0 transform': isMenuOpen }"
          />
          <span
            class="bg-text block h-0.5 w-7 duration-200"
            :class="{ '-translate-y-2.5 -rotate-45': isMenuOpen }"
          />
        </div>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const nav = ref<HTMLElement | null>(null);
const isMenuOpen = ref(false);
const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const handleClickOutside = (event: MouseEvent) => {
  if (nav.value && !nav.value.contains(event.target as Node)) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
header,
ul {
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
