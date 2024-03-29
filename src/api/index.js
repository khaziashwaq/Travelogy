import axios from 'axios';

export const getLocation = async(type, sw, ne)=>{
    try{
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, 
        {  params: {
          bl_latitude:sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude:ne.lat,
        },
        headers: {
          'X-RapidAPI-Key': '84e813b4e3mshaac2394090f0ca7p166e41jsn57b9b031f82b',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }});

        return data;
    }
    catch(error){
        console.log(error);
    }
}
