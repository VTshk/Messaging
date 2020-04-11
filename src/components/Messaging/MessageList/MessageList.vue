<template>
  <div class="message-list">
    <div v-if="!dialog" class="message-list__clear">
      <i class="mdi mdi-comment-multiple-outline"></i>
      <p>Пожалуйста, выберите беседу</p>
    </div>
    <div v-else class="message-list-items">
      <div class="messages" v-chat-scroll>
        <Message
          v-for="msg in dialog.parts"
          :key="msg.id"
          :class="{'my-msg':userId === msg.authorId}"
          :message="msg"
          :userId="userId"
        />
      </div>
      <MsgListFooter v-if="$route.params.id"/>
    </div>
    <div v-if="dialog&&!loading && !dialog.parts.length " class="message-list__clear">
      <p>Список сообщений пуст</p>
    </div>
    <loader class="loader" v-if="loading" />
  </div>
</template>

<script>
import Message from './Message.vue';
import MsgListFooter from './MsgListFooter.vue';
import loader from '../loader.vue';

export default {
  components: {
    Message,
    MsgListFooter,
    loader,
  },
  data() {
    return {
      dialog: {},
      loading: false,
    };
  },
  watch: {
    $route() {
      this.dialogById();
    },
  },
  computed: {
    userId() {
      return this.$store.getters.userId;
    },
  },
  methods: {
    dialogById() {
      this.dialog = {};
      this.loading = true;
      setTimeout(() => {
        this.dialog = this.$store.getters.dialogById(+this.$route.params.id);
        this.loading = false;
      }, 1000);
    },
  },
  created() {
    this.dialogById();
  },
};
</script>

<style lang="sass" scoped>
.message-list
  width: 100%
  background: #FFFFFF
  box-shadow: -15px 0px 25px -15px rgba(0, 0, 0, 0.1)
  display: flex
  flex-direction: column-reverse
  position: relative
  .loader
    margin: auto 0
  &__clear
    text-align: center
    margin: auto 0
    font-size: 14px
    color: #939393
    i
      font-size: 50px
  &-items
    display: flex
    flex-direction: column
    overflow-y: auto
    .messages
      padding: 20px
      overflow-y: auto
    .my-msg
      margin-left: auto
      display: flex
      flex-direction: column
      align-items: flex-end
</style>