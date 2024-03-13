import React, { useEffect, useRef } from 'react';
import L, { geoJSON } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'proj4leaflet';
import 'leaflet-polar-graticule';
import { usePenguinData } from '../../Hooks/usePenguinData';
import {scaleLinear} from "d3-scale";
import { interpolateBlues } from 'd3-scale-chromatic';
import '../MainContent/MainContent.css'



const ActualMap = ({mapData}) => {
    console.log("mapData from prop: ", mapData);
    const mapRef = useRef(null);

    useEffect(() => {
        console.log("test1");
        console.log("mapData in useEffect: ", mapData);
        if (!Array.isArray(mapData)) {
            console.log("test2");
          const geoJSON = {
            type: 'FeatureCollection',
            features: mapData.dataObject.map(dataPoint => ({
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [dataPoint.longitude, dataPoint.latitude],
              },
              properties: {
                siteName: dataPoint.siteName,
                siteId: dataPoint.siteId,
                commonName: dataPoint.commonName,
                year: dataPoint.year,
                penguinCount: dataPoint.penguinCount,
              },
            })),
          };
          console.log("geojson: ", geoJSON);
 

            const proj = 'EPSG:3031';
            const proj4 =
            '+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs';

            let crs = new L.Proj.CRS(proj, proj4, {
            resolutions: [8192, 4096, 2048, 1024, 512, 256],
            origin: [-4194304, 4194304],
            bounds: L.bounds([-4194304, -4194304], [4194304, 4194304]),
            });

            if (!mapRef.current) {
            const mapInstance = L.map('map', {
                crs: crs,
                center: [-91, 10],
                zoom: 0,
            });

            mapRef.current = mapInstance;

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

            L.tileLayer.wms('https://geos.polarview.aq/geoserver/wms', {
                layers: 'polarview:coastS10',
                format: 'image/png',
                transparent: true,
                attribution: "<a href='https://www.polarview.aq/antarctic'>Polarview</a>",
                tileSize: 512,
            }).addTo(mapInstance);
            }


            //START
            //ICON SIZE
            // if (geoJSON && Array.isArray(geoJSON.features)) {
            //     const markers = L.geoJSON(geoJSON, {
            //         pointToLayer: (feature, latlng) => {
            //             const population = feature.properties.penguinCount;
            //             const iconSize = calculateIconSize(population);
            //             return L.marker(latlng, { icon: createPopulationIcon(iconSize) }).bindPopup(
            //                 `<strong>${feature.properties.siteName}</strong><br>Penguin Count: ${population}`
            //             );
            //         },
            //     });
                
            //     markers.addTo(mapRef.current);
                              
            //     function calculateIconSize(population) {
            //         const maxSize = 25; // Maximum icon size
            //         const minSize = 10; // Minimum icon size
            //         // Assuming penguinCount ranges from 0 to 25000
            //         const size = Math.max(minSize, (population / 250000) * maxSize); // Adjusting size proportionally
            //         return [size, size];
            //     }
                
            //     function createPopulationIcon(iconSize) {
            //         return L.divIcon({
            //             className: 'population-icon',
            //             iconSize: iconSize,
            //             iconAnchor: [iconSize[0] / 2, iconSize[1] / 2], // Centering anchor
            //             html: `<div style="background-color: blue; border: 1px solid black; border-radius: 50%; width: ${iconSize[0]}px; height: ${iconSize[1]}px;"></div>`,
            //         });                       
            //     }
                //ICON SIZE
                //END
            
                //START
                //ICON COLOUR
            // const calculateColor = (population) => {
            //     const colorScale = scaleLinear()
            //     .domain([0, 25000])
            //     .range(['#add8e6', '#00008b']); //light blue to dark blue
            
            //     return colorScale(population);
            // };

            // if (geoJSON && Array.isArray(geoJSON.features)) {
            //     const markers = L.geoJSON(geoJSON, {
            //         pointToLayer: (feature, latlng) => {
            //         const color = calculateColor(feature.properties.penguinCount);
                    
            //         return L.marker(latlng, { icon: createPopulationIcon(color) }).bindPopup(
            //             `<strong>${feature.properties.siteName}</strong><br>Penguin Count: ${feature.properties.penguinCount}`
            //         );
            //         },
            //     });
            
            //     markers.addTo(mapRef.current);
            
            //     // Function to create PopulationIcon with dynamic color
            //     function createPopulationIcon(color) {
            //         return L.divIcon({
            //         className: 'population-icon',
            //         iconSize: [20, 20],
            //         iconAnchor: [10, 10],
            //         html: `<div style="background-color: ${color}; border: 1px solid black; border-radius: 10px; width: 20px; height: 20px;"></div>`,
            //         });         
            //     }
            //ICON COLOUR
            //END

            //START
            //ICON SIZE & ICON COLOUR
            // if (geoJSON && Array.isArray(geoJSON.features)) {
            //     const markers = L.geoJSON(geoJSON, {
            //         pointToLayer: (feature, latlng) => {
            //             const population = feature.properties.penguinCount;
            //             const color = calculateColor(population);
            //             const iconSize = calculateIconSize(population);
            //             return L.marker(latlng, { icon: createPopulationIcon(color, iconSize) }).bindPopup(
            //                 `<strong>${feature.properties.siteName}</strong><br>Penguin Count: ${population}`
            //             );
            //         },
            //     });
                
            //     markers.addTo(mapRef.current);
                
            //     function calculateIconSize(population) {
            //         const maxSize = 25;
            //         const minSize = 10; 
            //         // Assuming penguinCount ranges from 0 to 25000
            //         const size = Math.max(minSize, (population / 250000) * maxSize); 
            //         return [size, size];
            //     }
            
            //     function calculateColor(population) {
            //         const colorScale = scaleLinear()
            //             .domain([0, 250000])
            //             //.range(['#add8e6', '#00008b']); //light blue to dark blue
            //             .range(['#EF81C7', '#97216C']) //secondary colour pink light to dark
            //         return colorScale(population);
            //     }
                
            //     function createPopulationIcon(color, iconSize) {
            //         return L.divIcon({
            //             className: 'population-icon',
            //             iconSize: iconSize,
            //             iconAnchor: [iconSize[0] / 2, iconSize[1] / 2], // Centering anchor
            //             html: `<div style="background-color: ${color}; border: 1px solid black; border-radius: 50%; width: ${iconSize[0]}px; height: ${iconSize[1]}px;"></div>`,
            //         });         
            //     }
            //ICON SIZE & ICON COLOUR
            //END

            //START
            //ICON SIZE & ICON COLOUR & 200,000+ RED
            if (geoJSON && Array.isArray(geoJSON.features)) {
                const markers = L.geoJSON(geoJSON, {
                    pointToLayer: (feature, latlng) => {
                        const population = feature.properties.penguinCount;
                        if (population > 50000) {
                            // Use a solid red marker for counts exceeding 200,000
                            return L.marker(latlng, { icon: createRedMarker() }).bindPopup(
                                `<strong>${feature.properties.siteName}</strong><br>Penguin Count: ${population}`
                            );
                        } else {
                            // Calculate color and size for counts less than or equal to 200,000
                            const color = calculateColor(population);
                            const iconSize = calculateIconSize(population);
                            return L.marker(latlng, { icon: createPopulationIcon(color, iconSize) }).bindPopup(
                                `<strong>${feature.properties.siteName}</strong><br>Penguin Count: ${population}`
                            );
                        }
                    },
                });
                
                markers.addTo(mapRef.current);
                
                // Function to create a solid red marker
                function createRedMarker() {
                    return L.divIcon({
                        className: 'red-marker',
                        iconSize: [20, 20],
                        iconAnchor: [10, 10],
                        html: `<div style="background-color: red; border: 1px solid black; border-radius: 10px; width: 20px; height: 20px;"></div>`,
                    });         
                }
            
                // Function to calculate icon size based on population
                function calculateIconSize(population) {
                    const maxSize = 25; // Maximum icon size
                    const minSize = 10; // Minimum icon size
                    // Assuming penguinCount ranges from 0 to 25000
                    const size = Math.max(minSize, (population / 50000) * maxSize); // Adjusting size proportionally
                    return [size, size];
                }
            
                // Function to calculate color based on population
                function calculateColor(population) {
                    const colorScale = scaleLinear()
                        .domain([0, 50000])
                        //.range(['#add8e6', '#00008b']); //light blue to dark blue
                        .range(['#EF81C7', '#97216C'])
                    return colorScale(population);
                }
                
                // Function to create PopulationIcon with dynamic size and color
                function createPopulationIcon(color, iconSize) {
                    return L.divIcon({
                        className: 'population-icon',
                        iconSize: iconSize,
                        iconAnchor: [iconSize[0] / 2, iconSize[1] / 2], // Centering anchor
                        html: `<div style="background-color: ${color}; border: 1px solid black; border-radius: 50%; width: ${iconSize[0]}px; height: ${iconSize[1]}px;"></div>`,
                    });         
                }
            //ICON SIZE & ICON COLOUR & 200,000+ RED
            //END
            }else{
                console.log("invalid geoJSON format ");
            }

        } else {
            console.error('Invalid penguinData format. Expected an array.');
        }

    }); [mapData, mapRef];

  return <div id="map" style={{ height: '100%', width: '100%' }}></div>;
};

export default ActualMap;
