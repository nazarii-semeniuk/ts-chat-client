<template>
    <div class="messages">
        <div v-for="message in chat.messages" :key="message.id" :class="message.id === myId ? 'right' : 'left'"
            class="message">
            {{ message.content }}
        </div>
    </div>
</template>

<script setup lang="ts">

import type { Chat } from '@/types/Chat';
import { reactive } from 'vue';

const myId = '2';

const chat = reactive<Chat>({
    id: '1',
    name: 'Vlad Horobets',
    description: 'Hello, world!',
    image: 'https://avatars.githubusercontent.com/u/32341166?v=4',
    messages: [
        {
            id: '1',
            sender: '1',
            chat: '1',
            content: 'Hello. My name is Vlador4ik!',
            createdAt: new Date()
        },
        {
            id: '2',
            sender: '2',
            chat: '1',
            content: 'Hello. My is not.',
            createdAt: new Date()
        },
        {
            id: '3',
            sender: '1',
            chat: '1',
            content: 'OMNOMNOM. What is it?',
            createdAt: new Date()
        }
    ]
});

</script>

<style lang="scss" scoped>
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