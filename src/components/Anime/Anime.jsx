import React, { useState } from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import './Anime.css'

function Anime() {

  // recently updated anime 
  const [anime1,setanime1]=useState("Loading")
  const [img1,setimg1]=useState()
  const [ep1,setep1]=useState()

  const [anime2,setanime2]=useState("Loading")
  const [img2,setimg2]=useState()
  const [ep2,setep2]=useState()

  const [anime3,setanime3]=useState("Loading")
  const [img3,setimg3]=useState()
  const [ep3,setep3]=useState()

  // favorites

  const [fav_anime1,setfav_anime1]=useState("Loading")
  const [fav_img1,setfav_img1]=useState()
  const [fav_ep1,setfav_ep1]=useState()

  const [fav_anime2,setfav_anime2]=useState("Loading")
  const [fav_img2,setfav_img2]=useState()
  const [fav_ep2,setfav_ep2]=useState()

  const [fav_anime3,setfav_anime3]=useState("Loading")
  const [fav_img3,setfav_img3]=useState()
  const [fav_ep3,setfav_ep3]=useState()

  const [fav_anime4,setfav_anime4]=useState("Loading")
  const [fav_img4,setfav_img4]=useState()
  const [fav_ep4,setfav_ep4]=useState()

  const [fav_anime5,setfav_anime5]=useState("Loading")
  const [fav_img5,setfav_img5]=useState()
  const [fav_ep5,setfav_ep5]=useState()

  const [fav_anime6,setfav_anime6]=useState("Place to be filled")
  const [fav_img6,setfav_img6]=useState("https://e0.pxfuel.com/wallpapers/994/922/desktop-wallpaper-vertical-anime-pemandangan-anime.jpg")
  const [fav_ep6,setfav_ep6]=useState()

  const [fav_anime7,setfav_anime7]=useState("Place to be filled")
  const [fav_img7,setfav_img7]=useState("https://e0.pxfuel.com/wallpapers/994/922/desktop-wallpaper-vertical-anime-pemandangan-anime.jpg")
  const [fav_ep7,setfav_ep7]=useState()


  fetch("https://api.jikan.moe/v4/users/snipc/full")
  .then((res) => res.json())
  .then((json) => {

    let fav_path= json.data.favorites.anime
    let anime_path= json.data.updates.anime

    // recently updated
    setanime1(anime_path[0].entry.title)
    setimg1(anime_path[0].entry.images.jpg.image_url)
    setep1(anime_path[0].status)

    setanime2(anime_path[1].entry.title)
    setimg2(anime_path[1].entry.images.jpg.image_url)
    setep2(anime_path[1].status)

    setanime3(anime_path[2].entry.title)
    setimg3(anime_path[2].entry.images.jpg.image_url)
    setep3(anime_path[2].status)

    // favourites

    setfav_anime1(fav_path[0].title)
    setfav_img1(fav_path[0].images.jpg.image_url)
    setfav_ep1(fav_path[0].start_year)

    setfav_anime2(fav_path[1].title)
    setfav_img2(fav_path[1].images.jpg.image_url)
    setfav_ep2(fav_path[1].start_year)

    setfav_anime3(fav_path[2].title)
    setfav_img3(fav_path[2].images.jpg.image_url)
    setfav_ep3(fav_path[2].start_year)

    setfav_anime4(fav_path[3].title)
    setfav_img4(fav_path[3].images.jpg.image_url)
    setfav_ep4(fav_path[3].start_year)

    setfav_anime5(fav_path[4].title)
    setfav_img5(fav_path[4].images.jpg.image_url)
    setfav_ep5(fav_path[4].start_year)

    setfav_anime6(fav_path[5].title)
    setfav_img6(fav_path[5].images.jpg.image_url)
    setfav_ep6(fav_path[5].start_year)

    setfav_anime7(fav_path[6].title)
    setfav_img7(fav_path[6].images.jpg.image_url)
    setfav_ep7(fav_path[6].start_year)

    


  })
  return (
    <>
<FadeIn delay={500}>
<title>anime • snipc</title>

      <h5>most-liked</h5>
      <div id="favourite_anime">
      <div className="anime">
          <img src={fav_img1} alt="" />
          <span id='name'>{fav_anime1}</span>
          <span id='count'>{fav_ep1}</span>
        </div>

        <div className="anime">
          <img src={fav_img2} alt="" />
          <span id='name'>{fav_anime2}</span>
          <span id='count'>{fav_ep2}</span>
        </div>

        <div className="anime">
          <img src={fav_img3} alt="" />
          <span id='name'>{fav_anime3}</span>
          <span id='count'>{fav_ep3}</span>
        </div>
        
        <div className="anime">
          <img src={fav_img4} alt="" />
          <span id='name'>{fav_anime4}</span>
          <span id='count'>{fav_ep4}</span>
        </div>

        <div className="anime">
          <img src={fav_img5} alt="" />
          <span id='name'>{fav_anime5}</span>
          <span id='count'>{fav_ep5}</span>
        </div>

        <div className="anime">
          <img src={fav_img6} alt="" />
          <span id='name'>{fav_anime6}</span>
          <span id='count'>{fav_ep6}</span>
        </div>

        <div className="anime">
          <img src={fav_img7} alt="" />
          <span id='name'>{fav_anime7}</span>
          <span id='count'>{fav_ep7}</span>
        </div>



      </div>
      <h5>freshly-updated</h5>
      <div id="recently_updated_anime">
        <div className="anime">
          <img src={img1} alt="" />
          <span id='name'>{anime1}</span>
          <span id='count'>{ep1}</span>
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