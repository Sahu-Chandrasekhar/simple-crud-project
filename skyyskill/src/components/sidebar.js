import React, { useState } from 'react';
import './sidebar.css'
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';


let data = [
    {
        icon: <HomeWorkIcon />,
        con: 'Segment',
        id: 1,
        Path: '/'

    },
    {
        icon: <ManageAccountsIcon />,
        con: 'Subject',
        id: 2,
        Path: "/Subject"
    },
    {
        icon: <CircleNotificationsIcon />,
        con: 'Master-Data',
        id: 3,
        Path: '/Master-Data'
    },
    {
        icon: <AddIcCallIcon />,
        con: 'User-Data',
        id: 4,
        Path: '/User-Data'
    }
]

const Sidebar = () => {
    const [active, setActive] = useState(null);

    return (
        <div className='sidebar'>
            <h1 className="logo">AlphaCLG</h1>
            <ul>
                {data.map((e) => (
                    <a href={e.Path} key={e.id}>
                        <li className={`${active === e && 'active'}`} onClick={() => setActive(e)}>{e.icon}{e.con}
                        </li>
                    </a>

                ))}

            </ul>
        </div>
    )
}

export default Sidebar;
