import { defineStore } from 'pinia'
import type { UserDTO } from '@/types/User'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null as UserDTO | null
    }),
    getters: {
        getUser(state) {
            return state.user;
        },
        isLoggedIn(state) {
            if(state.user) {
                return true;
            }
            return false;
        }
    },
    actions: {
        setUser(user: UserDTO) {
            this.user = user
        }
    }
});
