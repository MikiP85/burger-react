import React from "react";
import BurgerIngredients from "./BurgerIngredient/BurgerIngredients";
import "./Burger.scss";

const Burger = props => {
  const transformedIngredients = Object.keys(props.ingredients).map(ingKey => {
    return [...Array(props.ingredients[ingKey])].map((_, i) => {
      return <BurgerIngredients key={ingKey + i} type={ingKey} />;
    });
  });

  console.log(transformedIngredients);

  return (
    <div className="burger">
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
