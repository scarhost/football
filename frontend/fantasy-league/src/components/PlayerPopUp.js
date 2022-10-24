const PlayerPopUp = ({player,handleClose}) => {
    return (
        <div className="popup-box">
            <div className="box">
            <span className="close-icon" onClick={handleClose}>ⅹ</span>
            <h3>{player.first_name} {player.second_name}</h3>
            <p>Price: {player.now_cost/10}</p>
            <p>Goals Scored: {player.goals_scored}</p>
            <p>Assists: {player.assists}</p>
            <p>Yellow Cards: {player.yellow_cards}</p>
            <p>Red Cards: {player.red_cards}</p>
            </div>
        
        </div>
    )
}

export default PlayerPopUp;