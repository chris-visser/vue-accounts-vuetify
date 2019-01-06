import FormMixin from './FormMixin';

export default {
  extends: FormMixin,
  tokenName: 'reset-password-token',

  statusses: {
    idle: { color: 'secondary', dark: true, title: 'Save new password' },
    submitting: { color: 'default', dark: false, title: 'Saving your new password...' },
    success: { color: 'success', dark: false, title: 'Finished!' },
    error: { color: 'error', dark: true, title: 'Oops! Something went wrong..' },
  },

  data() {
    return {
      method: '$resetPassword',
    }
  },

  computed: {
    payload() {
      return {
        token: this.$route.query[this.$options.tokenName],
      }
    }
  }


}
