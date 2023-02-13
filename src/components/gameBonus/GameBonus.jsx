import React from 'react';
import './gameBonus.css';
import LogoBonus from '../../assets/images/logo-bonus.svg';
import Scissors from '../../assets/images/icon-scissors.svg';
import Paper from '../../assets/images/icon-paper.svg';
import Rock from '../../assets/images/icon-rock.svg';
import Spock from '../../assets/images/icon-spock.svg';
import Lizard from '../../assets/images/icon-lizard.svg';
import RulesDefault from '../../assets/images/image-rules.svg';
import Close from '../../assets/images/icon-close.svg';


const GameBonus = () => {


    
  return (
    <div className='gameContainer'>
        <div className='gameBg'>
            <div className='scoreTableContainer'>
                <div className='scoreTable'>
                    <div className='gameName'>
                        <img className='logoBonus' src={LogoBonus} alt='logoBonus'></img>

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
                    <div className='gridGameBonus'>
                        <div id='gameContainerBonus' className='scissorsBonus'>
                            <img src={Scissors} className='scissorsImg' alt='scissors'></img>

                        </div>
                        <div id='gameContainerBonus' className='paperBonus'>
                            <img src={Paper} className='paperImg' alt='paper'></img>
                        
                        </div>
                        <div id='gameContainerBonus' className='rockBonus'>
                            <img src={Rock} className='rockImg' alt='rock'></img>
                        
                        </div>
                        <div id='gameContainerBonus' className='spock'>
                            <img src={Spock} className='spockImg' alt='spock'></img>

                        </div>
                        <div id='gameContainerBonus' className='lizard'>
                            <img src={Lizard} className='lizardImg' alt='lizard'></img>

                        </div>
                    </div>

                </div>
                




            </div>
            <div className='rulesPanelCol'>
            <div className='rulesPanelRow'>
                <div className='rulesPanel'>
                    <div className='rulesAndClose'>
                    <h1>RULES</h1>
                    <img src={Close} alt='Close'></img>
                    </div>
                    <img src={RulesDefault} alt='Rules'></img>
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

export default GameBonus