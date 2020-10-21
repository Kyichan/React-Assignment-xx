
import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const Menu = ({ dishes, onClick }) => {
  const menu = dishes.map(dish => {
    return (
      
      <div className="col-6 col-md-5 m-1">
       
        <Card key={dish.id} onClick={() => onClick(dish.id)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });
  return (
    <div className="container pt-lg-5">
      <div className="row justify-content-center align-items-center">
      <h3 className="choose-title">Click on Item for more details</h3>
           {menu}
        </div>
    </div>
  );
};

export default Menu;