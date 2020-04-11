<template>
  <div class="dialog" @click="selectDialog()">
    <div class="dialog-header">
      <p class="dialog-header__subject">
        <strong>{{dialog.subject}}</strong>
      </p>
      <p class="dialog-header__created">{{dialog.created}}</p>
    </div>
    <p
      class="dialog-content"
    >{{dialog.parts.length ? dialog.parts[dialog.parts.length - 1].text : 'Сообщений нет'}}</p>
  </div>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Object,
    },
    selectDialog: {
      type: Function,
    },
  },
};
</script>

<style lang="sass" scoped>
.dialog
  padding: 21px 23px
  cursor: pointer
  background: #f3f6f8
  border-bottom: 1px solid #E9EDF2
  &:hover
    background: white
  &-header
    display: flex
    justify-content: space-between
    align-items: center
    &__subject
      font-size: 14px
      line-height: 20px
    &__created
      font-size: 10px
      line-height: 14px
      letter-spacing: 0.05em
      color: #B7C0C8
  &-content
    word-break: break-all
    white-space: pre-wrap
    font-size: 13px
    line-height: 18px
    color: #7D8790
    padding-top: 1px
    height: 36px
    overflow: hidden
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
</style>