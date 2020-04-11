<template>
  <div class="Messaging">
    <DialogList/>
    <MessageList class="message-list"/>
  </div>
</template>

<script>
import DialogList from '@/components/Messaging/DialogList/DialogList.vue';
import MessageList from '@/components/Messaging/MessageList/MessageList.vue';

export default {
  name: 'Messaging',
  components: {
    DialogList,
    MessageList,
  },
};
</script>

<style lang="sass" scoped>
.Messaging
  display: flex
  margin: 5vh auto
  height: calc(100px + 70vh)
  width: calc(50px + 75vw)
  background: white
  border-radius: 3px
  position: relative

@media screen and (max-width: 800px)
  .message-list
    margin-left: 40px
</style>
