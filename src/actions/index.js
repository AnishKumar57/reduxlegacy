// Here I have used three actions which is being called in the reducer function

export const increment =()=>{
    return {
        type: 'INCREMENT'
    }
}

export const decrement =()=>{
    return {
        type: 'DECREMENT'
    }
}

export const signin =()=>{
    return {
        type: 'SIGN_IN'
    }
}
