import React from 'react';
import './Up&BottomMenu.css';
import UpMenu from '../components/SMenuBar';
import WaitAnswer from '../components/CMainWaitAnswer';
import BottomMenu from '../components/BottomMenuBar';
import { withRouter } from 'react-router-dom';

class WaitAns extends React.Component{
    render(){
        return(
            <div className='main-containerBlack'>
                <div className='main-container'>
                    <UpMenu />

                    <WaitAnswer />
                </div>
                <BottomMenu />
            </div>
        )
    }

}
export default withRouter(WaitAns);