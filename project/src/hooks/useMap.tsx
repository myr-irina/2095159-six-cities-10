/* import { useEffect, useState } from 'react';
import leaflet, { Map } from 'leaflet';

function useMap(mapRef: any, city: any) {
  const [map, setMap] = useState<Map | null>(null);
  // eslint-disable-next-line no-console
  console.log({ city });

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log({ map });
    if (mapRef.current !== null && map === null) {
      // eslint-disable-next-line no-console
      console.log('ioio');
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          }
        )
        .addTo(instance);

      setMap(instance);
    }
    return () => {
      map?.remove();
      setMap(null);
    };
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
 */

import {useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';


function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: any
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude
        },
        zoom: 10
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
