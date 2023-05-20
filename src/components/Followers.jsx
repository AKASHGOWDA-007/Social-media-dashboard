import React from "react";
import socials from "../data/social";
import CountUp from 'react-countup';

function Followers() {
  return (
    <section className="container cards">
      {socials.map((social) => {
        const { id, platform, username, image, count, number, rising } = social;
        return (
          <div className={`card card--${platform}`}key={id}>
            <div className="card__header">
              <img src={image} alt={platform} />
              <p className="card__username">{username}</p>
            </div>
            <div className="card__count">
              <CountUp className="card__count--big" end={count}>{count > 9999 ? count / 1000 + "K" : count}</CountUp>
              <div className="card__label"> Followers</div>
            </div>
            <p className={`${rising ? "card__change--up" : "card__change--down"}`}>
              <img src={rising ? "../src/images/icon-up.svg" : "../src/images/icon-down.svg"} alt="" />
               {number} Today</p>
          </div>
        );
      })}
    </section>
  );
}

export default Followers;
