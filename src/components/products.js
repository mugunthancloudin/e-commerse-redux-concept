import React, { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CardDetails from "./cardDetails";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/productSlice";


export default function Products() {

  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  console.log(data);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => setData(result.products));
  }, []);
  return (
    <>
      <div className="container mt-3">
        <CardDetails/>
        {data.length > 0 ? (
          <div className="row ">
            {data.map((item, index) => (
              <div key={index} className="col-lg-4 mt-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src={item.thumbnail}
                    alt="Card image cap"
                    width={200}
                    height={150}
                  />
                  <p>{item.price}</p>
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                  <div className="card-footer border-0">
                    <a href="#" onClick={()=>dispatch(addProduct({
                      id : item.id,
                      title : item.title,
                      descrption : item.description,
                      price : item.price
                    }))} className="btn btn-primary">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "Loading data"
        )}
      </div>
    </>
  );
}
