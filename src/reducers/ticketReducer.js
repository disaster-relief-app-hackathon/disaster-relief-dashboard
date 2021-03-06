import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ticketReducer(state = initialState.tickets, action) {
 switch (action.type) {
  case types.LOAD_TICKETS_SUCCESS:
   return action.tickets;

   case types.LOAD_PICKUPS_SUCCESS:
    return action.pickups;


  case types.CREATE_TICKET_SUCCESS:
   return [
    ...state,
    Object.assign({}, action.ticket)
   ];

  case types.UPDATE_TICKET_SUCCESS:
   return [
    ...state.filter(ticket=> ticket.ticketNo !== action.ticket.ticketNo),
    Object.assign({}, action.ticket)
   ];
  default:
   return state;

 }
}
