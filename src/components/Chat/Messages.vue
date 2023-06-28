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