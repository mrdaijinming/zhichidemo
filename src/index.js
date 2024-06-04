import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Tabs from './tabs';
import NiceModal, { useModal } from '@ebay/nice-modal-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <NiceModal.Provider>
         <div className='areawidely'>
            <div className='topbar'>DEMO应用</div>
            <Tabs/>
            <div className='clear'></div> 
          </div>
          </NiceModal.Provider>
    </StrictMode>
) 
