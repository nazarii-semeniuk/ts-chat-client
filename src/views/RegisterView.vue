<template>
    <div class="register">
        <RegisterForm />
    </div>
</template>

<script setup lang="ts">

import RegisterForm from '@/components/RegisterForm.vue';

</script>

<style lang="scss" scoped>
.register {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}
</style>