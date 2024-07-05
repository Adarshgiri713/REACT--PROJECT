import React, { useState } from "react";
import { Box, InputBase, Button, styled } from "@mui/material";
import { getWeather } from "../services/api";

const Container = styled(Box)({
  background: "#445A6F",
  padding: 10,
  "@media (max-width: 600px)": {
    padding: 5,
  },
});

const Input = styled(InputBase)({
  color: "#FFF",
  marginRight: 20,
  fontSize: 18,
  "@media (max-width: 600px)": {
    marginRight: 10,
    fontSize: 16,
  },
});

const GetButton = styled(Button)({
  background: "#e67e22",
  "@media (max-width: 600px)": {
    fontSize: 14,
  },
});

const Form = ({ setResult }) => {
  const [data, setData] = useState({ city: "", country: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getWeatherInfo = async () => {
    let response = await getWeather(data.city, data.country);
    setResult(response);
  };

  return (
    <Container>
      <Input placeholder="City" onChange={(e) => handleChange(e)} name="city" />
      <Input
        placeholder="Country"
        onChange={(e) => handleChange(e)}
        name="country"
      />
      <GetButton variant="contained" onClick={() => getWeatherInfo()}>
        Get Weather
      </GetButton>
    </Container>
  );
};

export default Form;
