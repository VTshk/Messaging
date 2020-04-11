<template>
  <div class="message">
    <p :class="['message__text',{'my-msg':userId === message.authorId}]">{{message.text}}</p>
    <div :class="['message-info',{'my-msg-info':userId === message.authorId}]">
      <h4 class="message-info__author">{{message.author}}</h4>
      <p class="message-info__created">{{message.created}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
    },
    userId: {
      type: Number,
    },
  },
};
</script>

<style lang="sass" scoped>
.message
  line-height: 141.62%
  // max-width: calc( 180px + 13vw )
  &__text
    max-width: calc( 180px + 13vw )
    display: inline-block
    word-wrap: break-word
    white-space: pre-wrap
    padding: 16px 20px
    border-radius: 8px 8px 8px 0px
    background: #F6F7F9
    font-size: 14px
    color: #474E54
  .my-msg
    background: #E9F5F4
    border-radius: 8px 8px 0px 8px
  &-info
    display: flex
    margin: 4px 0 20px 0
    &__author
      font-size: 13px
      color: #000000
      margin-right: 12px
    &__created
      color: #B7C0C8
      font-size: 10px
  .my-msg-info
    justify-content: flex-end
</style>