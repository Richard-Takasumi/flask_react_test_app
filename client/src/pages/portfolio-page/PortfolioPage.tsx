import React from 'react'
import './PortfolioPage.scss'
import BondTable from '../../components/bond-table/BondTable'
import MyLineChart from '../../components/line-chart/LineChart';


const topHoldings = [
    {
      id: 1,
      name: "MS1 INVF Global Convertible Bond Fund",
      ticker: "LU12345678",
      cpn: "4.15",
      maturity: "30/10/2025",
      spread: "6.31",
      ytm: "8.960%",
      moodysRating: "Aaa",
      crMigPred: "Aa1",
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
      moodysRating: "Ba1",
      crMigPred: "Ba2",
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
      moodysRating: "Caa1",
      crMigPred: "B2",
      crMigCL: "52%",
      crSpreadPred: "4.2 (+6%)",
      crSpreadSL: "88%",
    },
    {
      id: 4,
      name: "MS4 INVF Global Convertible Bond Fund",
      ticker: "LU12345678",
      cpn: "4.15",
      maturity: "30/10/2025",
      spread: "6.31",
      ytm: "8.960%",
      moodysRating: "Caa1",
      crMigPred: "Caa1",
      crMigCL: "52%",
      crSpreadPred: "4.2 (+6%)",
      crSpreadSL: "88%",
    },
    {
      id: 5,
      name: "CREDIT SUISSE (LUX) GLOBAL CONVERTIBLE BOND FUND",
      ticker: "LU12345678",
      cpn: "4.15",
      maturity: "30/10/2025",
      spread: "6.31",
      ytm: "8.960%",
      moodysRating: "Aaa",
      crMigPred: "Caa2",
      crMigCL: "80%",
      crSpreadPred: "4.2 (+6%)",
      crSpreadSL: "88%",
    },
]

