import React from 'react';
import "./SubmitPost.css";
import podcast from './img/podcast-icon.png';
import pencil from './img/pencil-icon.png';
import video from './img/video-camera-icon.png';



interface SubmitPostProps{
    name: string,
}


class SubmitPost extends React.Component<SubmitPostProps,{}> {

    render() { 
        return ( 
            <div className="Submit" >
                <h2 className="NamePost">{this.props.name}</h2>
                <div className="UploadUserBox">
                    {/* <input type="text" placeholder="Upload or write your post"/> */}
                    <textarea name="paragraph_text" placeholder="Upload or write your post"></textarea>
                </div>
  
                <input type="file"/>

                <p className="SubmitQuestion">What are you submitting?</p>
                <div className="rowPost">
                    <img className="submitIcon" alt="podcasticon" height="75" width="75" src={podcast}></img>
                    <img className="submitIcon" alt="videoicon" height="75" width="75" src={video}></img>
                    <img className="submitIcon" alt="writeupicon" height="75" width="75" src={pencil}></img>
                </div>
                <button className="button-default-submit">Submit</button>

            </div>
        )
    }
 }

 export default SubmitPost