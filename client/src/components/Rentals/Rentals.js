import React, { Component } from "react";
import { Link } from "react-router-dom";
import Rental from "./Rental";

import "./Rentals.css";

class Rentals extends Component {
  state = {
    rentals: []
  };

  getRentals = () => {
    fetch("/api/rentals")
      .then(res => res.json())
      .then(rentals => this.setState({ rentals }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getRentals();
  }

  render() {
    const { rentals } = this.state;
    let title;
    let showRentals;

    if (rentals.length < 1) {
      title = <h3 className="rentals-main-title">Rentals are empty</h3>;
    } else {
      title = <h3 className="rentals-main-title">Here are your rentals</h3>;
      showRentals = this.state.rentals.map((rental, i) => {
        return (
          <Link key={i} to={`/rentals/${rental._id}`}>
            <Rental
              id={rental._id}
              address={rental.address}
              price={rental.price}
            />
          </Link>
        );
      });
    }

    return (
      <React.Fragment>
        {title}
        <div className="rentals-container">{showRentals}</div>
      </React.Fragment>
    );
  }
}

export default Rentals;
