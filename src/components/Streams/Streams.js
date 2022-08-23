import React from 'react';
import ReactPlayer from 'react-player';
//using react player npm
const Streams = (props) => {
    const link = props.select;
    console.log(link)
    return (
        <div>
            {
                link.length !== 0 ? <ReactPlayer className="border border-5" url={link} playing={true}
                    light={true} controls={true} loop={true} width={640}
                    height={360} />
                    : <img src="https://i.ibb.co/bWnTt3M/Red-And-Blue-Futuristic-Game-You-Tube-Thumbnail.png" width={640} height={360} alt="" />
            }
        </div>
    );
};

export default Streams;