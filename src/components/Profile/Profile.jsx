import React, { useState } from 'react'
import styles from '../../styles/styles'
import ProfileContent from './ProfileContent'
import ProfileSidebar from './ProfileSidebar'

const Profile = () => {
    const [active, setActive] = useState(1)
    return (
        <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
            <div className='w-[335px]'>
                <ProfileSidebar active={active} setActive={setActive} />
            </div>
            <ProfileContent active={active} />

        </div>
    )
}

export default Profile
