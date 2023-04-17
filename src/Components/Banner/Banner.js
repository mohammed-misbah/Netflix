import React, { useEffect,useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {
    
        const [movie, setMovie] = useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        //   console.log(response.data.results[0])
          setMovie(response.data.results[1])
        })
    },[])
    return (
        <div style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
            <div className='content'>
                <h2 className='title'>{movie ? movie.title : ""}</h2>

                {/* <h1>Play List:</h1> */}
                <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h3 className='description'>{movie ? movie.overview : ""}</h3>
        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner
