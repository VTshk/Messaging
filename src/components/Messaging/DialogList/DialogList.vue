<template>
  <div class="dialog-list">
    <div :class="['dialog-list__dialogs',{'showDialogs':showDialogs}]">
      <DialogListHeader :dialogsNumber="dialogs.length" />
      <hr />
      <Dialog
        v-for="dialog in dialogs"
        :key="dialog.id"
        :class="{'selected-dialog': +$route.params.id === dialog.id}"
        :dialog="dialog"
        :selectDialog="()=>selectDialog(dialog)"
      />
    </div>
    <div
      @click="showDialogs = !showDialogs"
      title="Открыть список диалогов"
      class="dialog-list__show-btn"
    >
      <i :class="['mdi',showDialogs?'mdi-chevron-double-left':'mdi-chevron-double-right']"></i>
    </div>
  </div>
</template>

<script>
import DialogListHeader from './DialogListHeader.vue';
import Dialog from './Dialog.vue';

export default {
  components: {
    DialogListHeader,
    Dialog,
  },
  data() {
    return {
      showDialogs: null,
    };
  },
  computed: {
    dialogs() {
      return this.$store.getters.dialogs;
    },
  },
  methods: {
    selectDialog(dialog) {
      if (dialog.id !== +this.$route.params.id) {
        this.$router.push(`/${dialog.id}`);
        if (window.innerWidth < 800) {
          this.showDialogs = false;
        }
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.dialog-list
  display: flex
  &__dialogs
    overflow-y: auto
    background: #f3f6f8
    width: 22vw
    min-width: 280px
    transition: all 0.1s
    .selected-dialog
      background: white
      border-left: 2px solid #398BFF
  &__show-btn
    height: 100%
    width: 40px
    cursor: pointer
    background: #398BFF
    display: none
    justify-content: center
    align-items: center
    i
      color: white
      font-size: 30px
    &:hover
      opacity: 0.8
    @media (max-width: 800px)
      display: flex
  hr
    border: 0
    margin: 0
    height: 1px
    background-color: #E9EDF2
  .showDialogs
    min-width: 280px !important

@media screen and (max-width: 800px)
  .dialog-list
    position: absolute
    z-index: 10
    height: 100%
    &__dialogs
      width: 0px !important
      min-width: 0px !important
</style>
