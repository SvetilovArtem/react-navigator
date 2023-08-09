import React from 'react';
import TableRoutes from './components/TableRoutes/TableRoutes';
import MapComponent from './components/Map/MapComponent';
import {Col, Row} from "antd";
import {Preloader} from "./components/Preloader/Preloader";
import {useSelector} from "react-redux";
import {isFetching} from "./redux/selectors/selectors";
import {MapContainer} from "react-leaflet";
import {LatLngExpression} from "leaflet";

function App() {
  const isPolylineFetching = useSelector(isFetching)
  const routesData = [
    {
      key: '1',
      latStart: 59.84,
      lngStart: 30.29,
      latMiddle: 59.82,
      lngMiddle: 30.42,
      latEnd: 59.83,
      lngEnd: 30.38
    },
    {
      key: '2',
      latStart: 59.82,
      lngStart: 30.42,
      latMiddle: 59.82,
      lngMiddle: 30.41,
      latEnd: 59.84,
      lngEnd: 30.29
    },
    {
      key: '3',
      latStart: 59.83,
      lngStart: 30.38,
      latMiddle: 59.84,
      lngMiddle: 30.29,
      latEnd: 59.82,
      lngEnd: 30.41
    },
  ]

  const center: LatLngExpression = [59.83, 30.3]

  return (
    <div className="App">
      <div className='table'>
        <Row>
          <Col>
            <TableRoutes tableData={routesData} />
          </Col>
        </Row>
      </div>
      <MapContainer center={center} zoom={12} scrollWheelZoom={false} zoomControl={false}>
        <MapComponent />
      </MapContainer>
      {isPolylineFetching && <Preloader isLoading={isPolylineFetching} /> }
    </div>
  );
}

export default App;
