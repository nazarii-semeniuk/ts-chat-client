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
import type { UserLoginDTO, UserDTO } from '@/types/User';
import { AxiosError } from 'axios';
import { useUserStore } from '@/stores/user';

const auth = new AuthenticationApi();

import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const loginData = reactive<UserLoginDTO>({
    email: '',
    password: ''
});

async function submit() {
    try {
        const response = await auth.login(loginData.email, loginData.password);
        const userStore = useUserStore();
        
        const user: UserDTO = response.data.user;

        userStore.setUser(user);

        router.push('/');
    } catch(err: any) {
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