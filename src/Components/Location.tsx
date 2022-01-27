import React, {Component} from "react";

interface LonLat {
    location:{
    latitude: number,
    longitude: number
    }
}


export default class Location extends Component < LonLat, {} >{

    constructor(props: LonLat){
        super(props);
        this.state = {
            LonLat: {
                latitude: Number,
                longitude: Number,
            }
        }
    }

    locationPlease() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                location: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            })
            
        })
    }

    componentDidMount(){
        this.locationPlease();
    }

    localWeather() {
        if (this.state.location.latitude && this.state.location.longitude)
    }
    
}