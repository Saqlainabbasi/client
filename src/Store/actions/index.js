import axios from 'axios';
export const setCurrentLocation = (data) => {
    return {
        type: 'Set_Cords',
        payload: data
    }
}
export const setStartPoint = (startP) => {
    return {
        type: 'Set_Start_Point',
        payload: startP
    }
}
export const clearStartPoint = () => {
    return {
        type: 'Clear_Start_Point',
        payload: {}
    }
}
export const setEndPoint = (endP) => {
    return {
        type: 'Set_End_Point',
        payload: endP
    }
}
export const setRoute = (myroute) => {
    return {
        type: 'Set_Route',
        payload: myroute
    }
}

export const clearState = () => {
    return {
        type: 'Clear_State',
        payload: {
            path: false,
            cab: false,
            startPoint: '',
            endPoint: '',
            route: null,
            check: false,
            booking: { post: false, message: '' },

        }
    }
}
export const checkCabRule = ({ startPoint, endPoint, route }) => {
    const url = `/api/checkRule?spoint=${JSON.stringify(startPoint)}&epoint=${JSON.stringify(endPoint)}`;
    const request = axios.get(url);
    const totaldistance = route.routes[0].legs[0].distance.text;
    // console.log(totaldistance)
    return (dispatch) => {
        request.then(({ data }) => {
            let rule = data;
            // console.log(rule)
            //getting the cab rate from database....
            if (rule.cab) {
                if (rule.rateType === 'fixed') {
                    axios.get('/api/getRate?type=fixed')
                        .then(({ data }) => {
                            let range = parseInt(data[0].km);
                            let price = parseInt(data[0].price);
                            let newdistance = parseFloat(totaldistance) / range;
                            console.log(newdistance);
                            const totalFare = newdistance * price;
                            const response = {
                                rule: rule,
                                fare: totalFare,
                                km: newdistance
                            }
                            if (totalFare !== null) {
                                dispatch({
                                    type: "Vlidate_Cab",
                                    payload: response
                                })
                            }
                        })
                } else {
                    axios.get('/api/getRate?type=dynamic')
                        .then(({ data }) => {
                            let range = parseInt(data[0].km);
                            let price = parseInt(data[0].price);
                            let newdistance = parseFloat(totaldistance) / range;

                            const totalFare = Math.round(newdistance * price)

                            const response = {
                                rule: rule,
                                fare: totalFare,
                                km: newdistance
                            }
                            dispatch({
                                type: "Vlidate_Cab",
                                payload: response
                            })
                        })
                }
            } else {
                const resp = {
                    rule: rule,
                    fare: null
                }
                dispatch({
                    type: "Vlidate_Cab",
                    payload: resp
                })
            }
        })
            .catch(err => {
                console.log(err)
            })
    }


}
// const fareCalculator = (baseFare, baseDistance, totaldistance) => {
//     alert('working')

//     let newdistance = parseFloat(totaldistance) / baseDistance;
//     const fare = Math.round(newdistance * baseFare)
//     return fare;
// }

export const bookTaxi = (data) => {
    const request = axios.post('/api/bookCab', data)
        .then(response => response.data)
    return {
        type: 'Book_Cab',
        payload: request
    }
}