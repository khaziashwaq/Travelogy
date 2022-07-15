import axios from 'axios';
const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';


export const getLocation = async(sw, ne)=>{
    try{
        const {data:{data}} = await axios.get(URL, 
        {  params: {
          bl_latitude:sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude:ne.lat,
        },
        headers: {
          'X-RapidAPI-Key': 'd11bd73277msh3f9aa55824907c6p1a8247jsnedc67b6a5228',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }});

        return data;
    }
    catch(error){
        console.log(error);
    }
}