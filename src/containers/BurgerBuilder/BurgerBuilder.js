import React, { useState } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

const BurgerBuilder = () => {
  const burgerIngredients = {
    salad: 1,
    bacon: 2,
    cheese: 2,
    meat: 2
  };

  const [ingredients, setIngredients] = useState(burgerIngredients);

  return (
    <div>
      <Aux>
        <Burger ingredients={ingredients} />
        <div>Build Controls</div>
      </Aux>
    </div>
  );
};

export default BurgerBuilder;
