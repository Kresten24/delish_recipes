import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RecipeDetails.css";

const RecipeDetails = () => {
  const spoonacularApiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
  const [details, setDetails] = useState({});
  let params = useParams();

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${spoonacularApiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        setDetails();
      });
  }, []);

  return (
    <div className="recipe-details">
      <h1 className="recipe-details__title">{details.title}</h1>

      <img className="recipe-details__image" src={details.image} alt="" />

      {details.vegetarian !== undefined && (
        <div>
          <h4>Health Information</h4>
          {details.vegetarian && <span>Vegetarian </span>}
          {details.vegan && <span>Vegan </span>}
          {details.glutenFree && <span>Gluten-free </span>}
          {details.dairyFree && <span>Dairy-free </span>}
          <h4>List of ingredients and measurements</h4>
        </div>
      )}

      {details.extendedIngredients && (
        <div>
          {details.extendedIngredients
            .map((el) => `${el.name} (${el.amount} ${el.unit})`)
            .join(", ")}
        </div>
      )}
      <h4>Cooking instructions</h4>
      {details.instructions && (

          <div dangerouslySetInnerHTML={{ __html: details.instructions }}></div>

      )}
    </div>
  );
};
export default RecipeDetails;
