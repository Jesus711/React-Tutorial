export function ScoreBoard(props, {score, goal}) {

    const resetScore = () => {
        score = 0;
        goal = 0;
    }


    return (
        <div>
            <button onClick={props.newScore}>Add Score</button>
            <button onClick={resetScore} >Reset Score</button>
        </div>
    )
}