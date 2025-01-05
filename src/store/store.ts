import { configureStore } from '@reduxjs/toolkit';
import sendDataSlice, { SEND_DATA_PERSISTENT_STATE } from './sendData.slice';

import { saveState } from './storage';
export const store = configureStore({
	reducer: {
        sendData: sendDataSlice
    }
});
store.subscribe(() => {
	saveState({ ...store.getState().sendData }, SEND_DATA_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;