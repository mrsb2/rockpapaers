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

    ]
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
        score=0;
        document.getElementById('gameNormal').style.display='none';
        document.getElementById('fightDivId').style.display='none';
        document.getElementById('scissorsSelected').style.display='none';
        document.getElementById('paperSelected').style.display='none';
        document.getElementById('rockSelected').style.display='none';
        document.getElementById('rockSelectedPc').style.display='none';
        document.getElementById('paperSelectedPc').style.display='none';
        document.getElementById('scissorsSelectedPc').style.display='none';
        document.getElementById('effectWinPlayer').style.animation= 'none';
        document.getElementById('effectWinComputer').style.animation= 'none';
        document.getElementById('gameElementRow').style.display='flex';
        document.getElementById('gameSelector').style.display='flex';
        
    }
    //#endregion
    
    
    
    //#region Game Math
    
    let playerOption;
    let rock=0;
    let paper=1;
    let scissors=2;
    let CompOption;
    let score=0;
    
    

    function PlayAgainFn()
    {
        console.log('play');
        playerOption=null;
        CompOption=null;
        document.getElementById('gameElementRow').style.display='flex';
        document.getElementById('fightDivId').style.display='none';
        document.getElementById('scissorsSelected').style.display='none';
        document.getElementById('paperSelected').style.display='none';
        document.getElementById('rockSelected').style.display='none';
        document.getElementById('rockSelectedPc').style.display='none';
        document.getElementById('paperSelectedPc').style.display='none';
        document.getElementById('scissorsSelectedPc').style.display='none';
        document.getElementById('effectWinPlayer').style.animation= 'none';
        document.getElementById('effectWinComputer').style.animation= 'none';
        
    }

    const Scissors = () => {
        document.getElementById('gameElementRow').style.display='none';
        document.getElementById('fightDivId').style.display='flex';
        document.getElementById('scissorsSelected').style.display='flex';
        playerOption=scissors;
        setTimeout(ComputerTurn,200);
    }

    const Paper = () => {
        document.getElementById('gameElementRow').style.display='none';
        document.getElementById('fightDivId').style.display='flex';
        document.getElementById('paperSelected').style.display='flex';
        playerOption=paper;
        setTimeout(ComputerTurn,200);
    }
    const Rock = () => {
        document.getElementById('gameElementRow').style.display='none';
        document.getElementById('fightDivId').style.display='flex';
        document.getElementById('rockSelected').style.display='flex';
        playerOption=rock;
        setTimeout(ComputerTurn,200);
        
    }

    const ComputerTurn = () =>{
        
        CompOption = getRandomInt(3);
        if(CompOption===0)
        {
            document.getElementById('rockSelectedPc').style.display='flex';
        }
        else if (CompOption===1)
        {
            document.getElementById('paperSelectedPc').style.display='flex';
        }
        else if (CompOption===2)
        {
            document.getElementById('scissorsSelectedPc').style.display='flex';
        }
        console.log(playerOption+' '+ CompOption);
        TheWinner();
    }


    

    function TheWinner(){
        let diff = (playerOption-CompOption+3)%3;
        
        if(diff===0){
            console.log('tie');
            document.getElementById('resultGameText').innerText='TIE';
           
        }
        else if(diff===1){
            document.getElementById('resultGameText').innerText='YOU WIN';
            score=score+1;
            console.log(score);
            document.getElementById('scoreCount').innerText= score ;
            console.log('you win');
            document.getElementById('effectWinPlayer').style.animation= 'ripple 0.5s linear infinite';

        }
        else{
            
            document.getElementById('resultGameText').innerText='YOU LOSE';
            score=score-1;
            console.log(score);
            document.getElementById('scoreCount').innerText= score ;
            console.log('computer wins');
            document.getElementById('effectWinComputer').style.animation= 'ripple 0.5s linear infinite';
        }

    }
  
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
  
  
  
  //#endregion
  
  
  
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
                            <h1 id='scoreCount' className='scorePoints'>12</h1>
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
                        <div id='gameContainer' className='rock' onClick={Rock}>
                            <img src={RockImg} className='rockImg' alt='rock' ></img>
                        
                        </div>
                    </div>
                    

                </div>







            <div id='fightDivId' className='fightDiv'>
                <div className='fightDivRow'>
                    <div className='playerDiv'>
                        <p>YOU PICKED</p>
                        <div id='coinHoldPlayer' className='coinHolder'>
                            <div id='effectWinPlayer' className='effectWinDiv'>
                                
                            </div>
                            
                            <div className='gameContainerSelected' id='scissorsSelected'>
                                <img src={ScissorsImg} className='scissorsImg' alt='scissors'></img>

                            </div>
                            <div className='gameContainerSelected' id='paperSelected'>
                                <img src={PaperImg} className='paperImg' alt='paper'></img>
                            
                            </div>
                            <div className='gameContainerSelected' id='rockSelected'>
                                <img src={RockImg} className='rockImg' alt='rock'></img>
                            
                            </div>
                        </div>
                    </div>

                    <div className='computerDiv'>
                        <p>THE HOUSE PICKED</p>
                        <div id='coinHoldComputer' className='coinHolder'>
                            <div id='effectWinComputer'  className='effectWinDiv'></div>
                            <div className='gameContainerSelected' id='scissorsSelectedPc'>
                                <img src={ScissorsImg} className='scissorsImg' alt='scissors'></img>

                            </div>
                            <div className='gameContainerSelected' id='paperSelectedPc' >
                                <img src={PaperImg} className='paperImg' alt='paper'></img>
                            
                            </div>
                            <div className='gameContainerSelected' id='rockSelectedPc'>
                                <img src={RockImg} className='rockImg' alt='rock'></img>
                            
                            </div>
                        </div>
                    </div>
                </div>


                    <div className='resultGame'>
                        <p id='resultGameText'></p>
                        <div className='playAgainBtn' onClick={PlayAgainFn}>
                        <p>PLAY AGAIN</p>
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