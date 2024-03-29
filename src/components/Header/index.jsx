import React from 'react'
import { TeamData } from './TeamData'
export const Header = () => {
    return (
        <div className="header">
            {/* TEAM 1 */}
            <TeamData />
            <h1 className="title">Engineering Egg Hunt</h1>
            {/* TEAM 2 */}
            <TeamData />
        </div>
    )
}

export default Header