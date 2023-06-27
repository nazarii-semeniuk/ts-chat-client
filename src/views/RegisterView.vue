<template>
    <div class="register">
        <AuthForm type="register" />
    </div>
</template>

<script setup lang="ts">

import AuthForm from '@/components/AuthForm.vue';

</script>

<style lang="scss" scoped>
.register {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}
</style>