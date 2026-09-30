import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Polygon, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default Leaflet icon paths in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Helper component to adjust map view when selected parcel changes
function MapFocusHandler({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom || 16, { duration: 1 });
    }
  }, [center, zoom, map]);
  return null;
}

export default function MapComponent({ parcels, selectedParcel, onSelectParcel, onOpenDigitalTwin, baseMap = 'satellite' }) {
  const defaultCenter = selectedParcel ? selectedParcel.center : [18.545, 73.740];
  const defaultZoom = selectedParcel ? 16 : 14;

  const getPolygonStyle = (parcel) => {
    const isSelected = selectedParcel && selectedParcel.id === parcel.id;
    
    if (parcel.verificationStatus === 'ISSUES_DETECTED') {
      return {
        color: isSelected ? '#0757A0' : '#D88900',
        weight: isSelected ? 3.5 : 2,
        fillColor: '#D88900',
        fillOpacity: isSelected ? 0.5 : 0.25,
        dashArray: '4, 4'
      };
    }
    
    if (parcel.statusSummary.satelliteChange === 'ALERT') {
      return {
        color: isSelected ? '#0757A0' : '#C62828',
        weight: isSelected ? 3.5 : 2,
        fillColor: '#C62828',
        fillOpacity: isSelected ? 0.5 : 0.3
      };
    }

    return {
      color: isSelected ? '#0757A0' : '#16803C',
      weight: isSelected ? 3.5 : 1.5,
      fillColor: '#16803C',
      fillOpacity: isSelected ? 0.45 : 0.2
    };
  };

  const tileLayerUrls = {
    satellite: {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution: 'Esri, Maxar, Earthstar Geographics'
    },
    streets: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; OpenStreetMap contributors'
    },
    topo: {
      url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      attribution: '&copy; OpenTopoMap'
    }
  };

  const activeTile = tileLayerUrls[baseMap] || tileLayerUrls.satellite;

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <MapContainer 
        center={defaultCenter} 
        zoom={defaultZoom} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <MapFocusHandler center={selectedParcel?.center} zoom={16} />
        
        <TileLayer
          attribution={activeTile.attribution}
          url={activeTile.url}
          maxZoom={19}
        />

        {parcels.map((parcel) => (
          <Polygon
            key={parcel.id}
            positions={parcel.coordinates}
            pathOptions={getPolygonStyle(parcel)}
            eventHandlers={{
              click: () => onSelectParcel(parcel)
            }}
          >
            <Popup>
              <div style={{ padding: '0.2rem', minWidth: '220px', fontFamily: 'Inter, sans-serif' }}>
                <div style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '0.4rem', marginBottom: '0.4rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0757A0', textTransform: 'uppercase' }}>
                    ULPIN Identity
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#063B6D' }}>
                    {parcel.ulpin}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#667085' }}>
                    Survey No: {parcel.surveyNo} | {parcel.village}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', fontSize: '0.78rem', marginBottom: '0.6rem' }}>
                  <div>
                    <span style={{ color: '#667085' }}>Area:</span> <strong>{parcel.area}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#667085' }}>Land Use:</span> <strong>{parcel.landUse}</strong>
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <span style={{ color: '#667085' }}>Owner:</span> <br/>
                    <strong style={{ fontSize: '0.8rem' }}>{parcel.owner}</strong>
                  </div>
                </div>

                <div style={{ marginBottom: '0.6rem' }}>
                  {parcel.verificationStatus === 'VERIFIED' ? (
                    <span style={{ background: '#EDF7ED', color: '#16803C', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 700 }}>
                      ✓ Verified in Connected Data
                    </span>
                  ) : (
                    <span style={{ background: '#FFF8E6', color: '#D88900', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 700 }}>
                      ⚠ {parcel.issues.length} Data Discrepancy Flagged
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onOpenDigitalTwin(parcel)}
                  style={{
                    width: '100%',
                    backgroundColor: '#0757A0',
                    color: '#FFFFFF',
                    border: 'none',
                    padding: '0.45rem',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Open Parcel Digital Twin →
                </button>
              </div>
            </Popup>
          </Polygon>
        ))}
      </MapContainer>
    </div>
  );
}
