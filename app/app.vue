<template>
 <UApp>
   <div class="w-full h-screen">
      <!-- <NuxtRouteAnnouncer />
      <NuxtWelcome /> -->
      <NuxtPage />
    </div>
 </UApp>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue' 
const message = ref('');

const author = reactive({
  name: 'John Hancock',
  books: [
    'Vue 3 Guide', 
    'Vue 3 Guide', 
    'Vue 3 Guide', 
    'Vue 3 Guide', 
  ]
});

const count = ref(12);

// has published a book
const hasPublished = computed(() => {
  return author.books.length > 0 ? true:false;
});

function toggleBooks() {
  if (author.books.length > 0) {
    author.books = [];
  } else {
    author.books = [
      'Vue 3 Guide', 
      'Vue 3 Guide', 
      'Vue 3 Guide', 
      'Vue 3 Guide', 
    ];
  }
}

function increment() {
  count.value++;
}

</script>
