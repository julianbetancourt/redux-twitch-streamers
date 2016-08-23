import * as types from '../actions/actionTypes';
import initialState from './initialState';

const channels = (state = initialState.channels, action) => {
  switch (action.type) {
    case types.GET_INITIAL_CHANNELS_SUCCESS:
      return action.channels;
    case types.ADD_CHANNEL_SUCCESS:
      const isOnline = action.channelInfo[1].stream;
      const channelExists = !action.name; //if didn't receive a name then channel exists
      return [
        ...state,
        {
          name: channelExists ? action.channelInfo[0].display_name : action.name,
          logo: channelExists && action.channelInfo[0].logo ? action.channelInfo[0].logo : 'http://placehold.it/335x335?text=?',
          link: channelExists ? action.channelInfo[0].url : '#',
          state: isOnline ? 'online' : 'offline',
          game: !channelExists ? "This channel doesn't exist" :isOnline ? action.channelInfo[1].stream.game : 'offline',
          id: action.id
        }
      ];
    case types.REMOVE_CHANNEL:
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ]
    default:
      return state;
  }
}

export default channels;
