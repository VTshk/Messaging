import dialogs from '@/mocks/dialogs';

export default {
  state: {
    user: {
      userName: 'Vasiliy',
      userId: 1,
      dialogs: JSON.parse(localStorage.getItem('dialogs')) || dialogs,
    },
  },
  mutations: {
    updateDialogs(state, { newMsg, dialogId }) {
      const newDialogs = state.user.dialogs.map((d) => {
        if (d.id === dialogId) {
          d.parts.push(newMsg);
        }
        return d;
      });
      state.user.dialogs = newDialogs;
      localStorage.setItem('dialogs', JSON.stringify(newDialogs));
    },
  },
  actions: {
    updateDialogs({ commit }, { newMsg, dialogId }) {
      return new Promise((r) => setTimeout(() => r(
        commit('updateDialogs', { newMsg, dialogId }),
      ), 1000));
    },
  },
  getters: {
    userName: (s) => s.user.userName,
    userId: (s) => s.user.userId,
    dialogs: (s) => s.user.dialogs,
    dialogById: (s) => (id) => s.user.dialogs.find((d) => d.id === id),
  },
};