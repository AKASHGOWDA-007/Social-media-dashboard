import React from "react";
import data from "../data/overview";
import CountUp from 'react-countup';
import { images } from "../images";

const Overview = () => {
  return (
    <>
      <section className="container">
        <h2 className="overview__title">Overview - Today</h2>
        <div className="cards">
          {data.map((item) => {
            const {id, platform, title, image, count, number, rising} = item;
            return (
              <div className="card card-grid" key={id}>
                <div className="card__subtitle">{title}</div>
                <div className="card__platform">
                  <img src={image} alt="" />
                </div>
                <div className="card__count--small">
                  <CountUp className="card__count card__count--small" end={count}>{count > 10000 ? Math.floor(count / 1000) + "K" : count}</CountUp>
                </div>

                <div className="card__change">
                  <img
                    src={
                      rising
                        ? images.icon_up
                        : images.icon_down
                    }
                    alt="rise-up-down"
                  />
                  <p
                    className={`${
                      rising ? "card__change--up" : "card__change--down"
                    }`}
                  >
                    {number}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Overview;
