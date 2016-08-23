import React from 'react';

const Channel = ({link, logo, name, game, online}) => {
  return (
    <a href={link} className={online ? "channel channel--online" : "channel"}>
      <div className="channel__photo">
        <img src={logo} alt={`${name}'s logo`}/>
      </div>
      <div className="channel__info">
        <h2>{name}</h2>
        <span>{game}</span>
      </div>
    </a>
  );
}

export default Channel;
