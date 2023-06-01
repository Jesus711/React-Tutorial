import { useState } from "react";
import { ScoreBoard } from "./ScoreBoard";

export function Score() {
    const [goal, setGoal] = useState(0);
    const [score, setScore] = useState(0);


    const newScore = (event) => {
        setScore(score + 1);
        setGoal(goal + 1);
    }

    return (
        <div>
            <h2>Score: {score}</h2>
            <h2>Goal: {goal}</h2>
            <ScoreBoard newScore={newScore} goal={goal} score={score}/>
        </div>
    )
}