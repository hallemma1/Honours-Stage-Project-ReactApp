import React, { useEffect, useRef } from 'react';
import L, { geoJSON } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'proj4leaflet';
import 'leaflet-polar-graticule';
import { useGetPenguinData } from '../../Hooks/useGetPenguinData';
import { useState } from 'react';

const ActualMap = () => {

    const {getPenguinData} = useGetPenguinData(); 
    const mapRef = useRef(null);
    const [geoJsonConverted, setGeoJsonConverted]= useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getPenguinData();
            console.log("DATA: ", data);
            return data;
          } catch (error) {
            console.error("Error fetching data:", error);
            return []; // or handle the error in an appropriate way
          }
        };
      
        fetchData().then((returnData) => {
          console.log("return data:", returnData);
      
          // Now you can map through the data
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
          // Do something with the geoJSON, for example, set it in the component state
          // setGeoJSON(geoJSON);
          setGeoJsonConverted(geoJSON);

          console.log("use state of geojson:", geoJsonConverted);
       
 
      

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

    const IcebergIcon = L.divIcon({
      html: `<svg width="10" height="10" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="10,0 10,10 0,5" fill="#ee82ee"/>
      </svg>`,
      className: 'iceberg-icon',
      iconSize: [10, 10],
      iconAnchor: [5, 5],
    });


    // const geoJSON = {
    //   type: 'FeatureCollection',
    //   features: geoJSON.map(dataPoint => ({
    //     type: 'Feature',
    //     geometry: {
    //       type: 'Point',
    //       coordinates: [dataPoint.longitude, dataPoint.latitude],
    //     },
    //     properties: {
    //       siteName: dataPoint.siteName,
    //       siteId: dataPoint.siteId,
    //       commonName: dataPoint.commonName,
    //       year: dataPoint.year,
    //       penguinCount: dataPoint.penguinCount,
    //     },
    //   })),
    // };

    if (geoJSON && Array.isArray(geoJSON.features)) {
      const markers = L.geoJSON(geoJSON, {
        pointToLayer: (feature, latlng) => {
          return L.marker(latlng, { icon: IcebergIcon }).bindPopup(
            `<strong>${feature.properties.siteName}</strong><br>Penguin Count: ${feature.properties.penguinCount}`
          );
        },
      });

      markers.addTo(mapRef.current);

    } else {
      console.error('Invalid penguinData format. Expected an array.');
    }
});
  }, [ mapRef]);

  return <div id="map" style={{ height: '100%', width: '100%' }}></div>;
};

export default ActualMap;
