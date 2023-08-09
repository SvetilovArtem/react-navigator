import axios from "axios"
export const getRoute = async (props: any): Promise<any> => {
    const { latStart, lonStart, latMiddle, lonMiddle, latEnd, lonEnd } = props
    try {
        const response = await axios.get(`http://router.project-osrm.org/route/v1/driving/${lonStart},${latStart};${lonMiddle},${latMiddle};${lonEnd},${latEnd}?steps=true&geometries=polyline`)
        if (response.statusText !== 'OK') {
            throw new Error('some error with response of osrm.org ');
        }
        return response.data
    } catch (error: any) {
        throw new Error(error.message);
    }
} 