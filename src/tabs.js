import React, {useState} from 'react';
import Robotlist from './pages/robotlistComponent';
import Caselist from './pages/caselist';


export default function Tabs() {
    const [activeTabIndex, setActiveTabIndex] = useState(0); // 初始化为第一个选项卡
    const handleClick = (index) => {
        setActiveTabIndex(index);
    }
    return(
        <div className='robotArea'>
            <div className='leftarea'>
                <p className={activeTabIndex ===0 ? 'h1 h1active':'h1'} onClick={() => handleClick(0)}>机器人管理</p>
                <p className={activeTabIndex ===1 ? 'h1 h1active':'h1'} onClick={() => handleClick(1)}>工作台对接页面</p>
            </div>
            {activeTabIndex === 0 &&
            <div className='rightarea' >
                <Robotlist />
            </div>
            }
            {activeTabIndex === 1 &&
            <div className='rightarea'>
                <Caselist/>
            </div>
            }
        </div>
    )
    
}

 