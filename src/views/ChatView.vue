<template>
    <div class="chat">
        <ChatMessages />
        <ChatInput />
    </div>
</template>

<script setup lang="ts">

import ChatMessages from '@/components/Chat/Messages.vue';
import ChatInput from '@/components/Chat/ChatInput.vue';

</script>

<style lang="scss" scoped>

.chat {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}
</style>