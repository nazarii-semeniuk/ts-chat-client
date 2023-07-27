<template>
    <form @submit.prevent="submit()" class="auth-form">
        <h1 class="title">Login</h1>
        <CutsomInput class="input" label="Email" type="email" v-model="loginData.email" />
        <CutsomInput class="input" label="Password" type="password" v-model="loginData.password" />
        <CustomButton class="button" @click="">Login</CustomButton>
    </form>
</template>

<script setup lang="ts">

import CutsomInput from '@/ui/CustomInput.vue';
import CustomButton from '@/ui/CustomButton.vue';

import AuthenticationApi from '@/api/AuthenticationApi';
import type { UserLoginDTO } from '@/types/User.ts';

const auth = new AuthenticationApi();

import { reactive } from 'vue';

const loginData = reactive<UserLoginDTO>({
    email: '',
    password: ''
});

async function submit() {
    await auth.login(loginData.email, loginData.password);
}

</script>

<style lang="scss" scoped>
.auth-form {
    padding: 50px;
    border-radius: 25px;
    box-shadow: -3px -3px 6px 0px rgba(174, 174, 192, 0.40), 3px 3px 6px 0px rgba(0, 0, 0, 0.40);
    background: #272E36;
    min-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
        text-align: center;
        text-transform: capitalize;
    }

    .input {
        margin-top: 30px;
    }

    .button {
        margin-top: 30px;

    }
}
</style>