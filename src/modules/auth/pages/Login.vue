<template>
    <div class="text-center">
        <main class="form-signin">
            <form @submit.prevent="submit()">
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                <div class="form-floating">
                    <input 
                        required
                        v-model="this.form.email" 
                        type="email" 
                        class="form-control" 
                        id="email" 
                        placeholder="name@example.com">
                    <label for="email">Email address</label>
                </div>
                <div class="form-floating">
                    <input 
                        required
                        v-model="this.form.password" 
                        type="password" 
                        class="form-control" 
                        id="password" 
                        placeholder="Password">
                    <label for="password">Password</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </main>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthService from '../services/authservice'

export default defineComponent({
    name: 'Login',
    data() {
        return {
            form :{
                email: '',
                password: ''
            }
        }
    },
    methods: {
        submit() {
            console.log(this.form);
            console.log(AuthService.post({ email: this.form.email, password: this.form.password }));
        }
    }
})
</script>

<style>

div.text-center {
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>