import React, { useEffect, useState } from "react";
import Base from "./base";
import Card from "./card";
import { getProducts } from "./helper/coreApiCalls";
import "../style.css";
import Menu from "./menu";





const Home = () => {
    const[products , setProducts] = useState([]);

    const[ error , setError ] = useState(false);

    const [ query , setQuery] = useState([]);

    const loadAllProducts = () => {


        if(!query){
            getProducts()
            .then( data => {
                if(data.error){
                    setError(data.error);
                } else{
                    setProducts(data);
                }
            })
        } else {
            getProducts()
            .then( data => {
                if(data.error){
                    setError(data.error)
                }else{
                    setProducts( data.filter( element => element.title.toLowerCase().includes(query)))
                }
            }
            )
        }

        
    }



    useEffect(() => {
        loadAllProducts();
        
    },[query])




    
    return(
        <Base>


{            <input type="text" onChange={ (e) => {setQuery(e.target.value)}} className="inputBox" placeholder="Search here...">
       
            </input>}



            <div className="row">

                
                {products.map( ( product , index) => {

                        return(
                            <div key={index} className="col-3">
                                <Card product = {product}/>
                            </div>
                              )
                    })
                }
                

            </div>

        </Base>
        );
}




export default Home;
