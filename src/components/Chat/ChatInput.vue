<template>
    <div class="chat-input">
        <CustomInput class="input" placeholder="Type your message..." />
        <CustomButton class="button">Send</CustomButton>
    </div>
</template>

<script setup lang="ts">

import CustomInput from '@/ui/CustomInput.vue';
import CustomButton from '@/ui/CustomButton.vue';

</script>

<style lang="scss" scoped>
.chat-input {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .input {
        width: 75%;
    }

    .button {
        width: 20%;
        padding-top: 7px;
        padding-bottom: 7px;
    }
}
</style>