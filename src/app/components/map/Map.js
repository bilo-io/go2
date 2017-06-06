import React from 'react';
import L from 'leaflet';
import './markers/pin-start.svg';
import './markers/pin-end.svg';
import './markers/pin-stop.svg';
import './markers/pin-shadow.svg';
import './markers/map-pin-a.svg';
import './markers/map-pin-b.svg';
import './markers/map-pin-shadow.svg';
require('./map.scss');
var map = {};
// Layers
var pointLayer = [];
var lineLayer = [];
// Pins
var pinStart = {};
var pinEnd = {};
var pinStop = {};
export default class Map extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.initMap();
    }
    componentWillReceiveProps(nextProps, nextState) {
        this.processGeometry(nextProps.geojson);
    }
    render() {
        return (
            <div className="map-container">
                <div id="leafletmap" className="map-component"></div>
            </div>
        )
    }
    initMarkers() {
        let imagePath = 'assets/';
        let pinOptions = {
            shadowUrl: imagePath + 'map-pin-shadow.svg',
            iconSize: [32, 32],
            shadowSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        }
        this.pinStart = L.icon(Object.assign({
            iconUrl: imagePath + 'map-pin-a.svg',
        }, pinOptions));
        this.pinEnd = L.icon(Object.assign({
            iconUrl: imagePath + 'map-pin-b.svg',
        }, pinOptions));
        this.pinStop = L.icon(Object.assign({
            iconUrl: imagePath + 'pin-stop.svg',
        }, pinOptions));
    }
    initMap() {
        this.initMarkers();
        let style = 'streets';
        let token = 'pk.eyJ1IjoiYmlsb2x3YWJvbmEiLCJhIjoiY2ozbTRjeDN0MDAwNzMzbnJya2Q5eTM5bSJ9.MiN--WyrsVw5fktG2qM_JA';
        let tileLayer = L.tileLayer(`https://api.tiles.mapbox.com/v4/mapbox.${style}/{z}/{x}/{y}.png?access_token=${token}`, {
            attribution: '',
            maxZoom: 18,
            id: 'your.mapbox.project.id',
            accessToken: 'your.mapbox.public.access.token'
        });
        map = new L.Map('leafletmap', {
            zoomControl: false,
            attributionControl: false,
        })
            .setView([-33.915835, 18.420381], 5)
            .addLayer(tileLayer);
    }
    processGeometry(geojson) {
        // http://leafletjs.com/examples/geojson/
        this.clearMap();
        if (geojson) {
            let lines = (geojson.lines ? geojson.lines : undefined);
            if (lines && lines.length > 0) {
                lines.forEach((line) => {
                    if (map) {
                        let layer = L.geoJSON(line.geometry, {
                            style: line.options.style
                        }).addTo(map);
                        lineLayer.push(layer);
                        map.addLayer(layer);
                    }
                })
            }

            let points = (geojson.points ? geojson.points : undefined);
            if (points && points.length > 0) {
                    points.forEach((point) => {
                    if (map) {
                        let pin = (point, latlng) => {
                            if (point.properties.pinType === 'stop') {
                                return circle(latlng, point.properties.color, point.properties.name);
                            }
                            let icon = (point.properties.pinType === 'start') ?
                                this.pinStart :
                                (point.properties.pinType === 'end') ?
                                    this.pinEnd :
                                    this.pinStop;

                            return L.marker(latlng, {
                                icon: icon
                            }).bindPopup(point.properties.name)
                        }
                        let circle = (latlng, color, name) => {
                            return L.circleMarker(latlng, {
                                fillColor: color,
                                fillOpacity: 1.0,
                                color: '#ffffff',
                                stroke: true,
                                radius: 8,
                            }).bindPopup(name);
                        };
                        let layer = L.geoJson(point.geometry, {
                            pointToLayer: ((feature, latlng) => {
                                return pin(point, latlng);
                            })
                        });
                        pointLayer.push(layer);
                    }
                })
            }

            if (map) {
                if (pointLayer.length > 0) {
                    map.addLayer(L.featureGroup(pointLayer));
                    map.fitBounds((L.featureGroup(pointLayer)).getBounds())
                }
                if (lineLayer.length > 0) {
                    map.addLayer(L.featureGroup(lineLayer));
                    map.fitBounds((L.featureGroup(lineLayer)).getBounds())
                }
            }
        }
    }
    clearMap() {
        pointLayer.forEach((layer) => {
            map.removeLayer(layer);
        })
        pointLayer = [];

        lineLayer.forEach((layer) => {
            map.removeLayer(layer);
        })
        lineLayer = [];
    }
}