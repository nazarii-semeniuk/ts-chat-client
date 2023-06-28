<template>
    <div class="chats-list">
        <ChatsListItem class="chats-list__item" v-for="chat in chats" :key="chat.id" :chat="chat" />
    </div>
</template>

<script setup lang="ts">

import { reactive } from 'vue';

import type { Chat } from '@/types/Chat';

import ChatsListItem from './ChatsListItem.vue';

const chats = reactive<Chat[]>([
    {
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
            }
        ]
    },
    {
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
            }
        ]
    },
    {
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
            }
        ]
    },
    {
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
            }
        ]
    }
    , {
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
            }
        ]
    }
    , {
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
            }
        ]
    }
    , {
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
            }
        ]
    }
    , {
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
            }
        ]
    }
    , {
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
            }
        ]
    }
    , {
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
            }
        ]
    }
    , {
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
            }
        ]
    }
]);

</script>

<style lang="scss" scoped>
.chats-list {
    height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 2px;
    }

    &__item {
        margin-bottom: 20px;

        &:nth-last-child(1) {
            margin-bottom: 0;
        }
    }
}
</style>