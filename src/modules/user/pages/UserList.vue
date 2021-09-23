<template>
    <div>
        <h1>
            <strong>Users</strong>
        </h1>
        
        <table class="table table-responsive table-hover">
            <thead>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Email</th>
            </thead>
            <tbody>
                <tr v-for="user in this.users" :key="user.Id">
                    <td>{{ user.nome }}</td>
                    <td>{{ user.sobrenome }}</td>
                    <td>{{ user.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import UserService from '../services/userservice'

export default defineComponent({
    
    data(){
        return {
            users: []
        }        
    },
    props: {
        id: Number
    },
    async created() {
        const response = await UserService.getPaged(1,10) as any;
        this.users = response.data.retorno.value;
    }
})
</script>