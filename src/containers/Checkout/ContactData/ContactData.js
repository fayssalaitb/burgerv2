import React, { Component } from "react";
import axios from "../../../axios-orders";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.module.css";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    adress: {
      street: "",
      postalCode: ""
    },
    loading: false
  };
  orderHandler = event => {
    event.preventDefault();

    this.setState({ loading: true });
    //alert("you continue");
    const order = {
      ingredients: this.props.ingredients,

      price: this.props.price,
      customer: {
        name: "fayssal",
        address: {
          street: "testStreet",
          zipCode: "23423",
          country: "Sweden"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };

    axios
      .post("/orders.json", order)
      .then(res => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(err => this.setState({ loading: false }));
  };
  render() {
    let form = (
      <form>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          inputtype="input"
        />
        <Input
          type="text"
          name="email"
          placeholder="Your Mail"
          inputtype="input"
        />
        <Input
          type="text"
          name="street"
          placeholder="Street"
          inputtype="input"
        />
        <Input
          type="text"
          name="postal"
          placeholder="Postal Code"
          inputtype="input"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}
export default ContactData;
