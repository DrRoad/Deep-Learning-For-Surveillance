import React, { Component } from 'react';
import './App.css';
import TagsBar from './components/tagsBar';
import ReactPlayer from 'react-player'
import VideoList from './components/videoList';

const mock_data = [
  {
    tStart: 35,
    tEnd: 40,
    tag: 'person'
  },
  {
    tStart: 21,
    tEnd: 31,
    tag: 'dog'
  },
  {
    tStart: 3,
    tEnd: 10,
    tag: 'iAmSleepy'
  }
];


class App extends Component {

  constructor(){
    super();
    this.state = {
      data: mock_data,
      vidLen: 291,
      played: 0,
      url: null
    };
    this.handleClickSecond = this.handleClickSecond.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
  }

  handleClickSecond(sec) {
    this.refs.player.seekTo(sec);
  };

  handleSelectVideo(video){
    this.setState({ url: video.videoUrl });


  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
            {
              this.state.url ?
                <div>
                  <ReactPlayer

                    url={this.state.url}
                    controls
                    ref="player"
                    width="inherit"
                    fileConfig={{ attributes: {preload : 'none'}}}
                  />
                  <TagsBar data={this.state.data} vidLen={this.state.vidLen} onClickSecond={this.handleClickSecond}/>
                </div>
                :
                <h2>Please select a video</h2>
            }
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <VideoList selectVid={this.handleSelectVideo} onClick={this.handleSelectVideo} selectedVideoUrl={this.state.url}/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
