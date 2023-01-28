import React from "react";
import { Link } from "react-router-dom";
import UpdateButton from "./UI/UpdateButton";
import DeleteButton from "./UI/DeleteButton";

const Pizza = (props) => {
  const { id, name, price, imageUrl, vegan, createdAt } = props.pizza;

  return (
    <article className="pizza-box">
      <div className="img-box">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="pizza-footer">
        <h3>{name}</h3>
        <p>{price.small} zł / {price.large} zł</p>
        <Link
          className="btn btn-primary btn-details"
          to={"/pizza/" + id}
        >
          Details
        </Link>
        <div className="pizza-actions">
          <UpdateButton id={id}/>
          <DeleteButton  id={id}/>
        </div>
        { vegan && <h5 className="vegan">Vegan</h5>}
        <div className="created">
          <span>Created:</span>
          <h6>{ createdAt }</h6>
        </div>
      </div>
    </article>
  );
};

export default Pizza;