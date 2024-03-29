import React from 'react'
import { useTeamDataProps } from './hooks'

export const TeamData = () => {
    const {teamName, handleChange, handleSubtract, basketCount, handleAdd} = useTeamDataProps()
    return (
        <div className="team-data">
            <label style={{fontSize: '20px'}}>
                <input style={{padding: '8px', fontSize: '16px'}} type="text" value={teamName} onChange={handleChange} />
            </label>
            <div style={{paddingTop: 4}}>
                <button style={{padding: 8, fontSize: '24px'}} onClick={handleSubtract}>-</button>
                <span style={{padding: 8, backgroundColor: 'white', fontSize: '24px'}}>{basketCount}</span>
                <button style={{padding: 8,fontSize: '24px'}} onClick={handleAdd}>+</button>
            </div>
            {/* <div style={{paddingTop: 4}}>
                <img src="../../assets/images/wicker-basket.png" alt="Basket" />
            </div> */}
        </div>
    )
}

export default TeamData