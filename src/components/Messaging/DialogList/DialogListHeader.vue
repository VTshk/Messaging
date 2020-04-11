<template>
  <div class="header">
    <p class="header__text">Сообщения</p>
    <p class="header__number">{{numberOfMessages}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    numberOfMessages() {
      let number = 0;
      this.$store.getters.dialogs.forEach((d) => {
        number += d.parts.length;
      });
      return number;
    },
  },
};
</script>

<style lang="sass" scoped>
.header
  padding: 20px 23px
  display: flex
  font-size: 14px
  line-height: 20px
  &__text
    color: #656B77
  &__number
    color: #D2D8DE
    margin-left: 8px
</style>