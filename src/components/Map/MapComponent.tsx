import { Marker, Polyline, TileLayer, Popup, useMap, ZoomControl} from 'react-leaflet'
import { useAppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'
import {useEffect, useState} from 'react'
import {setIsPolylineFetching, setPolylineData} from '../../redux/slices/polylineSlice'
import { routeData, selectedRoute } from '../../redux/selectors/selectors'
import polyline from '@mapbox/polyline'
import styles from './Map.module.scss'

const redOptions = { color: 'red' }

const Map = () => {
  const dispatch = useAppDispatch()
  const { routes } = useSelector(routeData)
  const selected = useSelector(selectedRoute)
  const map = useMap()

  const coords = {
    lonStart: selected?.lngStart || null,
    latStart: selected?.latStart || null,
    lonMiddle: selected?.lngMiddle || null,
    latMiddle: selected?.latMiddle || null,
    lonEnd: selected?.lngEnd || null,
    latEnd: selected?.latEnd || null
  }
  const [polylineCoords, setPolylineCoords] = useState<[number, number][]>([])

  useEffect(() => {
    dispatch(setIsPolylineFetching(true))
    dispatch(setPolylineData(coords))
    if(routes) {
      const encodedLine = routes[0]?.geometry
      const waypointsData = polyline.decode(encodedLine)
      setPolylineCoords(waypointsData)

      const bounds: L.LatLngBoundsLiteral = [[coords.latStart!, coords.lonStart!], [coords.latMiddle || 0, coords.lonMiddle || 0], [coords.latEnd!, coords.lonEnd!]]
      map.flyToBounds(bounds, {
        maxZoom: map.getBoundsZoom(bounds, true),
        duration: 1,
        animate: true,
        padding: [100, 100]
      })
    }
  }, [selected])

  return (
    <div className={styles.map}>
        <TileLayer
          attribution={String(process.env.REACT_APP_MAP_ATTRIBUTION)}
          url={String(process.env.REACT_APP_MAP_URL)}
        />
        <ZoomControl position="topright" />
        {
          selected && (
              <>
                <Marker position={[coords.latStart || 0, coords.lonStart || 0]}>
                  <Popup>
                    <div>Point: 1</div>
                  </Popup>
                </Marker>
                <Marker position={[coords.latMiddle || 0, coords.lonMiddle || 0]}>
                  <Popup>
                    <div>Point: 2</div>
                  </Popup>
                </Marker>
                <Marker position={[coords.latEnd || 0, coords.lonEnd || 0]}>
                  <Popup>
                    <div>Point: 3</div>
                  </Popup>
                </Marker>
              </>
            )
        }
        <Polyline pathOptions={redOptions} positions={polylineCoords} />
    </div>
  )
}

export default Map