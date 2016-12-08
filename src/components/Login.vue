<template>
  <div class="login">
   <el-row type="flex" justify="center" align="middle">
    <el-form ref="form" :model="form" @submit.native.prevent="onSubmit">
      <el-form-item>
        <h2 class="login-header">Login</h2>
      </el-form-item>
      <el-form-item label="Username">
          <el-input type="email" id="username" name="username" placeholder="Your username" :model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="Password">
          <el-input type="password" id="password" name="password" placeholder="Your password" :model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" native-type="submit">Login</el-button>
      </el-form-item>
    </el-form>
   </el-row>
  </div>
</template>

<script>
  // import axios from 'axios';

  export default {
    name: 'login',
    data () {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit () {
        /* global FB */
        FB.login((response) => {
          if (response.authResponse) {
            console.log(response)
            FB.api('/me', { locale: 'en_US', fields: 'first_name, last_name, gender, email, picture' }, (user) => {
              console.log('Successful login for: ', user.name)
              console.log('user info', user)
            })
          } else {
                // User cancelled login or did not fully authorize
          }
        },
           { scope: 'public_profile,email' }
        )
      }
    }
  }
</script>

<style scoped>
  .login-header {
    padding-bottom: 0px;
  }
</style>