import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/offer';

type MapScreenProps = {
  offers: Offer[];
  selectedOfferId?: number;
};


const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: MapScreenProps): JSX.Element {
  const { offers, selectedOfferId } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].city);

  useEffect(() => {
    const markerGroup = layerGroup([]);
    if (map) {
      offers.forEach(({ location, id }) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker.setIcon(
          selectedOfferId !== undefined && id === selectedOfferId
            ? currentCustomIcon
            : defaultCustomIcon
        );
        markerGroup.addLayer(marker);
      });
      markerGroup.addTo(map);
    }
    return () => {
      map?.removeLayer(markerGroup);
    };
  }, [map, offers, selectedOfferId]);

  return (
    <div className="cities__map" style={{ height: '100%' }} ref={mapRef}></div>
  );
}

export default Map;
