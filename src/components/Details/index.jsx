import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setData(res.data?.drinks[0]))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoader(false);
      });
  }, [id]);
//   console.log(data);
  return (
    <>
      <section className="section cocktail-section">
        <Link className="btn btn-primary" to="/">
          back home
        </Link>
    {data && <>
        <h2 className="section-title">{data.strDrink}</h2>
        <div className="drink">
          <img src={data.strDrinkThumb} alt={data.strDrink} />
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span>
              {data.strDrink}
            </p>
            <p>
              <span className="drink-data">category :</span> {data.strCategory}
            </p>
            <p>
              <span className="drink-data">info :</span> {data.strAlcoholic}
            </p>
            <p>
              <span className="drink-data">glass :</span>
              {data.strGlass}
            </p>
            <p>
              <span className="drink-data">instructons :</span>{" "}
              {data.strInstructions}
            </p>
            <p className="drink-ingredients">
              <span className="drink-data">ingredients :</span>
              {Array.from({length: 15}).map((_, ind) =>{
                return <span className="drink-ingredient">{data[`strIngredient${ind + 1}`]}</span>
              })}
             
            </p>
          </div>
        </div>
        </>}
      </section>
      {loader && <div className="loader"></div>}
    </>
  );
}

export default Details;
