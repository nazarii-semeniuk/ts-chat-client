<template>
    <form @submit.prevent="login()" class="auth-form">
        <h1 class="title">{{ type }}</h1>
        <CutsomInput class="input" label="Email" type="email" v-model="loginData.email" />
        <CutsomInput class="input" label="Password" type="password" v-model="loginData.password" />
        <CutsomInput class="input" v-if="type === 'register'" label="Password Confirmation" type="password" v-model="loginData.passwordConfirmation" />
        <CustomButton class="button">Login</CustomButton>
    </form>
</template>

<script setup lang="ts">

import CutsomInput from '@/ui/CustomInput.vue';
import CustomButton from '@/ui/CustomButton.vue';

import { reactive } from 'vue';

defineProps({
    type: {
        type: String,
        required: true
    }
});

const loginData = reactive<{ email: string, password: string, passwordConfirmation?: string }>({
    email: '',
    password: ''
});

async function login() {
    console.log(loginData);
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