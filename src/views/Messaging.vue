<template>
  <div class="Messaging">
    <DialogList/>
    <MessageList/>
  </div>
</template>

<script>
// @ is an alias to /src
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
