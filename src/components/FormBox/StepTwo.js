import React, { Component } from 'react';
import { connect } from 'react-redux';
import elipsful from '../../images/elipsful.svg';
import elips from '../../images/elips.svg';
import PlacesAutocomplete, {
    geocodeByAddress,

} from "react-places-autocomplete";
import Map from '../Map';
import { checkCabRule, setCurrentLocation, setEndPoint, setStartPoint } from '../../Store/actions';
import Button from 'react-bootstrap/esm/Button';
import Alert from 'react-bootstrap/esm/Alert';

class StepTwo extends Component {
    state = {
        orgAdrs: '',
        distAdrs: ''
    }
    componentDidMount() {
        // console.log("map will mount")
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position)
                    const cord = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }

                    this.props.dispatch(setCurrentLocation(cord))

                })

        } else {

        }

    }
    componentWillUnmount() {
        console.log('working will unmount')
    }
    //
    //function to show Airport in select box
    showAirport = () => (
        <>
            <option className='form-control' >select Airport</option>
            <option className='form-control' value='Islamabad International Airport, Airport Ave, Islamabad'>Islamabad Airport</option>
            <option className='form-control' value='Allama Iqbal International Airport'>Lahore Airport</option>
            <option className='form-control' value='Jinnah International Airport, Airport Road'>Karachi Airport</option>
            <option className='form-control' value='Multan International Airport'>Multan Airport</option>
        </>
    )

    //
    //function to handle the selected airport value from the select box.
    handleSelectBox = (e, name) => {
        let value = e.target.value;

        if (value) {

            this.getPoint(value, name)
        }

    }

    //
    //function to get the exact place data from the selecte air port value.
    //
    getPoint = async (value, name) => {
        const results = await geocodeByAddress(value);
        const Adrs = results[0].formatted_address;
        console.log(results)
        if (results) {
            if (name === 'to') {
                let response = {
                    eAdrs: Adrs,
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                }
                this.props.dispatch(setEndPoint(response))
            }
            if (name === 'from') {
                let response = {
                    sAdrs: Adrs,
                    lat: results[0].geometry.location.lat(),
                    lng: results[0].geometry.location.lng()
                }
                this.props.dispatch(setStartPoint(response))
            }
        }

    };
    //
    //function to handle the change in the placeautocomplete box.
    //
    handleChange = (event, name) => {
        if (name === "startP") {
            let adrs = event
            this.setState({
                ...this.state,
                orgAdrs: adrs
            })
        }
        if (name === "endP") {
            let adrs = event
            this.setState({
                ...this.state,
                distAdrs: adrs
            })
        }
    }
    //
    //function to handle the selected place from the Totextbox.......
    //
    handleSelectedDist = async value => {
        const results = await geocodeByAddress(value);
        const eAdrs = results[0].formatted_address;
        console.log(results)
        this.setState({
            ...this.state,
            distAdrs: eAdrs,
        })
        let response = {
            eAdrs: eAdrs,
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
        }
        this.props.dispatch(setEndPoint(response))

    };
    //
    //function to handle the selected place from the Fromtextbox.......
    //
    handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const sAdrs = results[0].formatted_address;
        console.log(results)
        this.setState({
            ...this.state,
            orgAdrs: sAdrs,
        })
        let response = {
            sAdrs: sAdrs,
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
        }
        this.props.dispatch(setStartPoint(response))
    };
    //
    //function to check the availabilty of cab..........
    checkCab = () => {
        const data = this.props.mapdata
        const pth = this.props.mapdata.path
        if (pth === true) {
            this.props.dispatch(checkCabRule(data))
        }
    }



    render() {
        let data = this.props.mapdata
        if (this.props.currentStep !== 2) { // Prop: The current step
            return null
        }

        return (
            <div className="step-box">
                <div className="box-item-one">
                    <div className="box-b-wrapper">
                        <div className="b-one"><img src={elipsful} alt="arrow" /></div>
                        <div className="b-two">...........................................</div>
                        <div className="b-three"><img src={elips} alt="arrow" /></div>
                    </div>
                    <div className="box-b-wrapper">
                        <div className="b-one">Location</div>
                        <div className="b-two"> </div>
                        <div className="b-three">Payment</div>
                    </div>
                </div>
                <div className="box-item-two">

                    <div className="formbox-two">
                        <div className="data-wrapper">
                            <div className="data-item-one">
                                <h5>Enter details to Continue</h5>
                                <div className="form-group">
                                    {this.props.text === 'from' ?
                                        <select className="form-control" onChange={e => this.handleSelectBox(e, 'from')}>
                                            {this.showAirport()}
                                        </select>

                                        : <PlacesAutocomplete
                                            id={2}
                                            value={this.state.orgAdrs}
                                            onChange={event => this.handleChange(event, "startP")}
                                            onSelect={this.handleSelect}
                                        >
                                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                                <div className="place">


                                                    <input className='form-control' {...getInputProps({ placeholder: "Type Form address" })} />

                                                    <div className='article'>
                                                        {loading ? <div>...loading</div> : null}

                                                        {suggestions.map((suggestion, index) => {
                                                            const style = {

                                                                boxSizing: `border-box`,
                                                                border: `1px solid transparent`,
                                                                width: `100%`,
                                                                height: `auto`,
                                                                padding: `4px 8px`,
                                                                borderRadius: `3px`,
                                                                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                                                                fontSize: `14px`,
                                                                outline: `none`,
                                                                textOverflow: `ellipses`,
                                                                zIndex: 9999,
                                                            };

                                                            return (
                                                                <div key={index}  {...getSuggestionItemProps(suggestion, { style })}>
                                                                    {suggestion.description}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </PlacesAutocomplete>
                                    }
                                </div>

                                <div className="form-group">
                                    {this.props.text === 'to' ?
                                        <select className="form-control" onChange={e => this.handleSelectBox(e, 'to')}>
                                            {this.showAirport()}

                                        </select>

                                        : <PlacesAutocomplete
                                            value={this.state.distAdrs}
                                            onChange={event => this.handleChange(event, "endP")}
                                            onSelect={this.handleSelectedDist}
                                        >
                                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                                <div className="place">


                                                    <input {...getInputProps({ placeholder: "Type To address" })} className='form-control' />

                                                    <div className='article'>
                                                        {loading ? <div>...loading</div> : null}

                                                        {suggestions.map(suggestion => {
                                                            const style = {

                                                                boxSizing: `border-box`,
                                                                border: `1px solid transparent`,
                                                                width: `100%`,
                                                                height: `32px`,
                                                                padding: `0 12px`,
                                                                borderRadius: `3px`,
                                                                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                                                                fontSize: `14px`,
                                                                outline: `none`,
                                                                textOverflow: `ellipses`,
                                                                zIndex: 1,
                                                            };

                                                            return (
                                                                <div  {...getSuggestionItemProps(suggestion, { style })}>
                                                                    {suggestion.description}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </PlacesAutocomplete>

                                    }
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-7">
                                            <input type="date" className="form-control" placeholder="Pick Date" onChange={e => this.props.handleChange(e, 'date')} />
                                        </div>
                                        <div className="col-5">
                                            <input type="time" className="form-control" placeholder="Pick Time" onChange={e => this.props.handleChange(e, 'time')} />
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <select className="form-control" onChange={e => this.props.handleChange(e, 'cabName')}>
                                        <option >select Car</option>
                                        <option value='Salon'>Salon 4 person</option>
                                        <option value='BMW'>BMW 4 person</option>
                                        <option value='MUV'>MUV 7 person</option>
                                        <option value='SUV'>SUV 7 person</option>
                                    </select>
                                </div>
                            </div>
                            <div className="data-item-two">
                                <Map />
                            </div>
                        </div>
                        <div className="form-group">
                            {this.props.previousButton()}
                            {/* condition's to show the buttons  */}
                            {data.path ?
                                data.cab ? <Button variant="primary" onClick={this.checkCab}>check</Button> : null
                                : null
                            }
                            {data.cab === false && data.path === true ?
                                data.cabRule.cab ? this.props.nextButton() : null
                                : null
                            }
                        </div>
                        <div className="form-group">
                            {data.cab === false && data.path === true ?
                                data.cabRule.cab ? null : <Alert variant='danger m-2'>Cab not Available.!!! try other Route</Alert> : null

                            }
                        </div>
                    </div>

                </div>
                {}
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        mapdata: state.mapdata
    }
}

export default connect(mapStateToProps)(StepTwo);