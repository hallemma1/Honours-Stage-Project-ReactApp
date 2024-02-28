import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'proj4leaflet';
import 'leaflet-polar-graticule';

import './Map.css';
import '../MainContent/MainContent.css';
import json from './icebergs-apr-2022.json';

const ActualMap = () => {
    const mapRef = useRef(null);

    useEffect(() => {

        // The South Polar projection
        const proj = 'EPSG:3031';
        const proj4 = '+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs';

        let crs = new L.Proj.CRS(proj, proj4, {
            resolutions: [8192, 4096, 2048, 1024, 512, 256],
            origin: [-4194304, 4194304],
            bounds: L.bounds([-4194304, -4194304], [4194304, 4194304]),
        });

        // Create the map only if it hasn't been created yet
        if (!mapRef.current) {
            const mapInstance = L.map('map', {
                crs: crs,
                center: [-93, 0],
                zoom: 0,
            });

            // Save the map instance to the useRef
            mapRef.current = mapInstance;

            // Add MODIS Aqua satellite imagery
            L.tileLayer(
                'http://map1{s}.vis.earthdata.nasa.gov/wmts-antarctic/{layer}/default/{time}/{tileMatrixSet}/{z}/{y}/{x}.jpg',
                {
                    layer: 'MODIS_Aqua_CorrectedReflectance_TrueColor',
                    tileMatrixSet: 'EPSG3031_250m',
                    time: '2022-10-01',
                    tileSize: 512,
                    attribution: "<a href='https://earthdata.nasa.gov/gibs'> NASA </a>",
                }
            ).addTo(mapInstance);

            // Add coastlines from Polarview
            L.tileLayer.wms('https://geos.polarview.aq/geoserver/wms', {
                layers: 'polarview:coastS10',
                format: 'image/png',
                transparent: true,
                attribution: "<a href='https://www.polarview.aq/antarctic'>Polarview</a>",
                tileSize: 512,
            }).addTo(mapInstance);
        }

        // Add lines of latitude and longitude using leaflet-polar-graticule
        // L.graticule({
        //     intervalLat: 10,
        //     intervalLng: 30,
        //     latBounds: [-90, -55],
        //     centerLonLabels: true,
        // }).addTo(mapRef.current);

        // Additional logic for updating popups or other map properties can be added here


        // function to load a GeoJSON file
        // async function loadGeoJSON() {
        //     try {
        //         const response = await fetch('./icebergs-apr-2022.json', {
        //             headers: {
        //                 'Accept': 'application/json',
        //                 'Content-Type': 'application/json'
        //             }
        //         });
        
        //         if (!response.ok) {
        //             throw new Error(`Failed to fetch GeoJSON. Status: ${response.status}`);
        //         }
        
        //         const json = await response.json();
        //         return json;
        //     } catch (error) {
        //         console.error('Error loading GeoJSON:', error);
        //         throw error; // Re-throw the error to ensure it's propagated
        //     }
        // }
        
        
          
    
            const IcebergIcon = L.divIcon({
            html: `<svg width="10" height="10" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,0 10,10 0,5" fill="#ee82ee"/>
            </svg>`,
            className: 'iceberg-icon',
            iconSize: [10, 10],
            iconAnchor: [5, 5]
            });
    
            const addPopupFromFeatureProperties = (feature, layer) => {
            let popupContent = '';
            if (feature.properties && feature.properties.name) {
                popupContent = '<strong>' + feature.properties.name + '</strong>';
            }
            if (popupContent && popupContent !== '') {
                layer.bindPopup(popupContent);
            }
            };
    
            const IcebergPoint = (geoJsonPoint, latlng) => {
            return L.marker(latlng, { icon: IcebergIcon });
            };
    
            // loadGeoJSON().then(data => {
            L.geoJSON([json], { pointToLayer: IcebergPoint, onEachFeature: addPopupFromFeatureProperties }).addTo(mapRef.current);
            // });
    

    }, []); // Empty dependency array ensures the effect runs once after the initial render

    return <div id="map" style={{ height: '100%', width: '100%' }}></div>
}

export default ActualMap;
