import React, { useState } from 'react';
import Select from 'react-select';

// List of OECD countries for dropdown
const countries = [
  'Australia',
  'Austria',
  'Belgium',
  'Canada',
  'Chile',
  'Colombia',
  'Czech Republic',
  'Denmark',
  'Estonia',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Hungary',
  'Iceland',
  'Ireland',
  'Israel',
  'Italy',
  'Japan',
  'Korea',
  'Latvia',
  'Lithuania',
  'Luxembourg',
  'Mexico',
  'Netherlands',
  'New Zealand',
  'Norway',
  'Poland',
  'Portugal',
  'Slovak Republic',
  'Slovenia',
  'Spain',
  'Sweden',
  'Switzerland',
  'Turkey',
  'United Kingdom',
  'United States',
].map(country => ({ label: country, value: country }));


function CountrySelect({ onCountryChange }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = option => {
    setSelectedOption(option);
    onCountryChange(option); // pass to parent
    // Do something with the selected option
    console.log(`Option selected:`, option);
  };

  const darkTheme = theme => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '#171c23',
      primary: '#101318',
      neutral0: '#3B4758',
      neutral80: '#EEF0F4',
    },
  });

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: '0px',
      boxShadow: 'none',
    }),
    option: (styles) => {
        return {...styles, color: '#EEF0F4'};
    }
  }
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={countries}
      theme={darkTheme}
      styles={customStyles}
      placeholder={"Country"}
    />

   
  );
}

export default CountrySelect;