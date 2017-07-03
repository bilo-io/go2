

export class Itinerary {
    constructor() { }
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
                color: (leg.line ? toHexColor(leg.line.colour) : '#777777')
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
    getFirstWaypoint(leg) {
        return leg && leg.waypoints && leg.waypoints[0];
    }
    getLastWaypoint(itinerary) {
        return leg && leg.waypoints && leg.waypoints[leg.waypoints.length - 1];
    }
}

export class Journey {

    getStartOf(journey) {
        let start = 'START';
        // start = tapi.Leg.getFirstWaypoint(tapi.Itinerary.getFirstLeg(tapi.Journey.getFirstItinerary(journey)));
        // start = start.address ? start.address : (start.name ? start.name : 'taxi');
        return start;
    }

    getEndOf(journey) {
        let end = 'END';
        // end = tapi.Leg.getLastWaypoint(tapi.Itinerary.getLastLeg(tapi.Journey.getFirstItinerary(journey)));
        // end = end.address ? end.address : (end.name ? end.name : 'taxi');
        return end;
    }
    getFirstItinerary(journey) {
        return journey && journey.itineraries && journey.itineraries[0];
    }

    getLastItinerary(journey) {
        return journey && journey.itineraries && journey.itineraries[journey.itineraries.length - 1];
    }

    hexifyColors(journey) {
        let hexifiedJourney = Object.assign({}, journey);
        hexifiedJourney.itineraries.forEach((itinerary) => {
            itinerary.legs.forEach((leg) => {
                let color = '#';
                if (leg.type === 'Transit') {
                    // '04A1B9'
                    color += ((!leg.line || !leg.line.colour)
                        ? '999999'
                        : leg.line.colour.substring(3, leg.line.colour.length));
                } else {
                    color += '777777';
                }
                leg.colour = color;
            })
        })
        console.log({ hexifiedJourney });
        return hexifiedJourney;
    }
}

var tapi = {
    Journey: new Journey(),
    Itinerary: new Itinerary(),
    Leg: new Leg(),
    toHexColor: toHexColor
}

export function toHexColor(col) {
    let color = col;
    if (col.length > 7) {
        color = '#' + col.substring(3, col.length);
    }
    return color;
}
export default tapi;