import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { withTranslation } from 'react-i18next';
import Haha from './Haha';
import Loader from 'react-loader-spinner';
import RangeSlider from 'react-dual-rangeslider';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

const apiEndpoint = "https://firstfullstack-xin-du.herokuapp.com/customers";
const App = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);

  const sendHttpRequest = (method, url, data) => {
    return fetch(url).then(response => {
      return response.json();
    })
  };

  const handlePost = async () => {
    const { data: post } = await axios.post(apiEndpoint, { email: email, name: name, active: active });
    console.log(post);
  };

  const handleGet = async () => {
    // sendHttpRequest('GET', apiEndpoint).then(responseData => {
    //   console.log(responseData);
    // });
    const { data: posts } = await axios.get(apiEndpoint);
    console.log(posts);
  };


  return (
    <React.Fragment>
      <button className="btn btn-primary" onClick={handlePost}>POST</button>
      <br />
      Email
      <input onChange={(event) => { setEmail(event.target.value) }} value={email} className="form-control d-inline-block" style={{ width: "42%" }} />
      Name
      <input onChange={(event) => { setName(event.target.value) }} value={name} className="form-control d-inline-block" style={{ width: "42%" }} />
      Active
      <input type="checkbox" onChange={() => { setActive(!active) }} value={active} />
      <br />
      <button className="btn btn-primary">PUT</button>

      <br />
      <button className="btn btn-primary">DELETE</button>

      <br />
      <button className="btn btn-primary" onClick={handleGet}>GET</button>
      <br />
    </React.Fragment>
  );

}

export default withTranslation()(App);
