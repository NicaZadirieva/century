import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import requestSendData, { SendData } from '../api/requestSendData';
import { loadState } from './storage';

export interface SendDataState {
    fio?: string;
    phone?: string;
    region?: string;
    message?: string;
    displayed: boolean;
}

export interface SendDataPersistent {
    fio?: string;
    phone?: string;
    region?: string;
    message?: string
}

export type SendDataFields = keyof SendDataState;

export const SEND_DATA_PERSISTENT_STATE = 'sendData';

const initialState : SendDataState = { 
    displayed: false,
    fio: loadState<SendDataPersistent>(SEND_DATA_PERSISTENT_STATE)?.fio ?? undefined,
    phone: loadState<SendDataPersistent>(SEND_DATA_PERSISTENT_STATE)?.phone ?? undefined,
    region: loadState<SendDataPersistent>(SEND_DATA_PERSISTENT_STATE)?.region ?? undefined,
    message: loadState<SendDataPersistent>(SEND_DATA_PERSISTENT_STATE)?.message ?? undefined 
};

export const saveData = createAsyncThunk('sendData/saveData',
    async (params: SendData) => {
        const response = await requestSendData(params);
        console.log(response);
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Ошибка при отправке формы');
        }
    }
)
const sendDataSlice = createSlice({
	name: 'sendData',
	initialState,
	reducers: {
		showForm: (state) => {
			state.displayed = true;
		},
        hideForm: (state) => {
            state.displayed = false;
        },
        setFormData: (state: SendDataState, action: PayloadAction<{ key: SendDataFields, value: string }>) => {
            const currentKey : SendDataFields = action.payload.key;
            if(currentKey in state && currentKey !== "displayed") {
                state[currentKey] = action.payload.value;
            }
        }
    }
});

export default sendDataSlice.reducer;
export const sendDataActions = sendDataSlice.actions;