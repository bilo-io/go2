export class Journey {
    constructor() {}
    log() {
        console.log(`I'm a UTIL for Journey`)
    }

    getFirstItinerary(journey) {
        return journey && journey.itineraries && journey.itineraries[0];
    }

    getLastItinerary(journey) {
        return journey && journey.itineraries && journey.itineraries[journey.itineraries.length - 1];
    }
}

export class Itinerary {
    constructor() {}
    log() {
        console.log(`I'm a UTIL for Itineraries`)
    }
    getFirstLeg(itinerary) {
        return itinerary && itinerary.legs && itinerary.legs[0];
    }

    getLastLeg(itinerary) {
        return itinerary && itinerary.legs && itinerary.legs[itinerary.legs.length - 1];
    }

    getModes(itinerary) {
        let modes = itinerary.legs.map((leg) => {
            return {
                mode: this.getModeIcon((leg.line ? leg.line.mode : leg.type)),
                color: (leg.line ? leg.line.colour : '#777777')
            }
        });
        console.log({ modes });
        return modes;
    }

    getModeIcon(mode) {
        switch (mode) {
            case 'LightRail':
                return 'tram';
            case 'Subway':
                return 'directions_subway';
            case 'Rail':
                return 'directions_railway';
            case 'Bus':
                return 'directions_bus';
            case 'Ferry':
                return 'directions_boat';
            case 'GroundCableCar':
                return 'tram';
            case 'Gondola':
                return 'tram';
            case 'Funicular':
                return 'tram';
            case 'Coach':
                return 'directions_bus';
            case 'Air':
                return 'local_airport';
            case 'Walk':
            case 'Walking':
            case 'Pedestrian':
                return 'directions_walk';
            case 'Bike':
            case 'Bicycle':
                return 'directions_bike';
            case 'ShareTaxi':
                return 'airport_shuttle';
            default:
                return 'error_outline';
        }
    }
}
export class Leg {
    constructor() {}
    log() {
        console.log(`I'm a UTIL for Leg`)
    }
    getFirstWaypoint(leg) {
        return leg && leg.waypoints && leg.waypoints[0];
    }
    getLastWaypoint(itinerary) {
        return leg && leg.waypoints && leg.waypoints[leg.waypoints.length - 1];
    }
}

var tapi = {
    Journey: new Journey(),
    Itinerary: new Itinerary(),
    Leg: new Leg()
}

export default tapi;