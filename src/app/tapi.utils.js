export class Journey {
    constructor() { }
    log() {
        console.log(`I'm a UTIL for Journey`)
    }

    static getFirstItinerary(journey) {
        return journey && journey.itineraries && journey.itineraries[0];
    }

    getLastItinerary(journey) {
        return journey && journey.itineraries && journey.itineraries[journey.itineraries.length - 1];
    }
}

export class Itinerary {
    constructor() { }
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
        let modes = [];
        modes = itinerary.legs.map((leg) => {
            return {
                name: this.getModeIcon((leg.line ? leg.line.mode : leg.type)),
                color: (leg.line ? leg.line.colour : '#777777')
            }
        });
        return modes;
    }

    getModeIcon(mode) {
        let modes = {
            LightRail: 'tram',
            Subway: 'directions_subway',
            Rail: 'directions_railway',
            Bus: 'directions_bus',
            Ferry: 'directions_boat',
            Coach: 'directions_bus',
            Walking: 'directions_walk',
            ShareTaxi: 'airport_shuttle',
            default: 'error_outline'
        }
        return modes[mode];
    }
}
export class Leg {
    constructor() { }
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