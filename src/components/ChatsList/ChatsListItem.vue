<template>
    <router-link :to="`/chat/${chat.id}`" class="chat-list-item">
        <div class="photo">
            <img :src="chat.image" :alt="chat.name" />
        </div>
        <div class="info">
            <div class="name">{{ chat.name }}</div>
            <div class="last-message">{{ chat.messages[0].content }}</div>
        </div>
    </router-link>
</template>

<script setup lang="ts">

import type { PropType } from 'vue';
import type { Chat } from '@/types/Chat';

defineProps({
    chat: {
        type: Object as PropType<Chat>,
        required: true
    }
});

</script>

<style lang="scss" scoped>
.chat-list-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding: 10px;
    transition: 0.2s all ease-in-out;
    border-radius: 10px;

    &:hover {
        background: rgba(0,0,0,0.2);
    }

    .photo {
        width: 60px;
        overflow: hidden;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-right: 10px;
    }

    .info {
        .name {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 5px;
        }
    }
}
</style>