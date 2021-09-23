<template>
    teste
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserService from '../services/userservice'
import User from '@/modules/user/models/user'

export default defineComponent({
    name: 'UserCreate',
    data() {
        return {
            user: User
        }
    },
    async created() {
        const id = this.$route.params['id'].toString();
        console.log(id);
        const response = await UserService.get(Number.parseInt(id));
        console.log(response);
        this.user = response.retorno
    }
})
</script>