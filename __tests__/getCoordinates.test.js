import { getCoordinates } from '../src/client/js/getLocalWeather';
import 'regenerator-runtime/runtime'

test('Gets correct lat coordinate for Amsterdam', async (done) => {
    const data = await getCoordinates('Amsterdam')
    const lat = data.geonames[0].lat
    expect(lat).toEqual('52.37403')
    done()
}); 
