
export default {

  statusses: {
    idle: { color: 'secondary', dark: true, title: 'Submit' },
    submitting: { color: 'default', dark: false, title: 'Processing...' },
    success: { color: 'success', dark: false, title: 'Success!' },
    error: { color: 'error', dark: true, title: 'Oops! Something went wrong..' },
  },

  props: {
    autofocus: { type: Boolean, default: false },
  },

  data() {
    return {
      error: '',
      status: 'idle',
    };
  },

  computed: {
    submitBtnProps() {
      return this.$options.statusses[this.status];
    },
  },

  methods: {
    async submit(payload) {

      this.error = '';
      this.status = 'submitting';

      const mixedPayload = {
        ...payload,
        ...this.payload,
      };

      this.$emit('submit', mixedPayload); // Expose event to parent

      if(this.method) {
        await this.callMethod(mixedPayload);
      }
    },

    /**
     * Calls the login method that was added via a plugin, handling any error or success callback
     * @param {Object} payload - Key/value pairs
     * @returns {Promise<void>}
     */
    async callMethod(payload) {
      const method = this[this.method];

      if (!method) {
        this.triggerError(`Method "${this.method}" not implemented. Did you forget to add a vue-accounts plugin?`);
      }

      try {
        const result = await method(payload);

        this.status = 'success';

        this.$emit('success', result);

        setTimeout(() => this.status = 'idle', 3000); // Reset state after 3 seconds

      } catch (error) {
        this.triggerError(error);
      }
    },
    /**
     * @param {String} error
     */
    triggerError(error) {
      this.status = 'error';
      this.$emit('error', error);
      throw new Error(error);
    }
  },
}
