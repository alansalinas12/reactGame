import * as React from "react";

export interface Props {
    score: number;
    multiplyer: number;
}

function Score({ score, multiplyer = 1 }: Props) {
    return (
        <div className="score">
            <div className="scoreCounter">
                Score: {score}  Current Multiplyer: X {getMultiplyer(multiplyer)}
            </div>
        </div>
    );
}

function getMultiplyer(numChars: number) {
    return Array(numChars + 1);
}

export default Score;