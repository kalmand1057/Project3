import React from 'react'
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function GoogleMap() {
  return (
    <iframe
        // width="600"
        // height="450"
        // frameborder="0" style="border:0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDuaZFYBgwyyEUx46x6qOKEWFBnVgKCRNE&q=Space+Needle,Seattle+WA" allowfullscreen>
    </iframe>
  )
}

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// function Googlemap() {
//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyDuaZFYBgwyyEUx46x6qOKEWFBnVgKCRNE"
//     >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//     </LoadScript>
//   )
// }

// export default React.memo(Googlemap)