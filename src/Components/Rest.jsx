import axios from "axios";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import RestList from "./RestList";

const Title = styled.h1`
  padding: 50px 0 0 0;
  text-align: center;
`;

const Rest = () => {
  const [data, setData] = useState([]);

  const location = useLocation();
  const token = location.state.token;

  useEffect(()=>{
    const apiURL = "https://staging.fastor.in/v1/m/restaurant?city_id=118&&";

    axios.get(apiURL, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[])  

  return (
    <div>
      <Title>Restaurants Near You</Title>
      {data.map(data =>(
        <RestList key={data.restaurant_id} data={data} />
      ))}
    </div>
  )
}

export default Rest