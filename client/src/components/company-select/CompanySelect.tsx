import React, { useState } from 'react';
import Select from 'react-select';

// List of ticker symbols for dropdown
const tickers = [
  'AAPL', //Apple Inc.
  'GOOGL', //Alphabet Inc.
  'MSFT', //Microsoft Corporation
  'AMZN', //Amazon.com Inc.
  'FB', //Facebook Inc.
  // add as many ticker symbols as you need
].map(ticker => ({ label: ticker, value: ticker }));

function CompanySelect({ onCompanyChange }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = option => {
    setSelectedOption(option);
    onCompanyChange(option); // pass to parent
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
      options={tickers}
      theme={darkTheme}
      styles={customStyles}
      placeholder={"Company"}
    />
  );
}

export default CompanySelect;