import '/src/styles/ScoreBoard.css'

function ScoreBoard({score, highScore}) {
    return (
    <div className="score-container">
        <div className="scoreboard">
            Score: <span id="score">{score}</span>
        </div>
        <div className="highscore">
            High Score: <span id="highscore">{highScore}</span>
        </div>
    </div>
    )
}

export default ScoreBoard