import './champions.css';

function Champion({ param }) {
    return (
        <div className="ChampionCard">
            <div className="ChampionImage">
            <img src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${param.image.full}`}></img> {/*image of the respective champion*/}
            </div>
            <div className="ChampionDetails">
                <h2>{param.name}</h2> {/*header with champion name*/}
                <h3 className='ChampionTitle'>{param.title}</h3> {/*header with champion title*/}
                <p>{param.tags.join(", ")}</p> {/*paragraph with tags separated by comas (" , ")*/}
            </div>
        </div>
    );
}

export default Champion;





