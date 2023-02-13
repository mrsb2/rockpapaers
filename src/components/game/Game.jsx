import React from 'react';
import './game.css';
import Logo from '../../assets/images/logo.svg';
import LogoBonus from '../../assets/images/logo-bonus.svg';
import GameDefault from '../../assets/images/bg-triangle.svg';
import Scissors from '../../assets/images/icon-scissors.svg';
import Paper from '../../assets/images/icon-paper.svg';
import Rock from '../../assets/images/icon-rock.svg';
import RulesDefault from '../../assets/images/image-rules.svg';
import Close from '../../assets/images/icon-close.svg';


const Game = () => {


    
  return (
    <div className='gameContainer'>
        <div className='gameBg'>
            <div className='scoreTableContainer'>
                <div className='scoreTable'>
                    <div className='gameName'>
                        <img className='logoDefault' src={Logo}></img>
                        <img className='logoBonus' src={LogoBonus}></img>

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
                <div className='gameElementsRow'>
                    <div className='gridGame'>
                        <div id='gameContainer' className='scissors'>
                            <img src={Scissors} className='scissorsImg'></img>

                        </div>
                        <div id='gameContainer' className='paper'>
                            <img src={Paper} className='paperImg'></img>
                        
                        </div>
                        <div id='gameContainer' className='rock'>
                            <img src={Rock} className='rockImg'></img>
                        
                        </div>
                    </div>

                </div>
                




            </div>
            <div className='rulesPanelCol'>
            <div className='rulesPanelRow'>
                <div className='rulesPanel'>
                    <div className='rulesAndClose'>
                    <h1>RULES</h1>
                    <img src={Close}></img>
                    </div>
                    <img src={RulesDefault}></img>
                </div>
            </div>

        </div>
            <div className='rulesText'>
                <div className='containerRulesText'>
                    <p>RULES</p>
                </div>
            </div>
        </div>

        
      
    </div>
  )
}

export default Game