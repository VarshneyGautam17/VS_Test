import React, { useEffect, useState } from "react";
import "../Components/Homepage.css";
import { FaRegCreditCard } from "react-icons/fa6";
import Accordion from "react-bootstrap/Accordion";
import Paymethode from "./Paymethode";
import CartList from "./CartList";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';






const Homepage = () => {

  const [showAddress, setShowAddress] = useState(false);
  const [showchangeAddress, setShowChangeAddress] = useState(false);
  const [editingAddressIndex, setEditingAddressIndex] = useState(null);

  const handleAddressModalClose = () => setShowAddress(false);
  const handleAddressModalShow = () => setShowAddress(true);

  
  const handlechangeAddressModalClose = () => setShowChangeAddress(false);
  const handleChangeAddressModalShow = () => setShowChangeAddress(true);


  const [flat, setFlat] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [addressErrors, setAddressErrors] = useState({});






  const [newAddress, setNewAddress] = useState({
    flat: "",
    street: "",
    city: "",
    country: "",
    zipCode: "",
    type: "", 
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({
      ...newAddress,
      [name]: value,
    });
  };


  const handleAddressTypeChange = (index, type) => {
    
    const updatedAddresses = addresses.map((address, i) =>
      i === index ? { ...address, type } : address
    );
    setAddresses(updatedAddresses);
  };





  const handleSetAddress = () => {
    const updatedAddresses = addresses.map((address, index) =>
      index === editingAddressIndex ? { ...address, type: selectedValue } : address
    );
    setAddresses(updatedAddresses);
    handleAddressModalClose(); 
  };


  const handleAddNewAddress = () => {
 
    const newErrors = {};
    if (!newAddress.flat) newErrors.flat = "Flat/Condo/House is required";
    if (!newAddress.street) newErrors.street = "Street Number/Name is required";
    if (!newAddress.city) newErrors.city = "City is required";
    if (!newAddress.country) newErrors.country = "Country is required";
    if (!newAddress.zipCode) newErrors.zipCode = "Zip Code is required";
  
    if (Object.keys(newErrors).length > 0) {
      setAddressErrors(newErrors);
      return;
    }
    const formattedNewAddress = {
      flatCondoHouse: newAddress.flat,
      streetNumberName: newAddress.street,
      city: newAddress.city,
      country: newAddress.country,
      zipCode: newAddress.zipCode,
      type: newAddress.type,
    };

    setAddresses((prevAddresses) => [...prevAddresses, formattedNewAddress]);

    setAddresses([formattedNewAddress, ...addresses]);
  
  
    setNewAddress({ flat: "", street: "", city: "", country: "", zipCode: "", type: "" });
    setAddressErrors({});
    
  };


  




  const handleEditAddress = (index) => {
    setEditingAddressIndex(index);

    const selectedAddress = addresses[index];
    setFlat(selectedAddress.flatCondoHouse || "");
    setStreet(selectedAddress.streetNumberName || "");
    setCity(selectedAddress.city || "");
    setCountry(selectedAddress.country || "");
    setZipCode(selectedAddress.zipCode || "");

    setShowChangeAddress(true);
  };


  const handleSaveChanges = () => {
    const newErrors = {};
    
    if (!flat) newErrors.flat = "Flat/Condo/House is required";
    if (!street) newErrors.street = "Street Number/Name is required";
    if (!city) newErrors.city = "City is required";
    if (!country) newErrors.country = "Country is required";
    if (!zipCode) newErrors.zipCode = "Zip Code is required";

    if (Object.keys(newErrors).length > 0) {
      setAddressErrors(newErrors);
    } else {
      const updatedAddress = { type: addresses[editingAddressIndex].type, flatCondoHouse: flat, streetNumberName: street, city, country, zipCode };
      setAddresses((prevAddresses) => prevAddresses.map((address, index) => (index === editingAddressIndex ? updatedAddress : address)));

      handlechangeAddressModalClose();
      setFlat(""); setStreet(""); setCity(""); setCountry(""); setZipCode(""); setAddressErrors({});
    }

  };




const [addresses, setAddresses]=useState([
  {
    type: "shipping",
    flatCondoHouse: "Flat 12B",
    streetNumberName: "123 Maple Street",
    city: "New York",
    country: "USA",
    zipCode: "10001",
  },
  {
    type: "billing",
    flatCondoHouse: "Suite 10A",
    streetNumberName: "456 Oak Avenue",
    city: "Los Angeles",
    country: "USA",
    zipCode: "90001",
  }
]);


  const countries = [
    "China",          
    "India",          
    "United States",  
    "Indonesia",      
    "Pakistan",       
    "Nigeria",        
    "Brazil",         
    "Bangladesh",     
    "Russia",         
    "Mexico",         
    "Japan",          
    "Ethiopia",       
    "Philippines",    
    "Egypt",          
    "Vietnam",        
    "DR Congo",       
    "Iran",           
    "Turkey",         
    "Germany",        
    "Thailand",
    "USA"        
  ];

  const [cartList, setCartList] = useState([
    {
      prodId: 1,
      imageurl:
        "https://media.istockphoto.com/id/656944018/photo/denim-jacket-dude.jpg?s=612x612&w=0&k=20&c=sAOJ2ibYX5JK_5DcU9Nua5btT7lHLr79WOutpDtK_Q0=",
      prodName: "Denim Pro Jacket",
      prodSize: "XL",
      prodColor: "Blue",
      prodPrize: "64.00",
      added: true,
      saved: "2.00",
      quantity: 1,
    },
    {
      prodId: 2,
      imageurl:
        "https://images.unsplash.com/photo-1675877879221-871aa9f7c314?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      prodName: "Harbour Men Grey Solid Windcheater Sporty Jacket",
      prodSize: "XL",
      prodColor: "Grey",
      prodPrize: "46.00",
      added: true,
      saved: "1.00",
      quantity: 1,
    },
  ]);



  const [selectedValue, setSelectedValue] = useState("");
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [total, setTotal] = useState(0);
  const handleQuantityChange = (prodId, newQuantity) => {
    setCartList((prevCartList) =>
      prevCartList.map((product) =>
        product.prodId === prodId ? { ...product, quantity: parseInt(newQuantity) } : product
      )
    );
  };
  useEffect(() => {
    const newTotal = cartList.reduce((acc, product) => acc + product.prodPrize * product.quantity, 0);
    setTotal(newTotal);
  }, [cartList]);
  const handleRemoveProduct = (prodId) => {
    setCartList((prevCartList) =>
      prevCartList.filter((product) => product.prodId !== prodId)
    );
  };

  return (
    <div className="Homepage">
      <div className="header"></div>
      <div className="main">
        <div className="col-lg-5 col-md-12 col-12">
          <h5>Customer Details</h5>
          
          {addresses.map((address, index) => (
            <div key={index} className={`${address.type}-address`}>
              <div >
                <h6>{address.type.charAt(0).toUpperCase() + address.type.slice(1)} Address</h6>
                <p>{`${address.flatCondoHouse}, ${address.streetNumberName}, ${address.city}, ${address.country}, ${address.zipCode}`}</p>
              </div>
              <div className="d-flex mb-3 ms-3 align-items-end">
                <button className="btn btn-secondary btn-sm" onClick={() => handleEditAddress(index)}>Change</button>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-end align-items-center">
            <p style={{ fontSize: "0.9rem", color: "blue", cursor: "pointer" }} onClick={handleAddressModalShow}>
              + ADD NEW ADDRESS
            </p>
          </div>
          <div className="payment-method">
            <h6>PAYMENT METHOD</h6>

            <div>
              <input
                type="radio"
                name="radiobtn"
                value="paymentmethod1"
                className="radiobtn"
                checked={selectedValue === "paymentmethod1"}
                onChange={handleRadioChange}
              />
              <FaRegCreditCard
                className="fs-5 "
                style={{ marginTop: "-0.35rem" }}
              />
              <span className="radiobtnpara">Debit/Credit Card</span>
              {selectedValue == "paymentmethod1" ? <Paymethode total={total.toFixed(2)} /> : ""}
            </div>
            <div>
              <input
                type="radio"
                name="radiobtn"
                value="paymentmethod2"
                className="radiobtn"
                checked={selectedValue === "paymentmethod2"}
                onChange={handleRadioChange}
              />
              <FaRegCreditCard
                className="fs-5"
                style={{ marginTop: "-0.35rem" }}
              />
              <span className="radiobtnpara">Netbanking</span>
              {selectedValue == "paymentmethod2" ? <Paymethode total={total.toFixed(2)} /> : ""}
            </div>
            <div>
              <input
                type="radio"
                name="radiobtn"
                value="paymentmethod3"
                checked={selectedValue === "paymentmethod3"}
                className="radiobtn"
                onChange={handleRadioChange}
              />
              <FaRegCreditCard
                className="fs-5"
                style={{ marginTop: "-0.35rem" }}
              />
              <span className="radiobtnpara">Google Pay/Wallet</span>
              {selectedValue == "paymentmethod3" ? <Paymethode total={total.toFixed(2)} /> : ""}
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12">
          <h5>Your Order</h5>
          {cartList
            .filter((ele) => ele.added === true)
            .map((ele, index) => {
              return (
                <CartList
                  key={index}
                  product={ele}
                  onRemove={handleRemoveProduct}
                  onQuantityChange={handleQuantityChange}
                />
              );
            })}


<div className="chargesdiv">
            <div className="chargesdiv-subcom">
              <p>Delivery Charges</p>
              <span>$10</span>
              <p>Express Delivery</p>
            </div>
            <div className="chargesdiv-subcom" >
              <p>Delivery Charges</p>
              <span>$10</span>
              <p>Express Delivery</p>
            </div>
           
          </div>


<div className="totalpayment">
<p>Total Payment : <span className="ms-5">${total.toFixed(2)}</span></p>
</div>
        </div>
      </div>


      
      <Modal show={showAddress} onHide={handleAddressModalClose} size="xl" fullscreen="true">
  <Modal.Header closeButton>
    <Modal.Title>Add Address</Modal.Title>
  </Modal.Header>
  <Modal.Body>
        <div className="d-flex flex-wrap" style={{gap:"2rem"}}>
        {addresses.map((address, index) => (
            <div key={index} className="addnewaddress">
              <div >
                <p>{`${address.flatCondoHouse}, ${address.streetNumberName}, ${address.city}, ${address.country}, ${address.zipCode}`}</p>
              </div>
              <div className="d-flex mb-3 ms-3 align-items-end">
              <Form.Check
              className="mx-1"
              type="radio"
              label="Shipping"
              name={`addressType-${index}`} 
              value="shipping"
              checked={address.type === 'shipping'}
              onChange={() => handleAddressTypeChange(index, 'shipping')}
            />
            <Form.Check
            className="mx-1"
              type="radio"
              label="Billing"
              name={`addressType-${index}`}  
              value="billing"
              checked={address.type === 'billing'}
              onChange={() => handleAddressTypeChange(index, 'billing')}
            />
              </div>
            </div>
          ))}

          <div>
            <button className="btn btn-sm btn-dark" onClick={handleSetAddress}>Set Address </button>
          </div>

        </div>

    <hr />
    <Form>
      <div className="d-flex">
        <Form.Group className="mb-3 mx-3" controlId="flatCondoHouse">
          <Form.Label>Flat/Condo/House</Form.Label>
          <Form.Control
            type="text"
            name="flat"
            value={newAddress.flat}
            onChange={handleInputChange}
            isInvalid={!!addressErrors.flat}
          />
          <Form.Control.Feedback type="invalid">{addressErrors.flat}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 mx-3" controlId="streetNumberName">
          <Form.Label>Street Number/Name</Form.Label>
          <Form.Control
            type="text"
            name="street"
            value={newAddress.street}
            onChange={handleInputChange}
            isInvalid={!!addressErrors.street}
          />
          <Form.Control.Feedback type="invalid">{addressErrors.street}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 mx-3" controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={newAddress.city}
            onChange={handleInputChange}
            isInvalid={!!addressErrors.city}
          />
          <Form.Control.Feedback type="invalid">{addressErrors.city}</Form.Control.Feedback>
        </Form.Group>
      </div>

      <div className="d-flex">
        <Form.Group className="mb-3 mx-3" controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Select
            name="country"
            value={newAddress.country}
            onChange={handleInputChange}
            isInvalid={!!addressErrors.country}
          >
            <option value="">Select a country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">{addressErrors.country}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 mx-3" controlId="zipCode">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type="text"
            name="zipCode"
            value={newAddress.zipCode}
            onChange={handleInputChange}
            isInvalid={!!addressErrors.zipCode}
          />
          <Form.Control.Feedback type="invalid">{addressErrors.zipCode}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 mx-3" controlId="addressType">
          <Form.Label>Address Type</Form.Label>
          <Form.Select
            name="type"
            value={newAddress.type}
            onChange={handleInputChange}
            isInvalid={!!addressErrors.type}
          >
            <option value="">Select Address Type</option>
            <option value="shipping">Shipping</option>
            <option value="billing">Billing</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">{addressErrors.type}</Form.Control.Feedback>
        </Form.Group>
      </div>
    </Form>
  </Modal.Body>
  <Modal.Footer className="d-flex justify-content-start">
    <Button className="btn btn-sm" variant="dark" onClick={handleAddNewAddress} >
      Add Address
    </Button>
  </Modal.Footer>
</Modal>




      
      <Modal show={showchangeAddress} onHide={handlechangeAddressModalClose} size="xl" fullscreen="true">
      <Modal.Header closeButton>
        <Modal.Title>Change Address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="d-flex">
            <Form.Group className="mb-3 mx-3" controlId="flatCondoHouse">
              <Form.Label>Flat/Condo/House</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={flat}
                onChange={(e) => setFlat(e.target.value)}
                isInvalid={!!addressErrors.flat}
              />
              <Form.Control.Feedback type="invalid">{addressErrors.flat}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 mx-3" controlId="streetNumberName">
              <Form.Label>Street Number/Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                isInvalid={!!addressErrors.street}
              />
              <Form.Control.Feedback type="invalid">{addressErrors.street}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 mx-3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={city}
                onChange={(e) => setCity(e.target.value)}
                isInvalid={!!addressErrors.city}
              />
              <Form.Control.Feedback type="invalid">{addressErrors.city}</Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="d-flex">
            <Form.Group className="mb-3 mx-3" controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                isInvalid={!!addressErrors.country}
              >
                <option value="">Select a country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">{addressErrors.country}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 mx-3" controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                isInvalid={!!addressErrors.zipCode}
              />
              <Form.Control.Feedback type="invalid">{addressErrors.zipCode}</Form.Control.Feedback>
            </Form.Group>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default Homepage;
