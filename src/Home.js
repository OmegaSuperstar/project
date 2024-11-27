import lolLogo from './lolLogo.png';
import './home.css';



function Home(){
    return(
        <div className='HomeContainer'>
            <h2>Welcome to the</h2>
            <a href="https://www.leagueoflegends.com/en-us/" target="_blank"> {/* Opens the league of legends site in a new tab when clicked*/}
                <img id="LolLogoImg" src={lolLogo} alt="League of Legends Logo"></img>
            </a>
            <h2>Champion library</h2> 
        </div>
    )
}

export default Home
