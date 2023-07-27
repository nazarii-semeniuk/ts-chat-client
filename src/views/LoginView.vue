<template>
    <div class="login">
        <LoginForm />
    </div>
</template>

<script setup lang="ts">

import LoginForm from '@/components/LoginForm.vue';

</script>

<style lang="scss" scoped>
.login {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

}
</style>