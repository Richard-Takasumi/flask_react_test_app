import React, { useState } from 'react';

import './BondOverviewPage.scss'
import CountrySelect from '../../components/country-select/CountrySelect'
import CompanySelect from '../../components/company-select/CompanySelect'
import BondTable from '../../components/bond-table/BondTable';

export const BondOverviewPage = () => {
    const [selectedCountry, setSelectedCountry] = useState<{label: string, value: string}|null>(null);
    const [selectedCompany, setSelectedCompany] = useState<{label: string, value: string}|null>(null);  

    const handleCountryChange = (selectedCountry) => {
        setSelectedCountry(selectedCountry);
        console.log('Selected country: ', selectedCountry);
      };
    
    const handleCompanyChange = (selectedCompany) => {
    setSelectedCompany(selectedCompany);
    console.log('Selected company: ', selectedCompany);
    };

    const data = [
        {
          name: "Company 1",
          ticker: "C1",
          cpn: "Cpn 1",
          maturity: "Maturity 1",
          spread: "Spread 1",
          ytm: "YTM 1",
          moodysRating: "Rating 1",
          crMigPred: "Pred 1",
          crMigCL: "CL 1",
          crSpreadPred: "Spread Pred 1",
          crSpreadSL: "Spread SL 1",
        },
        // More objects for more rows
      ];
      

    return (
        <div className='bond-page-container'>
            <h1>Bonds</h1>
            <div className='bond-filter-container'>
                <div className='bond-filter-item'> 
                    <CountrySelect onCountryChange={handleCountryChange} />
                </div>
                <div className='bond-filter-item'> 
                    <CompanySelect onCompanyChange={handleCompanyChange} />
                </div>
            </div>
            <BondTable data={data} />
            {selectedCountry && (<h2>Selected Country: {selectedCountry.label}</h2>)}
            {selectedCompany && (<h2>Selected Company: {selectedCompany.label}</h2>)}
            <h1 className='test'>BondOverview Page</h1>
        </div>
    )
}