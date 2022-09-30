import { ANNUTET, DIFFERENSIAL } from "./actions";

export const reducer = (state = [], action) => {
  switch (action.type) {
    case DIFFERENSIAL: {
      for (let i = 0; i < action.creditTime; i++) {
        let item = {};
        if (i === 0) {
          item.number = i + 1;
          item.aqq = action.creditValue;
          item.aqbt = action.creditValue / action.creditTime;
          item.ft = (action.creditValue * 24.9) / (12 * 100);
          item.tum = item.aqbt + item.ft;
          item.balans = action.creditValue;
          state[i] = item;
        } else {
          item.number = i + 1;
          item.aqq = state[i - 1].aqq - state[i - 1].aqbt;
          item.aqbt = action.creditValue / action.creditTime;
          item.ft = (item.aqq * 24.9) / (12 * 100);
          item.tum = item.aqbt + item.ft;
          item.balans = item.aqq;
          state[i] = item;
        }
      }
      if (state.length > action.creditTime) {
        return state.slice(0, action.creditTime);
      }
      return state;
    }
    case ANNUTET: {
      const r = 24.9 / 1200;
      const s =
        action.creditValue * (r + r / (Math.pow(r + 1, action.creditTime) - 1));
      for (let i = 0; i < action.creditTime; i++) {
        let item = {};
        if (i === 0) {
          item.number = i + 1;
          item.aqq = action.creditValue;
          item.aqbt = s - action.creditValue * r;
          item.ft = action.creditValue * r;
          item.tum = s;
          item.balans = action.creditValue - item.aqbt;
          state[i] = item;
        } else {
          item.number = i + 1;
          item.aqq = state[i - 1].aqq - state[i - 1].aqbt;
          item.aqbt = s - item.aqq * r;
          item.ft = item.aqq * r;
          item.tum = s;
          item.balans = item.aqq - item.aqbt;
          state[i] = item;
        }
      }
      if (state.length > action.creditTime) {
        return state.slice(0, action.creditTime);
      }
      return state;
    }

    default:
      return state;
  }
};
