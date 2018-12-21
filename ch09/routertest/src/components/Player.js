import React, { Component } from 'react';
import Youtube from "./Youtube";

class Player extends Component {

    bindYoutubeLink = (props) => {  
        let song = props.songs.find((song)=> {
            return song.id === parseInt(props.match.params.songid, 10);
        }); 
        if (song !== null) {
            this.currentLink = song.youtube_link;
        } else {
            this.currentLink = '';
        }
    }
    
    /* deprecate되어서 github에는 새로운 메소드로 변경된 버전이 올라가 있다. */
    componentWillMount() {
        this.bindYoutubeLink(this.props);  
    }

    /* deprecate되어서 github에는 새로운 메소드로 변경된 버전이 올라가 있다. */
    componentWillReceiveProps(nextProps) {
        this.bindYoutubeLink(nextProps);
    }
    
    render() {
        return (
            <div className="well">
                { this.currentLink !== "" ? 
                <Youtube video={this.currentLink} 
                    width="320" height="240"
                    autoplay="1" rel="1" modest="1" />     
                : '' }
            </div>
        )
    }
}

export default Player;