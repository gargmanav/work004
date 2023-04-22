import React from 'react'
import "./cards.css"
const Cards = () => {
  return (
    <>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div className='mainbox'>
        <img src='https://static.abplive.com/wp-content/uploads/sites/2/2021/03/02213627/nora-fatehi-02.gif?impolicy=abp_cdn&imwidth=650' alt=''></img>
        <h2>Nora fatehi</h2>
        <p>I enjoy to drink one coffee a day</p>
        <div className='lastflex'>
            <div>
                <h3>172</h3>
                <p>POSTS</p>
            </div>
             <div>
                <h3>47</h3>
                <p>FOLLOWERS</p>
            </div>
             <div>
                <h3>20</h3>
                <p>Following</p>
            </div>
        </div>
        <div className='buttonbox'>
            <button>Follow</button>
            <button>MESSAGE</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Cards