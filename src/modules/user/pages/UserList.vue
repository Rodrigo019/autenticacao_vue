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
    
    created() {
        console.log(UserService.get(1));
    }
})
</script>