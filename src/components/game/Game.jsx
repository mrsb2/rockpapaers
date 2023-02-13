import React from 'react';
import './game.css';
import Logo from '../../assets/images/logo.svg';
import ScissorsImg from '../../assets/images/icon-scissors.svg';
import PaperImg from '../../assets/images/icon-paper.svg';
import RockImg from '../../assets/images/icon-rock.svg';
import RulesDefault from '../../assets/images/image-rules.svg';
import Close from '../../assets/images/icon-close.svg';


const Game = () => {

    //#region Panel/Animation/Buttons
    const ClosePanel = [
        {transform: 'scale(1)'},
        {opacity: '1'},
        {transform: 'scale(0)'},
        {display: 'none'}

    ];
    const newspaperTiming = {
        duration: 400,
        iterations: 1,
        
    }
    const RulesPanel = () =>
    {
        document.getElementById('rulesPanelInGame').style.display='flex';
        console.log('openRules');
    }
    const CloseRules = () =>
    {
        document.getElementById('rulesPanelInGame').style.display='none';
    }
    const CloseRulesAnimation = () =>
    {
        document.getElementById('rulesPanelInsideInGame').animate(ClosePanel,newspaperTiming);
        setTimeout(CloseRules,200);
        console.log('closeRules');
    }
    const Menu = () =>
    {
        document.getElementById('gameNormal').style.display='none';
        document.getElementById('gameSelector').style.display='flex';
    }
    //#endregion
  
  
  
    const Scissors = () => {
        document.getElementById('gameElementRow').style.display='none';
        document.getElementById('fightDivId').style.display='flex';
    }

    const Paper = () => {
        document.getElementById('gameElementRow').style.display='none';
        document.getElementById('fightDivId').style.display='flex';
    }
    const Rock = () => {
        document.getElementById('gameElementRow').style.display='none';
        document.getElementById('fightDivId').style.display='flex';
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    return (
    <div className='gameContainer'>
        <div className='gameBg'>
            <div className='scoreTableContainer'>
                <div className='scoreTable'>
                    <div className='gameName'>
                        <img className='logoDefault' src={Logo} alt='logo'></img>
                        

                    </div>
                    <div className='score'>
                        <div className='scoreRow'>
                            <p>SCORE</p>
                            <h1 className='scorePoints'>12</h1>
                        </div>
                    </div>
                </div>
            </div>





            <div className='gameElementsCol'>
                <div id='gameElementRow' className='gameElementsRow'>
                    <div className='gridGame'>
                        <div id='gameContainer' className='scissors' onClick={Scissors}>
                            <img src={ScissorsImg} className='scissorsImg' alt='scissors'></img>

                        </div>
                        <div id='gameContainer' className='paper' onClick={Paper}>
                            <img src={PaperImg} className='paperImg' alt='paper'></img>
                        
                        </div>
                        <div id='gameContainer' className='rock'>
                            <img src={RockImg} className='rockImg' alt='rock' onClick={Rock}></img>
                        
                        </div>
                    </div>
                    

                </div>
            <div id='fightDivId' className='fightDiv'>
                    <div className='playerDiv'>
                        <p>YOU PICKED</p>
                        <div className='coinHolder'>

                        </div>
                    </div>
                    <div className='computerDiv'>
                        <p>THE HOUSE PICKED</p>
                        <div className='coinHolder'>
                            
                        </div>
                    </div>

                </div>
                




            </div>
 




            <div id='rulesPanelInGame' className='rulesPanelCol'>
                <div className='rulesPanelRow'>
                    <div id='rulesPanelInsideInGame' className='rulesPanel'>
                        <div className='rulesAndClose'>
                            <h1>RULES</h1>
                            <div id='close' className='close' onClick={CloseRulesAnimation}>
                                <img src={Close} alt='Close'></img>
                            </div>
                        </div>
                        <img src={RulesDefault} alt='Rules'></img>
                    </div>
                </div>
            </div>






            <div className='inGameBtn'>
                <div className='menu'>
                    <div className='containerMenuText' onClick={Menu}>
                            <p>MENU</p>
                    </div>
                </div>
                <div className='rulesText'>
                    <div className='containerRulesText' onClick={RulesPanel}>
                        <p>RULES</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
     
  )
}

export default Game