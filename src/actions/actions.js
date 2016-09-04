/* @flow */

export const DO_THING = Symbol( 'DO_THING' );
export const THING_HAPPENED = Symbol( 'THING_HAPPENED' );

export const actionTypes: Array<Symbol> = [
  DO_THING,
  THING_HAPPENED
];

// Note: can't get flow to restrict ActionType to actual action types
type ActionType = Symbol;

export type Action = {
  type: ActionType,
  payload: any,
  error: boolean
}
