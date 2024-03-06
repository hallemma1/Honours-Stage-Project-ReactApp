import React, { useEffect, useRef } from 'react';
import L, { geoJSON } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'proj4leaflet';
import 'leaflet-polar-graticule';
import { useGetPenguinData } from '../../Hooks/useGetPenguinData';
import {scaleLinear} from "d3-scale";
import { interpolateBlues } from 'd3-scale-chromatic';
import '../MainContent/MainContent.css'

function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

function style(feature) {
    console.log("penguinCount = ", feature.properties.penguinCount);
    return {
        fillColor: getColor(feature.properties.penguinCount),
    };
}
const colourScale = scaleLinear().domain([0,1000000]).range(["#fff", "#000"])


const ActualMap = () => {

    const {getPenguinData} = useGetPenguinData(); 
    const mapRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPenguinData();
            console.log("DATA: ", data);
            return data;
        };
      
        fetchData().then((returnData) => {
          console.log("return data:", returnData);
    
          const geoJSON = {
            type: 'FeatureCollection',
            features: returnData.dataObject.map(dataPoint => ({
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
            center: [-93, 0],
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


        const calculateColor = (population) => {
            const colorScale = scaleLinear()
              .domain([0, 25000])
              .range(['#add8e6', '#00008b']); //light blue to dark blue
          
            return colorScale(population);
          };

        if (geoJSON && Array.isArray(geoJSON.features)) {
          const markers = L.geoJSON(geoJSON, {
            pointToLayer: (feature, latlng) => {
              const color = calculateColor(feature.properties.penguinCount);
        
              return L.marker(latlng, { icon: createPopulationIcon(color) }).bindPopup(
                `<strong>${feature.properties.siteName}</strong><br>Penguin Count: ${feature.properties.penguinCount}`
              );
            },
          });
        
          markers.addTo(mapRef.current);
        
          // Function to create PopulationIcon with dynamic color
          function createPopulationIcon(color) {
            return L.divIcon({
              className: 'population-icon',
              iconSize: [20, 20],
              iconAnchor: [10, 10],
              html: `<div style="background-color: ${color}; border: 1px solid black; border-radius: 10px; width: 20px; height: 20px;"></div>`,
            });         
          }

        } else {
        console.error('Invalid penguinData format. Expected an array.');
        }
    });
    }, [ mapRef]);

  return <div id="map" style={{ height: '100%', width: '100%' }}></div>;
};

export default ActualMap;
