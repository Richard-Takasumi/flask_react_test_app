import React from 'react'
import './DashboardPage.scss'
import Line  from "../../components/line-graph/LineGraph"

export const DashboardPage = () => {
    return (
        <div>
            <div>
                <Line />
            </div>
            <h1 className='test'>DashboardPage</h1>
        </div>
    )
}