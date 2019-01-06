import BaseFormMixin from './BaseFormMixin';

export default {
  extends: BaseFormMixin,

  statusses: {
    idle: { color: 'secondary', dark: true, title: 'Send reset e-mail' },
    submitting: { color: 'default', dark: false, title: 'Sending the reset e-mail...' },
    success: { color: 'success', dark: false, title: 'Finished! Please check your e-mail.' },
    error: { color: 'error', dark: true, title: 'Oops! Something went wrong..' },
  },

  data() {
    return {
      method: '$forgotPassword',
    }
  }
}
