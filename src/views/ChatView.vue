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

.message {
    box-shadow: -3px -3px 6px 0px rgba(174, 174, 192, 0.40), 3px 3px 6px 0px rgba(0, 0, 0, 0.40);
    padding: 10px;
    max-width: 50%;
    margin-bottom: 20px;

    &:nth-last-child(1) {
        margin-bottom: 0;
    }

    &.left {
        margin-left: 0;
        margin-right: auto;
        border-radius: 20px 20px 20px 0;
        margin-left: 20px;
        background: linear-gradient(135deg, #515359 0%, #1A1D24 100%);
    }

    &.right {
        border-radius: 20px 20px 0 20px;
        margin-right: 20px;
        background: $accent-color;
        margin-right: 0;
        margin-left: auto;
    }
}

</style>