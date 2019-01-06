/* eslint-disable import/prefer-default-export */
export { default as LoginForm } from './forms/LoginForm';
export { default as RegistrationForm } from './forms/RegistrationForm';
export { default as ForgotPasswordForm } from './forms/ForgotPasswordForm';
export { default as ResetPasswordForm } from './forms/ResetPasswordForm';

export { default as LoginCard } from './cards/LoginCard';
export { default as RegistrationCard } from './cards/RegistrationCard';
export { default as ForgotPasswordCard } from './cards/ForgotPasswordCard';
export { default as ResetPasswordCard } from './cards/ResetPasswordCard';

// TODO Consider renaming this package to vue-accounts
//   vue-accounts would contain all kind of account related components and functionality

// TODO Create a store module that tracks the user's auth state

// TODO Create plugin that exposes the login, logout, register, forgotPassword and resetPassword methods and links them to a store

// TODO Implement a mixin or route guard that adds redirect behavior

// TODO Implement a gateway modal that shows the gateway when logged out

// TODO Implement a flag or a 'roles' prop for components to specify which roles can see the component
// Think a bit further on how to approach roles and authorization
