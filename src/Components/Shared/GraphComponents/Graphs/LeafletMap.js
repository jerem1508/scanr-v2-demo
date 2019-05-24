import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Map, TileLayer, Marker, withLeaflet, MapControl, Tooltip, ZoomControl,
} from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import PrintControlDefault from 'react-leaflet-easyprint';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import yellowIcon from './MarkerStyle';

import './customLeaflet.scss';

const PrintControl = withLeaflet(PrintControlDefault);

class Search extends MapControl {
  createLeafletElement() {
    return GeoSearchControl({
      // style: 'button',
      autoClose: true,
      searchLabel: 'Ex : pays, villes, CP...',
      // keepResult: false,
      position: 'topright',
      provider: new OpenStreetMapProvider(),
    });
  }
}

const GeoSearch = withLeaflet(Search);
type State = {
  lat: number,
  lng: number,
  zoom: number,
}

// export default class SimpleExample extends Component<{}, State> {
class LeafletMap extends Component<{}, State> {
  constructor() {
    super();
    this.print = this.print.bind(this);
    this.data = [];
    this.label = [];
    this.exportChartPng = this.exportChartPng.bind(this);
  }

  state = {
    lat: 46.5,
    lng: 2.618787,
    zoom: 5,
  }

  print() {
    this.printControl.printMap('A4Portrait', 'MyFileName');
  }

  exportChartPng() {
    this.printControl.printMap('A4Portrait', this.props.filename);
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    // const printOptions = {
    //   position: 'topleft',
    //   sizeModes: ['Current', 'A4Portrait', 'A4Landscape'],
    //   hideControlContainer: false
    // };
    const downloadOptions = {
      position: 'bottomright',
      filename: this.props.filename,
      sizeModes: ['Current', 'A4Portrait', 'A4Landscape'],
      title: 'Télécharger au format PNG',
      hideControlContainer: false,
      exportOnly: true,
    };
    // htmlToImage.toPng(document.getElementById('mapContainer'))
    //   .then(function (dataUrl) {
    //     download(dataUrl, 'my-node.png');
    //   });

    // alert(data[0].address[0].gps.lat);
    // alert(data[0].address[0].gps.lon);

    const pos = this.props.data.data;

    pos.forEach((element) => {
      const tmp = [];
      try {
        tmp.push(element.address[0].gps.lat);
        tmp.push(element.address[0].gps.lon);
        this.data.push(tmp);
        this.label.push(element.label.fr);
      } catch (error) {
        console.log(error);
      }
    });
    this.createMarkers = () => {
      const markers = [];
      for (let i = 0; i < this.data.length; i += 1) {
        markers.push(<Marker icon={yellowIcon} position={this.data[i]}><Tooltip>{this.label[i]}</Tooltip></Marker>);
      }
      return markers;
    };
    return (
      <div style={{ marginLeft: 'auto', marginRight: 'auto', width: 'auto' }}>
        <Map zoomControl={false} center={position} zoom={this.state.zoom} style={{ height: '40vh', borderStyle: 'solid' }} minZoom={2} maxZoom={19}>
          <TileLayer
            attribution='&amp;copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &amp;copy <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <MarkerClusterGroup maxClusterRadius={20}>
            {this.createMarkers()}
          </MarkerClusterGroup>
          <ZoomControl position="bottomleft" />
          {/* <PrintControl ref={(ref) => { this.printControl = ref; }} {...printOptions} /> */}
          <PrintControl style={{ display: 'none' }} ref={(ref) => { this.printControl = ref; }} {...downloadOptions} />
          <GeoSearch />
        </Map>
      </div>
    );
  }
}

export default LeafletMap;

LeafletMap.propTypes = {
  data: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
};
