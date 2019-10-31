async function getWeather() {
    
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=11221&appid=f1ac86fa2ced8c0e853ba36ac446314d`)
        console.log(res.data)
        return res.data
    }
    catch(err) {
        console.log(err)
    }
    
}

export default getWeather