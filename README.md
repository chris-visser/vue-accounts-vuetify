A collection of prefabricated Vuetify components and Vue plugins that simplify 
setting up things related to user accounts and authentication. 

## Getting started

Install the dependencies:

```javascript
npm install vue-accounts
```

Import the form that you need into your app:

```vue
<template>
  <v-app>
    <login-form @submit="login" />
  </v-app>
</template>

<script>
import { LoginForm } from 'vue-accounts';

export default {
  components: {
    LoginForm,
  }
};
</script>
```




## Components


### Forms
 - LoginForm
 - RegistrationForm
 - ForgotPasswordForm
 - ResetPasswordForm
 
### Cards
 
 - LoginCard
 - RegistrationCard
 - ForgotPasswordCard
 - ResetPasswordCard




