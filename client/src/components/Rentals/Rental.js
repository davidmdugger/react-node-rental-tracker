import React from "react";

const Rental = props => {
  const { id, address, price } = props;
  return (
    <div key={id} className="rental">
      <img src="http://via.placeholder.com/300x300" alt={address} />
      <div className="rental-content">
        <h5>{address}</h5>
        <h6>
          ${price}
          /month
        </h6>
      </div>
    </div>
  );
};

export default Rental;
