<template>
    <div class="login">
        <AuthForm type="login" />
    </div>
</template>

<script setup lang="ts">

import AuthForm from '@/components/AuthForm.vue';

</script>

<style lang="scss" scoped>
.login {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

}
</style>