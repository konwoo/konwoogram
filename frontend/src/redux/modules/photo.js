// import

import { actionCreators as userAction } from 'redux/modules/user';

// actions

const SET_FEED = "SET_FEED"

// action creators

function setFeed(feed) {
    return {
        type: SET_FEED,
        feed
    }
}

// api actions

function getFeed() {
    return (dispatch, getState) => {
        const { user: { token } } = getState();
        fetch("/images/", {
            // method: "POST",
            headers: {
                "Authorization": `JWT ${token}`
            }
        })
        .then(response => {
            if (response.status === 401) {
                dispatch(userAction.logout());
            }
            return response.json()
        })
        .then(json => {
            dispatch(setFeed(json))
        })
        .catch(err => console.log(err))
    }
}

// initial this.state.

const initialState = {};

// reducer

function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_FEED:
            return applySetFeed(state, action)
        default:
            return state;
    }
}

// reducer fuctions

function applySetFeed(state, action) {
    const { feed } = action;
    return {
        ...state,
        feed
    }
}

// export

const actionCreators = {
    getFeed
}

export { actionCreators };

// default reducer export

export default reducer;