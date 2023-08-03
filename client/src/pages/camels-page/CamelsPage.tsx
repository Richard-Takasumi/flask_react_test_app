import React, {useState} from 'react'
import './CamelsPage.scss'
import SearchBar from '../../components/company-searchbar/CompanySearchbar'
import { Link, Route, Routes} from 'react-router-dom';
import { Overview } from '../../components/camels-components/overview/Overview';
import { Capitalization } from '../../components/camels-components/capitalization/Capitalization';
export const CamelsPage = () => {
    const [selectedCompany, setSelectedCompany] = useState<string | null>(null);


    return (
        <div className='camels-page-container'>
            <SearchBar setSelectedCompany={setSelectedCompany}/>
            <div className='camels-company-container'>
                <li><Link to={`/overview`}>Overview</Link></li>
                <li><Link to={`/capitalization`}>Capitalization</Link></li>
            </div>
            <div className='camels-info-container'>
                <Routes>
                    <Route path={`/overview`} element={<Overview/>}/>
                    <Route path={`/capitalization`} element={<Capitalization/>}/>
                       
                </Routes>
            </div>
        </div>
    )
}