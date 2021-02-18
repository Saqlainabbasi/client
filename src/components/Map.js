import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    DirectionsRenderer
} from "react-google-maps";
import { setRoute } from '../Store/actions'



class Map extends Component {
    state = {
        cord: {
            lat: null,
            lng: null,
        }
    }



    //function to show the map on the screen....
    GMap = () => {
        // if (this.props.to !== '') {
        //     this.getPoint(this.props.to)
        // }

        const crd = this.props.mapdata.cords;
        console.log(this.crd);
        //console.log(routes);
        if (this.props.mapdata.path) {
            const route = this.props.mapdata.route;

            return (
                <GoogleMap

                    defaultZoom={10}
                    defaultCenter={{ lat: crd.lat, lng: crd.lng }}

                >
                    {route != null && < DirectionsRenderer directions={route} />}

                </GoogleMap>
            )
        } else {
            return (

                <GoogleMap

                    defaultZoom={10}
                    defaultCenter={{ lat: crd.lat, lng: crd.lng }}
                >
                    <Marker position={{ lat: crd.lat, lng: crd.lng }} />

                </GoogleMap>

            )
        }
    }

    //function to show route using direction service of google map
    showRoute = () => {
        const crd = this.props.mapdata.startPoint;
        const dist = this.props.mapdata.endPoint;
        const DirectionsService = new window.google.maps.DirectionsService();
        if (crd !== {} && crd !== undefined && crd !== "") {
            console.log('working')
            DirectionsService.route({
                origin: new window.google.maps.LatLng(crd.lat, crd.lng),
                destination: new window.google.maps.LatLng(dist.lat, dist.lng),
                travelMode: window.google.maps.TravelMode.DRIVING,
                provideRouteAlternatives: true
            }, (result, status) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                    //console.log(result.routes)
                    this.calRoute(result)

                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });
        }
    }

    //function to calculate the shortest route from the result of showRoute function......
    //
    calRoute = (result) => {
        const arr = result.routes;
        let myroutes = [];
        let distance = [];

        for (let i = 0; i < arr.length; i++) {
            const res = arr[i]
            //console.log(res.legs)
            for (let j = 0; j < res.legs.length; j++) {
                let a = res.legs[j].distance.value;
                distance.push(a);
                myroutes[a] = {
                    ...result,
                    routes: [result.routes[i]]
                }
            }


        }
        if (myroutes !== []) {

            const no = Math.min(...distance)

            this.props.dispatch(setRoute(myroutes[no]))
        }
    }



    //HOC for the GMap function.......
    MapWrapped = withGoogleMap(this.GMap)

    render() {
        console.log(this.props)
        const data = this.props.mapdata;
        return (
            <div style={{ width: "100%", height: "100%", padding: "20px" }}>

                < this.MapWrapped
                    // googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDB1ujwvkFEo87xhHyHhHP52iJ6zMlbB_w"}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                {data.check === true ? this.showRoute() : null}

                {/* <input type='submit' value="Show Route" onClick={this.showRoute} />
                <input type='submit' value="Check Cab" onClick={this.checkCab} />
                <input type='submit' value="Refresh" onClick={this.refreshMap} />
                {data.cab === true ? <div className="alert">{data.cabRule.message}</div> : null}
                {data.cab === true && data.cabRule.cab ? <div className="alert">Estimated Fare = Rs {data.cabFare}</div> : null}
                {data.cab === true && data.cabRule.cab ?
                    <input type='submit' value="Book Cab" onClick={this.bookCab} />
                    : null}
                {data.cab === true && data.booking ? <h1>Ride Booked !!...</h1> : null} */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        mapdata: state.mapdata
    }
}

export default connect(mapStateToProps)(Map);