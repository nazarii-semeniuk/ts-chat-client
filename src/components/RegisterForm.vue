<template>
    <form @submit.prevent="submit()" class="auth-form">
        <h1 class="title">Register</h1>
        <CutsomInput class="input" label="Name" type="text" v-model="loginData.firstName" />
        <CutsomInput class="input" label="Email" type="email" v-model="loginData.email" />
        <CutsomInput class="input" label="Password" type="password" v-model="loginData.password" />
        <CutsomInput class="input" label="Password Confirmation" type="password" v-model="loginData.passwordConfirmation" />
        <CustomButton class="button">Register</CustomButton>
    </form>
</template>

<script setup lang="ts">

import CutsomInput from '@/ui/CustomInput.vue';
import CustomButton from '@/ui/CustomButton.vue';

import AuthenticationApi from '@/api/AuthenticationApi';
import type { UserRegisterDTO, UserDTO } from '@/types/User';

const auth = new AuthenticationApi();

import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { AxiosError } from 'axios';

const router = useRouter();

const loginData = reactive<UserRegisterDTO & { passwordConfirmation: string }>({
    email: '',
    password: '',
    passwordConfirmation: '',
    firstName: ''
});

async function submit() {
    try {

        if(loginData.password !== loginData.passwordConfirmation) {
            alert('Passwords do not match');
            return;
        }

        const response = await auth.register(loginData.email, loginData.password, loginData.firstName);

        const user: UserDTO = response.data.user;

        const userStore = useUserStore();

        userStore.setUser(user);

        router.push('/');

    } catch (err: any) {
        if(err instanceof AxiosError) {
            if(err.response?.data?.message) {
                alert(err.response.data.message);
            }
        } else {
            alert('Unknown error');
        }
    }
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