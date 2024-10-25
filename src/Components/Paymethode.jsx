import React, { useState } from 'react';
import "../Components/Homepage.css";




const Paymethode = ({total}) => {







    const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [cvvNumber, setcvvNumber] = useState("");

  const [cardnumberError, setcardnumberError] = useState("");
  const [validmonthError, setvalidmonthError] = useState("");
  const [validyearError, setvalidyearError] = useState("");
  const [validcvvError, setvalidcvvError] = useState("");




  const YEAR = [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
    2026, 2027, 2028, 2029, 2030,
  ];


  const handlecvvchnage=(e)=>{
    setcvvNumber(e.target.value);
    if (e.target.value.length ===0 ) setvalidcvvError("This field is required");
    else if (e.target.value.length <3 || e.target.value.length >3 ) setvalidcvvError("Please Enter 3 digits");
    else
    {
        setvalidcvvError("")
    }
  }
  const handleyearChange = (e) => {
    setSelectedYear(e.target.value);
    if (e.target.value ==="") setvalidyearError("This field is required");
  };
  const handlemonthChange = (e) => {
    setSelectedMonth(e.target.value);
    if (e.target.value ==="") setvalidmonthError("This field is required");
  };


  const handlecardnumberchange = (e) => {
    const value = e.target.value;
    setcardNumber(value);
    if (value.length === 0) setcardnumberError("This field is required");
    else if (value.length === 16 && /^\d{16}$/.test(value)) {
      setcardnumberError("");
    } else {
      setcardnumberError("Number must be exactly 16 digits.");
    }
  };
  return (
        <div className="radiobtn-subcontainer">
          <div className="text-secondary" style={{ fontSize: "0.8rem" }}>
            Enter Card Number <sup>*</sup>
          </div>
          <div className="mt-1">
            <input
              type="number"
              value={cardNumber}
              onChange={handlecardnumberchange}
              placeholder="Enter 16-digit number"
            />
            <div>
            {cardnumberError && (
                <small style={{ color: "red" }}>{cardnumberError}</small>
            )}
            </div>

            <div className="cvvclasscard">
              <div>
                <div>
                  <p
                    className="text-secondary mt-2 m-0"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Valid date <sup>*</sup>
                  </p>
                </div>
                <div>
                  <select
                    name=""
                    id=""
                    className="custom-select mt-1"
                    value={selectedMonth}
                    onChange={handlemonthChange}
                  >
                    <option value="" selected="true" disabled="true">
                      MM
                    </option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  {validmonthError && (  <div>
            
                <small style={{ color: "red" }}>{validmonthError}</small>
           
            </div> )}

                  <select
                    name=""
                    id=""
                    className="custom-select"
                    value={selectedYear}
                    onChange={handleyearChange}
                  >
                    <option
                      className="px-2"
                      value=""
                      selected="true"
                      disabled="true"
                    >
                      YYYY
                    </option>
                    {YEAR.map((ele, index) => {
                      return (
                        <option className="mx-4" value={ele} key={index}>
                          {ele}
                        </option>
                      );
                    })}
                  </select>
            {validyearError && (
                  <div>
                <small style={{ color: "red" }}>{validyearError}</small>
            </div>
            )}
                </div>
              </div>

              <div>
                <div>
                  <label
                    htmlFor=""
                    className="text-secondary  mt-2 m-0"
                    style={{ fontSize: "0.8rem" }}
                  >
                    CVV <sup>*</sup>
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    type="number"
                    onChange={handlecvvchnage}
                    className="m-0"
                    style={{ width: "3rem", height: "1.5rem" }}
                  />
                </div>
           
              </div>
              <div className="paybuttondiv">
                <button className="btn btn-dark btn-sm ">
                  Pay ${total}
                </button>
              </div>
            </div>
            <div className='d-flex justify-content-center ms-5'> {validcvvError && (
                 <div>
                <small style={{ color: "red" }}>{validcvvError}</small>
            </div>
            )}</div>
          </div>
        </div>
        
  )
}

export default Paymethode