const topDownwardMigration = [{
    id: 6,
    name: "CREDIT SUISSE (LUX) GLOBAL CONVERTIBLE BOND FUND",
    ticker: "LU12345678",
    cpn: "4.15",
    maturity: "30/10/2025",
    spread: "6.31",
    ytm: "8.960%",
    moodysRating: "Aaa",
    crMigPred: "Caa2",
    crMigCL: "80%",
    crSpreadPred: "4.2 (+6%)",
    crSpreadSL: "88%",
  },
  {
    id: 7,
    name: "CREDIT SUISSE (LUX) GLOBAL CONVERTIBLE BOND FUND",
    ticker: "LU12345678",
    cpn: "4.15",
    maturity: "30/10/2025",
    spread: "6.31",
    ytm: "8.960%",
    moodysRating: "Aaa",
    crMigPred: "Caa2",
    crMigCL: "80%",
    crSpreadPred: "4.2 (+6%)",
    crSpreadSL: "88%",
  },
  {
    id: 8,
    name: "CREDIT SUISSE (LUX) GLOBAL CONVERTIBLE BOND FUND",
    ticker: "LU12345678",
    cpn: "4.15",
    maturity: "30/10/2025",
    spread: "6.31",
    ytm: "8.960%",
    moodysRating: "Aaa",
    crMigPred: "Caa2",
    crMigCL: "80%",
    crSpreadPred: "4.2 (+6%)",
    crSpreadSL: "88%",
  },
  {
    id: 9,
    name: "CREDIT SUISSE (LUX) GLOBAL CONVERTIBLE BOND FUND",
    ticker: "LU12345678",
    cpn: "4.15",
    maturity: "30/10/2025",
    spread: "6.31",
    ytm: "8.960%",
    moodysRating: "Aaa",
    crMigPred: "Caa2",
    crMigCL: "80%",
    crSpreadPred: "4.2 (+6%)",
    crSpreadSL: "88%",
  },
  {
    id: 10,
    name: "CREDIT SUISSE (LUX) GLOBAL CONVERTIBLE BOND FUND",
    ticker: "LU12345678",
    cpn: "4.15",
    maturity: "30/10/2025",
    spread: "6.31",
    ytm: "8.960%",
    moodysRating: "Aaa",
    crMigPred: "Caa2",
    crMigCL: "80%",
    crSpreadPred: "4.2 (+6%)",
    crSpreadSL: "88%",
  },

];
const topUpwardMigration = [{
    id: 6,
    name: "NVIDIA GLOBAL CONVERTIBLE BOND FUND",
    ticker: "LU12345678",
    cpn: "4.15",
    maturity: "30/10/2025",
    spread: "6.31",
    ytm: "8.960%",
    moodysRating: "Aaa",
    crMigPred: "Caa2",
    crMigCL: "80%",
    crSpreadPred: "4.2 (+6%)",
    crSpreadSL: "88%",
  },
  {
    id: 7,
    name: "NVIDIA GLOBAL CONVERTIBLE BOND FUND",
    ticker: "LU12345678",
    cpn: "4.15",
    maturity: "30/10/2025",
    spread: "6.31",
    ytm: "8.960%",
    moodysRating: "Aaa",
    crMigPred: "Caa2",
    crMigCL: "80%",
    crSpreadPred: "4.2 (+6%)",
    crSpreadSL: "88%",
  },
  {
    id: 8,
    name: "NVIDIA GLOBAL CONVERTIBLE BOND FUND",
    ticker: "LU12345678",
    cpn: "4.15",
    maturity: "30/10/2025",
    spread: "6.31",
    ytm: "8.960%",
    moodysRating: "Aaa",
    crMigPred: "Caa2",
    crMigCL: "80%",
    crSpreadPred: "4.2 (+6%)",
    crSpreadSL: "88%",
  },
  {
    id: 9,
    name: "NVIDIA GLOBAL CONVERTIBLE BOND FUND",
    ticker: "LU12345678",
    cpn: "4.15",
    maturity: "30/10/2025",
    spread: "6.31",
    ytm: "8.960%",
    moodysRating: "Aaa",
    crMigPred: "Caa2",
    crMigCL: "80%",
    crSpreadPred: "4.2 (+6%)",
    crSpreadSL: "88%",
  },
  {
    id: 10,
    name: "NVIDIA GLOBAL CONVERTIBLE BOND FUND",
    ticker: "LU12345678",
    cpn: "4.15",
    maturity: "30/10/2025",
    spread: "6.31",
    ytm: "8.960%",
    moodysRating: "Aaa",
    crMigPred: "Caa2",
    crMigCL: "80%",
    crSpreadPred: "4.2 (+6%)",
    crSpreadSL: "88%",
  },

];


export const PortfolioPage = () => {
    return (
        <div className='portfolio-page-container'>
            <div className='LHS-container' >
                <h1>Portfolio</h1>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div className='total-assets-container'>
                        <div className='text-container'>
                            <h3>Total Assets - USD</h3>
                            <h1>$ 323,503,235.26</h1>
                            <h4>+6.50% Since last month</h4>
                        </div>
                    </div>
                    <div className='profit-loss-container'>
                        <div className='text-container'>
                            <h3>P/L Trend</h3>
                            <h1>+$ 503,235.26</h1>
                            <h4>Simple Yield +27.50%</h4>
                        </div>
                    </div>
                </div>
                <div className='top-holdings-container'>
                    <div style={{height: "90%"}}>
                        <h2 className='table-title'>Top Holdings</h2>
                        <BondTable data={topHoldings} onRowSelected={() => {}}/>
                    </div>
                </div>

                <div className='high-prob-downward-mig-container'>
                    <div style={{height: "90%"}}>
                        <h2 className='table-title'>High Probability of Downward Migration in Your Holdings</h2>
                        <BondTable data={topDownwardMigration} onRowSelected={() => {}}/>
                    </div>
                </div>

                <div className='high-prob-upward-mig-container'>
                    <div style={{height: "90%"}}>
                        <h2 className='table-title'>High Probability of Upward Migration in Your Holdings</h2>
                        <BondTable data={topUpwardMigration} onRowSelected={() => {}}/>
                    </div>
                </div>
            </div>

            <div className='RHS-container'>
                <div className='yield-trend-graph-container'>
                    <div className='graph-container'>
                        <MyLineChart/>
                    </div>
                </div>
                <div className='what-if-container'>
                    <h1>WHAT-IF Analysis</h1>
                </div>
            </div>


        </div>
    )
}