/* eslint-disable import/no-anonymous-default-export */
export default function (state = {}, action) {
    switch (action.type) {
        case "Set_Cords":
            return {
                ...state,
                cords: action.payload,
                path: false,
                cab: false
            };
        case "Set_Start_Point":
            return {
                ...state,
                startPoint: action.payload

            };
        case "Clear_Start_Point":
            return {
                ...state,
                startPoint: action.payload

            };
        case "Set_End_Point":
            return {
                ...state,
                endPoint: action.payload,
                check: true

            };
        case "Set_Route":
            return {
                ...state,
                route: action.payload,
                path: true,
                check: false,
                cab: true
            };
        case "Vlidate_Cab":
            return {
                ...state,
                cabRule: action.payload.rule,
                cabFare: action.payload.fare,
                km: action.payload.km,
                cab: false,
                booking: { post: false }
            };
        case "Clear_State":
            return {
                ...state,
                startPoint: action.payload.startPoint,
                endPoint: action.payload.endPoint,
                booking: action.payload.booking,
                route: action.payload.route,
                path: action.payload.path,
                cab: action.payload.cab

            };
        case "Book_Cab":
            return {
                ...state,
                booking: action.payload
            }
        default:
            return state;
    }
}