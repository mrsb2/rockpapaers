import React from 'react';
import './gameSelector.css';
import Logo from '../../assets/images/logo.svg';
import LogoBonus from '../../assets/images/logo-bonus.svg';
import RulesDefault from '../../assets/images/image-rules.svg';
import RulesBonus from '../../assets/images/image-rules-bonus.svg';
import Close from '../../assets/images/icon-close.svg';




const GameSelector = () => {


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
        document.getElementById('rulesPanel').style.display='flex';
        console.log('openRules');
    }
    const CloseRulesBonusAnimation = () =>
    {
        document.getElementById('rulesPanelBonusInside').animate(ClosePanel,newspaperTiming);
        setTimeout(CloseRules,200);
        
        console.log('closeRules');
    }
    const CloseRulesAnimation = () =>
    {
        document.getElementById('rulesPanelInside').animate(ClosePanel,newspaperTiming);
        setTimeout(CloseRules,200);
        console.log('closeRules');
    }
    const CloseRules = () =>
    {
        document.getElementById('rulesPanel').style.display='none';
        document.getElementById('rulesPanelBonus').style.display='none';
    }
    const NormalGame = () =>
    {
        document.getElementById('gameSelector').style.display='none';
        document.getElementById('gameBonus').style.display='none';
        document.getElementById('gameNormal').style.display='flex';

    }
    const BonusGame = () =>
    {
        document.getElementById('gameSelector').style.display='none';
        document.getElementById('gameNormal').style.display='none';
        document.getElementById('gameBonus').style.display='flex';
    }
    const RulesPanelBonus = () =>
    {
        document.getElementById('rulesPanelBonus').style.display='flex';
        console.log('openRules');
    }
    
  return (
    <div className='gameContainer'>
        <div className='gameBg'>
            <div className='selectGame'>
                <div className='selectGameAndRules'>
                    <div className='selectGameBtn' id='selectGameNormal' onClick={NormalGame}>
                        <img src={Logo} alt='logo'></img>
                    </div>
                    <div className='rulesTextSelector'>
                    <div className='containerRulesTextSelector' onClick={RulesPanel}>
                        <p>RULES</p>
                    </div>
                    </div>
                </div>
                <div className='selectGameAndRules'>
                <div className='selectGameBtn' id='selectGameBonus'  onClick={BonusGame}>
                    <img src={LogoBonus} alt='logoBonus'></img>
                </div>
                <div className='rulesTextSelector'>
                <div className='containerRulesTextSelector' onClick={RulesPanelBonus}>
                    <p>RULES</p>
                </div>
                </div>
                </div>
            </div>
            <div id='rulesPanel' className='rulesPanelCol'>
                <div className='rulesPanelRow'>
                    <div id='rulesPanelInside' className='rulesPanel'>
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
            <div id='rulesPanelBonus' className='rulesPanelCol'>
                <div className='rulesPanelRow'>
                    <div id='rulesPanelBonusInside' className='rulesPanelBonus'>
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

        </div>
        
        
     </div>
  )
}

export default GameSelector