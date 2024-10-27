


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){

    const INIT_URL = "https://images.unsplash.com/photo-1672226405717-697c84f48f9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    


const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
const COLD_URL = "https://images.unsplash.com/photo-1613082872842-646dce654eb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
const RAIN_URL = "https://images.unsplash.com/uploads/14116603688211a68546c/30f8f30b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJhaW58ZW58MHx8MHx8fDA%3D";





    return (
        <div className="InfoBox">

<div className="cardContainer">
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
      {info.city}  &nbsp;
      {
info.humidity>80?<ThunderstormIcon/>:info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
      }
        </Typography>
        <Typography variant="body2"  color= "text.secondary" component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{info.weather}</i> and  feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}