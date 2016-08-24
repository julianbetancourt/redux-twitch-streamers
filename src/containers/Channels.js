import React, { Component } from 'react';
import { connect } from 'react-redux';
import Channel from '../components/Channel';
import { removeChannel } from '../actions/channelActions';

const getVisibleChannels = (channels, filter) => {
  switch (filter) {
    case 'all':
      return channels;
    case 'online':
      return channels.filter(c => c.state === 'online')
    case 'offline':
      return channels.filter(c => c.state === 'offline')
    default:
      return channels;
  }
}


class Channels extends Component {
  render() {
    const { channels, searchInputStr, removeChannel } = this.props;
    return (
      <div className="channels">
        {
          channels
            .filter(channel => channel.name.toLowerCase().includes(searchInputStr))
            .map((channel, i) => {
            return (
              <Channel
                logo={channel.logo}
                name={channel.name}
                link={channel.link}
                game={channel.game}
                online={channel.state === "online"}
                key={channel.name}
                removeChannel={removeChannel}
                i={i}/>
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channels: getVisibleChannels(state.channels, state.controls.filter),
    searchInputStr: state.controls.searchChannel
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeChannel: id => dispatch(removeChannel(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
