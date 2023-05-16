import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import { Badge, IconButton} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = (props) => {
  return (
    <div>
      <IconButton aria-label="Carrito de compras">  
        <Badge badgeContent={
            props.numero
        } color="secondary"> 
          <ShoppingCartIcon style={{ color: 'white' }}/>
        </Badge>
      </IconButton>
    </div>
  );
};

export default CartWidget;
