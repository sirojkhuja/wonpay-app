import { createStore } from "redux";

import { reducer } from "./action/reducers";

export const store = createStore(reducer);
