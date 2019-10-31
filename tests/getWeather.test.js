import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

let mock = new MockAdapter(axios)

let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=11221&appid=f1ac86fa2ced8c0e853ba36ac446314d'

mock.onGet(weatherUrl).reply(200, {
  data: [
    { id: 1, main: 'Rainy' }
  ]
})

const getWeather = () => axios.get(weatherUrl)

test('returns weather conditions', async () => {
  const res = await getWeather()
  console.log(res.data)
  expect(res.data.data[0].main).toBe('Rainy')
})