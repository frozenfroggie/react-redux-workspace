import { SAMPLE_ACTION } from '../constants/actionTypes';

export function sampleAction(input) {
    return {
        type: SAMPLE_ACTION,
        payload: input
    };
}
