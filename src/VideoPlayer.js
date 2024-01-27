
import React from 'react';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }

  render() {
    return (
      <div>
        <video
          src={this.props.videoUrl}
          controls
          onPlay={() => {
            this.setState({
              isPlaying: true,
            });
          }}
          onPause={() => {
            this.setState({
              isPlaying: false,
            });
          }}
        />
      </div>
    );
  }
}

export default VideoPlayer; // Ekspor kelas VideoPlayer sebagai default
