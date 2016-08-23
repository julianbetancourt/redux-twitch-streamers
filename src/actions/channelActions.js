import * as types from './actionTypes';
import axios from 'axios';

let nextChannel = 0;
export const addChannelSuccess = (channelInfo, name) => {
  return {
    type: types.ADD_CHANNEL_SUCCESS,
    channelInfo,
    name,
    id: nextChannel++
  }
}

export const addChannel = (name) => {
  return dispatch => {
    const channelUrl = `https://api.twitch.tv/kraken/channels/${name}`;
    const streamUrl = `https://api.twitch.tv/kraken/streams/${name}`;
    const info = [];
    axios.all([axios.get(channelUrl), axios.get(streamUrl)])
      .then(axios.spread((channel, stream) => {
        info.push(channel.data, stream.data);
        dispatch(addChannelSuccess(info))
      }))
      .catch(error => {
        info.push(error.response.data, error.response.data);
        dispatch(addChannelSuccess(info, name)); //passing directly the name, means the channel doesn't exist
      })
  }
}

export const removeChannel = (id) => {
  return {
    type: types.REMOVE_CHANNEL,
    id
  }
}
