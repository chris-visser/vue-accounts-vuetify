## Very early WIP. Use at own risk!

A collection of prefabricated Vuetify components and Vue plugins + mixins that simplify 
setting up things related to user accounts and authentication. 

## Demo
Coming soon..

## Getting started

Install the dependencies:

```sh
npm install vue-accounts-vuetify
```

Install the store plugin to use the components with your Vuex account store
```javascript
import Vuex from 'vuex';
import { AuthStorePlugin } from 'vue-accounts-vuetify';

Vue.use(Vuex);

const store = new Vue.Store({});

Vue.use(AuthStorePlugin, { store }); // Init the plugin with the Vuex store
```

Import the form that you need into your app:

```vue
<template>
  <v-app>
    <login-card />
  </v-app>
</template>

<script>
import { LoginForm } from 'vue-accounts-vuetify';

export default {
  components: {
    LoginForm,
  }
};
</script>
```

You now have a working login form, but... It does not actually log someone in. Pressing 
submit will end up in an error stating that there was no store action named `login`. 
This is the nice part. You either use one of the backend plugins, or you implement your own!

### Ready to go account stores

 - [Vue Accounts Meteor]() - (Coming soon) Drop in integration with Meteor. Install and enjoy!

### Adding your own 
You can add your own account store just like any other store:

*./store.js*

```javascript
import account from './stores/account';

export default new Vuex.Store({
  modules: {
    account,
  }
});
```

*./stores/account.js*
```javascript
export default {
      actions: {
        async login(context, { email, password }) {},
        async logout(context) {},
        async register(context, { displayName, email, password }) {},
        async forgotPassword(context, { email }) {},
        async resetPassword(context, { token, password }) {},
        async verifyEmail(context, { token }) {},
      },
    },
```

Simply implement the backend methods in your store, but be sure to return a promise. 
This makes the component mixins able to provide a loading state to each auth component when needed.

#### Namspacing the store module

You can have a namespaced store module. In that case set the 
`namespace` option on the AuthStorePlugin to make it aware:

```javascript
Vue.use(AuthStorePlugin, { namespace: 'account' });
```



## Components
A set of opinionated auth components. Under the hood they use mixins that provide state and call 
the proper methods. For example the LoginForm will use the LoginFormMixin that calls the global login method.

### Forms
This package provides a couple drop-in Vuetify auth forms. They will work without any configuration. 

 - LoginForm
 - RegistrationForm
 - ForgotPasswordForm
 - ResetPasswordForm
 
### Cards
Most auth related forms come with some context. Linking for example from an to the login form 
from other forms. The below cards will provide that functionality.

 - LoginCard
 - RegistrationCard
 - ForgotPasswordCard
 - ResetPasswordCard




