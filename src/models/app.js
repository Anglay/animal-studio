
export default {

  namespace: 'app',

  state: {
    dirArr: ['C:', 'D:', 'E:'],
    projectDir: 'C:'
  },
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    changeProjectDir(state, action) {
      return {
        ...state,
        ...action.payload
      }
    },
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
