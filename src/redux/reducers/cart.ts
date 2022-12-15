import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IEventDTO } from '../../@types/event';

interface IComprador {
  name: string;
  email: string;
}

export interface ITicketCart {
  id: string;
  event: IEventDTO;
  comprador: IComprador;
  tickets: number;
  amount: number;
}

interface ICartReducer {
  tickets: ITicketCart[];
}

const initialState: ICartReducer = { tickets: [] };

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addNewTicket: (state, action: PayloadAction<ITicketCart>) => {
      state.tickets.push(action.payload);
    },
    removeTicket: (state, action: PayloadAction<Pick<ITicketCart, 'id'>>) => {
      state.tickets = state.tickets.filter(
        ticket => ticket.id !== action.payload.id,
      );
    },
    resetCart: state => {
      state.tickets = [];
    },
  },
});

export const { addNewTicket, removeTicket, resetCart } = cartSlice.actions;
export const { reducer: CartReducer } = cartSlice;
