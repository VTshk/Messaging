<template>
  <div class="footer">
    <div :class="['footer__text',{'footer__text_disabled':loading}]">
      <textarea-autosize
        @keydown.native="inputHandler"
        v-model="text"
        class="footer__text-textarea"
        :max-height="200"
        :disabled="loading"
        placeholder="Введите текст..."
      />
    </div>
    <button @click="sendMessage" class="footer__msgSendBtn">
      <loader v-if="loading" class="footer__msgSendBtn-loader" />
      <i v-else class="footer__msgSendBtn-icon mdi mdi-send"></i>
    </button>
  </div>
</template>

<script>
import loader from '../loader.vue';

export default {
  components: {
    loader,
  },
  data() {
    return {
      text: '',
      loading: false,
    };
  },
  watch: {
    $route() {
      this.text = '';
    },
  },
  computed: {
    userName() {
      return this.$store.getters.userName;
    },
    userId() {
      return this.$store.getters.userId;
    },
  },
  methods: {
    async sendMessage() {
      if (this.text && !this.loading) {
        const newMsg = {
          id: Date.now(),
          author: this.userName,
          authorId: this.userId,
          created: new Date().toLocaleString().substr(0, 17),
          text: this.text,
        };
        const dialogId = +this.$route.params.id;
        this.loading = true;
        try {
          await this.$store
            .dispatch('updateDialogs', { newMsg, dialogId })
            .then(() => {
              this.text = '';
              this.loading = false;
            });
        } catch (err) {
          console.log(err);
        }
      }
    },
    inputHandler(e) {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.footer
  border-top: 1px solid #E9EDF2
  width: 100%
  display: flex
  &__text
    width: 100%
    padding: 30px 30px 3px 30px
    border-right: 1px solid #E9EDF2
    &_disabled
      background: #ebebe4
    &-textarea
      width: 100%
      border: none
      outline: none
      font-size: 14px
      &:disabled
        background: #ebebe4
  &__msgSendBtn
    outline: none
    min-width: 80px
    background: #398BFF
    border: none
    cursor: pointer
    transition: .1s
    height: 81px
    margin-top: auto
    &:hover
      opacity: 0.8
    &-icon
      color: white
      font-size: 22px
    &-loader
      margin-bottom: 5px
      margin-right: 5px

</style>