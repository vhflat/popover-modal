export default function modalReducer(state = [], {
    type,
    payload
}) {
    switch (type) {
        case 'open':
            return state.includes(payload) ? state : [...state, payload]
        case 'close':
            return state.filter(modalName => modalName !== payload)
        default:
            return state;
    }
}
