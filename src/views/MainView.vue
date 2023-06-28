<template>
    <div class="main">
        <div class="chats">
            <ChatsList />
        </div>
        <div class="view">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">

import ChatsList from '@/components/ChatsList/ChatsList.vue';

</script>

<style lang="scss" scoped>
.main {
    height: 90vh;
    width: 1200px;
    background: linear-gradient(135deg, #515359 0%, #1A1D24 100%);
    border-radius: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.40), -3px -3px 6px 0px rgba(174, 174, 192, 0.40);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    .chats {
        width: 30%;
        height: 100%;
        border-right: 1px solid rgba(0,0,0,0.2);
        padding-right: 20px;
    }

    .view {
        width: calc(100% - 30% - 20px); // 20px - margin between chats and view
        height: 100%;
    }
}
</style>