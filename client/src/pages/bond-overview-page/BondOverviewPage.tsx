import React, { useState } from 'react';

import './BondOverviewPage.scss'
import CountrySelect from '../../components/country-select/CountrySelect'
import CompanySelect from '../../components/company-select/CompanySelect'
import BondTable from '../../components/bond-table/BondTable';
import Button from '../../components/button/Button';
type DataRow = {
    id: number;
    name: string;
    ticker: string;
    cpn: string;
    maturity: string;
    spread: string;
    ytm: string;
    moodysRating: string;
    crMigPred: string;
    crMigCL: string;
    crSpreadPred: string;
    crSpreadSL: string;
  };

export const BondOverviewPage = () => {
    const [selectedCountry, setSelectedCountry] = useState<{label: string, value: string}|null>(null);
    const [selectedCompany, setSelectedCompany] = useState<{label: string, value: string}|null>(null);  
    const [selectedRow, setSelectedRow] = useState<DataRow | null>(null);
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
          id: 1,
          name: "MS1 INVF Global Convertible Bond Fund",
          ticker: "LU12345678",
          cpn: "4.15",
          maturity: "30/10/2025",
          spread: "6.31",
          ytm: "8.960%",
          moodysRating: "Ba",
          crMigPred: "B",
          crMigCL: "52%",
          crSpreadPred: "4.2 (+6%)",
          crSpreadSL: "88%",
        },
        {
          id: 2,
          name: "MS2 INVF Global Convertible Bond Fund",
          ticker: "LU12345678",
          cpn: "4.15",
          maturity: "30/10/2025",
          spread: "6.31",
          ytm: "8.960%",
          moodysRating: "Ba",
          crMigPred: "B",
          crMigCL: "52%",
          crSpreadPred: "4.2 (+6%)",
          crSpreadSL: "88%",
        },
        {
          id: 3,
          name: "MS3 INVF Global Convertible Bond Fund",
          ticker: "LU12345678",
          cpn: "4.15",
          maturity: "30/10/2025",
          spread: "6.31",
          ytm: "8.960%",
          moodysRating: "Ba",
          crMigPred: "B",
          crMigCL: "52%",
          crSpreadPred: "4.2 (+6%)",
          crSpreadSL: "88%",
        },

      ];

    const handleRowSelected = (selectionModel) => {
    if (selectionModel.length > 0) {
        const selectedId = selectionModel[0];  // Get the first selected id
        const selectedRowData = data.find((row) => row.id === selectedId);
        if (selectedRowData) {
        setSelectedRow(selectedRowData);
        console.log('Selected row: ', selectedRowData);
        } else {
        setSelectedRow(null);
        }
    } else {
        setSelectedRow(null);
    }
    };

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
            <div className='bond-table-container'>
                <BondTable data={data} onRowSelected={handleRowSelected} />
            </div>
            <div className='bond-selected-container'>
                <div className='bond-selected-item'>
                    {selectedRow && (<>
                        <div className='bond-selected-title'>
                            <div className='bond-selected-title-text'>
                                <p className='bond-selected-name'>{selectedRow.name}</p>
                                <p className='bond-selected-ticker'>{selectedRow.ticker}</p>
                            </div>
                            <div className='bond-selected-title-watchlist-button'>
                                <Button text={"Watchlist +"}/>
                            </div>
                        </div>
                        <div className='bond-selected-predictions'>
                            <div className='bond-selected-credit-migration'>
                                <h2> Probability of Credit Migration </h2>
                                <div className='bond-selected-credit-migration-stats'>
                                    <p className='bond-selected-credit-percentage'>{selectedRow.crMigCL}</p>
                                    <p className='bond-selected-credit-moodysRating'>{selectedRow.moodysRating}</p>
                                    <p className='bond-selected-credit-crMigPred'>{selectedRow.crMigPred}</p>
                                </div>
                            </div>
                            <div className='bond-selected-credit-spread'>
                                <h2>Credit Spread Prediction</h2>
                                <div className='bond-selected-credit-spread-stats'>
                                    <p className='bond-selected-credit-percentage'>{selectedRow.crSpreadSL}</p>
                                    <p className='bond-selected-credit-crSpreadPred'>{selectedRow.crSpreadPred}</p>
                                </div>
                            </div>
                        </div>
                    </>)}
                </div>
            </div>
            {selectedCountry && (<h2>Selected Country: {selectedCountry.label}</h2>)}
            {selectedCompany && (<h2>Selected Company: {selectedCompany.label}</h2>)}
        </div>
    )
}