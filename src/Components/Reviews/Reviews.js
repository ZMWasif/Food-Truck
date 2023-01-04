import React from "react";
import Card from "../Card/Card";
import CardGroup from "../CardGroup/CardGroup";

const Reviews = () => {
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
    {
      id: 4,
      name: "Emily",
      description:
        "I will recommend this to my friends. Foods are exactly what you said it does.",
      ratings: 4,
    },
    {
      id: 5,
      name: "Neha",
      description:
        "I am so pleased with this product. Not able to tell you how happy I am with pizza.",
      ratings: 5,
    },
    {
      id: 6,
      name: "Arish",
      description:
        "I will recommend you to my cousins. Pasta did exactly what you said it does.",
      ratings: 4,
    },
  ];
  return (
    <div>
      <div>
        <h2 className="text-5xl font-bold font-mono text-yellow-900 pt-8">
          This is what our Customers say !!!
        </h2>
      </div>
      <br />
      <div className="card-group cardgroup-design grid grid-rows-6 grid-flow-col gap-4">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
