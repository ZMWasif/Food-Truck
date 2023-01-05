import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./CardGroup.css";
import "animate.css";

const CardGroup = () => {
  const products = [
    {
      id: 1,
      name: "Wasif",
      description:
        "I will recommend you to my colleagues. Burger did exactly what you said it does.",
      ratings: 5,
    },
    {
      id: 2,
      name: "Novera",
      description:
        "I am so pleased with this product. Not able to tell you how happy I am with burger.",
      ratings: 5,
    },
    {
      id: 3,
      name: "James",
      description:
        "I will recommend you to my colleagues. Burger did exactly what you said it does.",
      ratings: 4.5,
    },
  ];
  return (
    <div>
      <div>
        <h2 className="text-5xl font-bold font-mono text-yellow-900 animate__animated animate__flipInX pt-10">
          Customer Reviews
        </h2>
      </div>
      <br />
      <div className="card-group mb-5 cardgroup-design animate__animated animate__jackInTheBox">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
      <div>
        <Link to="/reviews">
          <button
            type="button"
            className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... review-button bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
          >
            See All Reviews
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardGroup;
