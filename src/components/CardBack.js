import React from 'react';

const CardBack = (props) => {
  let trailerUrl = 'https://static-cdn.jtvnw.net/emoticons/v1/1003190/3.0';

  if (props.animeObj.trailer_site !== 'null') {
    trailerUrl = `https://www.youtube.com/embed/${props.animeObj.trailer_id}`
    return <iframe className="trailer" src={trailerUrl}> </iframe>
  }
  return (
    <div className="placehold">
      {/* <img src={trailerUrl} alt={trailerUrl} /> */}
      <h1 className="no-trailer">No Trailer!</h1>
    </div>
  )
  
}

export default CardBack;

