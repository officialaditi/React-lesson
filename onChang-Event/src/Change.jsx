// onChange event handler

import { useState } from "react";

const Change = () => {
  const [name, setName] = useState("enter name");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handlePayment = (e) => {
    setPayment(e.target.value);
  };

  const handleShipping = (e) => {
    setShipping(e.target.value);
  };
  return (
    <>
      <div>
        <input value={name} onChange={handleName} type="text" />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantity} type="number" />
        <p>Quantity:- {quantity}</p>

        <textarea
          value={comment}
          onChange={handleComment}
          placeholder="Enter delivery instruction"
        />
        <p>comment:{comment} </p>

        <select value={payment} onChange={handlePayment}>
          <option>Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Gpay">Gpay</option>
          <option value="MasterCard">MasterCard</option>
          <option value="PayPal">PayPal</option>
        </select>
        <p>payment: your payment method is :- {payment}</p>

        <label>
          <input
            type="radio"
            value="Pick up"
            checked={shipping === "Pick up"}
            onChange={handleShipping}
          />
          Pick up 
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShipping}
          />
        Delivery
        </label>
        <p>shipping:- {shipping}</p>
      </div>
    </>
  );
};
export default Change;
