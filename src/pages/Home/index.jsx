import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

// API-lar: 
// ID: https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15997 
// All va Search: www.thecocktaildb.com/api/json/v1/1/search.php?s=

function Home() {
    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(false);
    const [url, setUrl] = useState('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    const inputText = useRef(); 
    useEffect(() =>{
        setLoader(true);
        axios.get(url)
        .then((res) => 
            setData(res.data?.drinks))
        .catch((err) => 
            console.log(err))
        .finally(() =>{
            setLoader(false);
        })
    },[url]);


    const handelSubmit = (e) =>{
        setUrl("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + inputText.current.value)
    }
     
  return (
    <>
        <section className="section search">
                <form className="search-form">
                    <div className="form-control">
                        <label htmlFor="input">search your favorite cocktail</label>
                        <input ref={inputText} onChange={handelSubmit} type="text" name="name" id="input" />
                    </div>
                </form>
            </section>
    <section className="section">
                <h2 className="section-title">Cocktails</h2>
                <div className="cocktails-center">
                {data && data.map((item) =>{
                    return (
                        <article key={item.idDrink} className='cocktail'>
                        <div  className="img-container"><img src={item.strDrinkThumb} alt={item.strDrink}/></div><div className="cocktail-footer"><h3>{item.strDrink}</h3><h4>{item.strGlass}</h4><p>{item.strAlcoholic}</p><Link className="btn btn-primary btn-details" to={`/details/${item.idDrink}`}>details</Link></div></article>
                    )
                })}
                </div>
            {loader && <div className="loader"></div>}
    </section>
    </>
  )
}

export default Home