import * as constants from "../constants";

export interface FlipCard {
    type: constants.FLIP_CARD;
    id: number;
}

export function flipCard(id: number): FlipCard {
    return {
        type: constants.FLIP_CARD,
        id: id
    }
}

export interface ResetGame {
    type: constants.RESTART_GAME;
}

export function resetGame(): ResetGame {
    return {
        type: constants.RESTART_GAME
    }
}

export interface IncrementPoints {
    type: constants.INCREMENT_POINTS;
}

export function incrementPoints(): IncrementPoints {
    return {
        type: constants.INCREMENT_POINTS
    }
}

export interface IncrementMultiplyer {
    type: constants.INCREMENT_MULTIPLYER;
}

export function incrementMultiplyer(): IncrementMultiplyer {
    return {
        type: constants.INCREMENT_MULTIPLYER
    }
}

export interface ResetMultiplyer {
    type: constants.RESET_MULTIPLYER;
}

export function resetMultiplyer(): ResetMultiplyer {
    return {
        type: constants.RESET_MULTIPLYER
    }
}