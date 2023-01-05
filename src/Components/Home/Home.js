import React from "react";
import burger from "../../burger.jpg";
import chicken from "../../chicken.jpg";
import CardGroup from "../CardGroup/CardGroup";
import "./Home.css";
import "animate.css";

const Home = () => {
  return (
    <div>
      <div className="home grid justify-items-center ...">
        <section>
          <img
            className="burger animate__animated animate__fadeInTopLeft"
            src={burger}
            alt=""
          />
        </section>
        <section className="title-description">
          <div>
            <h1 className="italic hover:not-italic text-8xl font-bold text-yellow-500 animate__animated animate__backInLeft">
              Real Flame
            </h1>
          </div>
          <div>
            <h1 className="italic hover:not-italic text-8xl font-bold text-yellow-700 animate__heartBeat">
              Real Flavor
            </h1>
          </div>
          <div>
            <h1 className="italic hover:not-italic text-8xl font-bold text-yellow-900 animate__animated animate__backInRight">
              Real Good
            </h1>
          </div>
          <div className="description">
            <br />
            <h3 className="font-semibold animate__animated animate__zoomIn">
              All the tasty foods are now at your hand. Choose your ones and
              keep enjoying the delicious foods. Also if you enjoyed the foods,
              don't forget to give us your feedbacks !!!
            </h3>
            <br />
            <button
              type="button"
              className="review-button bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
            >
              Give Reviews
            </button>
          </div>
        </section>
        <section>
          <img
            className="chicken animate__animated animate__fadeInTopRight"
            src={chicken}
            alt=""
          />
        </section>
      </div>
      <CardGroup></CardGroup>
    </div>
  );
};

export default Home;
