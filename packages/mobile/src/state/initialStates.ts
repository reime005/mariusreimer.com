import React from 'react';

export interface Action<T, P> {
  type: T;
  payload: P;
}

export type Actions = Action<'POST_ITEM_CLICK', { id: string }>;

export interface GlobalState {
  currentPostID: string | null;
}

export const initialGlobalState: GlobalState = {
  currentPostID: null,
};
