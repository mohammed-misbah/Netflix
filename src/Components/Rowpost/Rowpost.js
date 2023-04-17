import React,{useEffect,useState} from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'
import Youtube from 'react-youtube'


function Rowpost(props) {
    const [movies,setMovie] = useState([])
    const [UrlId,setUrlId] = useState('')
    useEffect(() => {
      axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovie(response.data.results)
      })
      // .catch(err=>{
      //   alert('Network Error')
      // })
    })
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handleMovie =(id)=>{
      console.log(id)
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
        }else{
          console.log('Array empty')
        }
      })
    }
    return (
     <div className='row'>
       <h3>{props.title}</h3>
        <div className='row_posters'>
          {movies.map((obj)=>
         
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>
          )} 
      </div>
      { UrlId &&  <Youtube opts={opts} videoId={UrlId.key} /> } 
    </div>
  )
}

export default Rowpost
