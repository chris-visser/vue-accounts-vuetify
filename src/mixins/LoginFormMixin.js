import FormMixin from './FormMixin';

export default {
  extends: FormMixin,

  statusses: {
    idle: { color: 'secondary', dark: true, title: 'Login' },
    submitting: { color: 'default', dark: false, title: 'Logging you in...' },
    success: { color: 'success', dark: false, title: 'Success!' },
    error: { color: 'error', dark: true, title: 'Oops! Something went wrong..' },
  },

  data() {
    return {
      method: '$login',
    }
  }
}
