import FormMixin from './FormMixin';

export default {
  extends: FormMixin,

  statusses: {
    idle: { color: 'secondary', dark: true, title: 'Register' },
    submitting: { color: 'default', dark: false, title: 'Signing you up...' },
    success: { color: 'success', dark: false, title: 'Finished! Logging you in...' },
    error: { color: 'error', dark: true, title: 'Oops! Something went wrong..' },
  },

  data() {
    return {
      method: '$register',
    }
  }
}
