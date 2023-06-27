<template>
    <div class="main">
        <ChatsList />
        <RouterView />
    </div>
</template>

<script setup lang="ts">

import ChatsList from '@/components/ChatsList/ChatsList.vue';

</script>