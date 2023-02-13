import * as React from "react";
import { Button } from "@mui/material";
// import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Art = () => {
  return (
    <div>
      <div className="m-auto">
        <img
          className="pic"
          src="https://cdn.shopify.com/s/files/1/0314/1143/7703/files/hp-hero-6-large-post-launch-positive-light-collection-1210x1566_720x.jpg?v=1673036153"
          alt="m-16"
          justify-content="20"
        />
      </div>

      <div className="thor">
        <Button variant="outlined" color="error" width="50%">
          Shop now
        </Button>
      </div>

      <div className="post">Positive Light Collection</div>
      <p className="most">
        easy glow essentias to help you shine your brightest all day, every day
      </p>
      <div className="maka">
        <img className="makia"
          src="https://cdn.shopify.com/s/files/1/0314/1143/7703/files/hp-hero-6-small-post-launch-positive-light-collection-488x628_360x.jpg?v=1673036153"
          alt=""
        />
      </div>
    </div>
    
  );
};

export default Art;
