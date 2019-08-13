import React from 'react';
import YouTube from 'react-youtube';


class YouTubeEmbed extends React.Component {
    render() {
        const { id } = this.props;
        const opts = {
            height: '600',
            width: '800',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                loop: 1,
            }
        };

        return (
            <YouTube
                videoId={id}
                opts={opts}
            // onReady={this._onReady}
            />
        );
    }

    //   _onReady(event) {
    //     // access to player in all event handlers via event.target
    //     event.target.pauseVideo();
    //   }
}

export default YouTubeEmbed;
