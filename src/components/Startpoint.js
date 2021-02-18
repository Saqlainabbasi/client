import React, { Component } from 'react';
import { connect } from 'react-redux';
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import { clearStartPoint, setStartPoint } from '../Store/actions'


class Startpoint extends Component {

    state = {
        searchBox: {}
    }
    style = {
        input: {
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
        }
    }


    onSearchBoxMounted = ref => {
        return this.setState({
            ...this.state,
            searchBox: ref
        });
    }

    onPlacesChanged = (place) => {
        const ref = this.state.searchBox
        if (ref != null) {

            const dst = ref.getPlaces();
            console.log(dst)
            let newdist = {}
            dst.map(({ formatted_address, geometry: { location } }) => {
                return newdist = {
                    sAdrs: formatted_address,
                    lat: location.lat(),
                    lng: location.lng()
                }
            })
            if (newdist != null) {
                this.props.dispatch(setStartPoint(newdist))
            }
        }


    }
    // componentWillUnmount() {
    //     this.props.dispatch(clearStartPoint())
    // }


    render() {
        return (
            <div data-standalone-searchbox="" style={{ marginTop: '5px' }}>
                <label style={{ marginRight: '5px' }}>Start Point</label>
                <StandaloneSearchBox
                    ref={this.onSearchBoxMounted}
                    onPlacesChanged={this.onPlacesChanged}
                >
                    <input
                        type="text"
                        placeholder="Pick Distenation Start Point"
                        style={this.style.input}

                    />
                </StandaloneSearchBox>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        strtPoint: state.mapdata
    }
}
export default connect(mapStateToProps)(Startpoint);