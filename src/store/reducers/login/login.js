const initialState = {
    isEmployeeLoggedIn: false
};

const login = (state = initialState, action) => {
    var requestedDispatch = action.type;

    switch (true) {
        case /LOGIN/.test(requestedDispatch):
            return {
                ...state,
                isEmployeeLoggedIn: true
            };
        case /LOGOUT/.test(requestedDispatch):
            return {
                ...state,
                isEmployeeLoggedIn: false
            };
        default:
    }

    return state;
};

export default login;