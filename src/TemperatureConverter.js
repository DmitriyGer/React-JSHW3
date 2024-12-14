import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  // Функция для конвертации в Фаренгейт
  const handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value;
    setCelsius(celsiusValue);
    if (!isNaN(celsiusValue) && celsiusValue !== '') {
      setFahrenheit((celsiusValue * 9) / 5 + 32);
    } else {
      setFahrenheit('');
    }
  };

  // Функция для конвертации в Цельсий
  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value;
    setFahrenheit(fahrenheitValue);
    if (!isNaN(fahrenheitValue) && fahrenheitValue !== '') {
      setCelsius(((fahrenheitValue - 32) * 5) / 9);
    } else {
      setCelsius('');
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={6}>
        <TextField
          label="Цельсий (°C)"
          variant="outlined"
          fullWidth
          value={celsius}
          onChange={handleCelsiusChange}
          type="number"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Фаренгейт (°F)"
          variant="outlined"
          fullWidth
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          type="number"
        />
      </Grid>
    </Grid>
  );
};

export default TemperatureConverter;
