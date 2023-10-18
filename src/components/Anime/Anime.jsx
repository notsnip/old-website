import React, { useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import './Anime.css'

function Anime() {
  const [anime1,setanime1]=useState("Loading")
  const [img1,setimg1]=useState()
  const [ep1,setep1]=useState()

  const [anime2,setanime2]=useState("Loading")
  const [img2,setimg2]=useState()
  const [ep2,setep2]=useState()

  const [anime3,setanime3]=useState("Loading")
  const [img3,setimg3]=useState()
  const [ep3,setep3]=useState()


  fetch("https://api.jikan.moe/v4/users/snipc/full")
  .then((res) => res.json())
  .then((json) => {

    let fav_path= json.data.favorites.anime
    let enry_path= json.data.updates.anime

    // console.log(enry_path)
    setanime1(enry_path[0].entry.title)
    setimg1(enry_path[0].entry.images.jpg.image_url)
    setep1(enry_path[0].status)

    setanime2(enry_path[1].entry.title)
    setimg2(enry_path[1].entry.images.jpg.image_url)
    setep2(enry_path[1].status)

    setanime3(enry_path[2].entry.title)
    setimg3(enry_path[2].entry.images.jpg.image_url)
    setep3(enry_path[2].status)
  })
  return (
    <>
<FadeIn delay={500}>
    <h5>Recently Updated</h5>
      <div id="recently_updated_anime">
        <div className="anime">
          <img src={img1} alt="" />
          <span id='name'>{anime1}</span>
          <span id='count'></span>
        </div>

        <div className="anime">
          <img src={img2} alt="" />
          <span id='name'>{anime2}</span>
          <span id='count'>{ep2}</span>
        </div>

        <div className="anime">
          <img src={img3} alt="" />
          <span id='name'>{anime3}</span>
          <span id='count'>{ep3}</span>
        </div>
      </div>
      </FadeIn>
      </>
  )
}

export default Anime