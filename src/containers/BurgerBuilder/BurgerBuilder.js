import React, { useState } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const BurgerBuilder = () => {
  const burgerIngredients = {
    salad: 1,
    bacon: 1,
    cheese: 1,
    meat: 1
  };

  const INGREDIENT_PRICES = {
    salad: 0.5,
    meat: 1.3,
    bacon: 0.7,
    cheese: 0.4
  };

  const [ingredients, setIngredients] = useState(burgerIngredients);
  const [totalPrice, setTotalPrice] = useState(4);

  const addIngredientsHandler = type => {
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...ingredients
    };

    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];

    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;

    setTotalPrice(newPrice);
    setIngredients(updatedIngredients);
  };

  const removeIngredientHandler = type => {};

  return (
    <div>
      <Aux>
        <Burger ingredients={ingredients} />
        <BuildControls ingredientAdded={addIngredientsHandler} />
      </Aux>
    </div>
  );
};

export default BurgerBuilder;
