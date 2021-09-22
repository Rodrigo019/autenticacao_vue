<template>
    <div>
        <h1>
            <strong>Users</strong>
        </h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserService from '../services/userservice'

export default defineComponent({
    
    data(){
        users: []
    },
    async created() {
        const retorno = UserService.getPaged(1,10);
        this.users = await (await retorno).retorno;
    }
})
</script>