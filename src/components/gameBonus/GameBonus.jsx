import React from 'react';
import './gameBonus.css';
import LogoBonus from '../../assets/images/logo-bonus.svg';
import Scissors from '../../assets/images/icon-scissors.svg';
import Paper from '../../assets/images/icon-paper.svg';
import Rock from '../../assets/images/icon-rock.svg';
import Spock from '../../assets/images/icon-spock.svg';
import Lizard from '../../assets/images/icon-lizard.svg';
import Close from '../../assets/images/icon-close.svg';
import RulesBonus from '../../assets/images/image-rules-bonus.svg';



const GameBonus = () => {

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
    const RulesPanelBonus = () =>
    {
        document.getElementById('rulesPanelBonusInGame').style.display='flex';
        console.log('openRules');
    }
    const CloseRulesBonusAnimation = () =>
    {
        document.getElementById('rulesPanelBonusInsideInGame').animate(ClosePanel,newspaperTiming);
        setTimeout(CloseRules,200);
        console.log('closeRules');
    }
    const CloseRules = () =>
    {
        document.getElementById('rulesPanelBonusInGame').style.display='none';
    }
    const Menu = () =>
    {
        document.getElementById('gameBonus').style.display='none';
        document.getElementById('gameSelector').style.display='flex';
    }

    
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
                <div className='gameElementsRowBonus'>
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

            <div id='rulesPanelBonusInGame' className='rulesPanelCol'>
                <div className='rulesPanelRow'>
                    <div id='rulesPanelBonusInsideInGame' className='rulesPanelBonus'>
                        <div className='rulesAndClose'>
                            <h1>RULES</h1>
                            <div id='close' className='close' onClick={CloseRulesBonusAnimation}>
                            <img src={Close} alt='Close'></img>
                            </div>
                        </div>
                        <img src={RulesBonus} alt='Rules'></img>
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
                    <div className='containerRulesText' onClick={RulesPanelBonus}>
                        <p>RULES</p>
                    </div>
                </div>
            </div>
        </div>

        
      
    </div>
  )
}

export default GameBonus