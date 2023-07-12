import React from 'react'

const Render = () => {
    return (
    <div>
        {mediaData.map( data => (
            <div className="component">{data.followers}<br />
                Subscribers<br />
                on { data.media}</div>
        ) )}
            </div>
    )
}

const SocialMedia = () => {

    const mediaData = [
        {
            followers: '900K+',
            media:'Youtube'
        }
        ,
        {
            followers: '900K+',
            media:'Twitter'
        },
        {
            followers: '900K+',
            media:'Instagram'
        },
        {
            followers: '900K+',
            media:'LinkedIn'
        }
    ]

  return (
      <div className="row" style={{backgroundColor:'#8675E1'}}>
        <img src="../assets/default.e71d14e.avif" alt="aaaa" />
          
    </div>
  )
}

export default SocialMedia