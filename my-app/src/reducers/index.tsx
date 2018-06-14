import * as action from "../actions";
import { StoreState } from "../types/index";
import * as constant from "../constants/index";
import { FlipCard } from "../actions";
import { INCREMENT_POINTS } from "../constants/index";

export function score(state: StoreState, action: FlipCard): StoreState {
    switch (action.type) {
        case INCREMENT_POINTS:
            return { ...state, score: state.score + (multiplyer) }
    }
}