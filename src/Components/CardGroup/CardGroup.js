import React from "react";
import Card from "../Card/Card";
import "./CardGroup.css";

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
        <h2 className="text-5xl font-bold font-mono text-yellow-900">
          Customer Reviews
        </h2>
      </div>
      <br />
      <div className="card-group mb-5 cardgroup-design">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
      <div>
        <button
          type="button"
          className="review-button bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
        >
          See All Reviews
        </button>
      </div>
    </div>
  );
};

export default CardGroup;