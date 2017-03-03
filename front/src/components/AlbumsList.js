import React, {Component} from 'react';
import {Link} from 'react-router';

class AlbumsList extends Component {
   constructor(){
        super();
        this.filterAlbum = this.filterAlbum.bind(this);
   }
    filterAlbum(albumList){
         const {songs} = this.props; 
        let spiceJSX = [];
        for( let i = 0; i<songs.length; i++){
            if (songs[i].album === albumList){
               spiceJSX.push(songs[i]) 
            }
        } console.log(spiceJSX);
        return spiceJSX

    }

    render() {
        let v = this.filterAlbum('Spice');
        let b = this.filterAlbum('Spice World');
        let y = this.filterAlbum('Forever');
        const {playSong} = this.props;
        
        const songsJSX = v.map((song, index) => {
            return (
                <li key={index}>
                    <button className="playButton" onClick={() => playSong(song.id)}>Play</button>
                    <Link to={`songs/${song.id}`}>{song.title}
                    </Link>
                </li>
            );
        })
        const songsJSX2 = b.map((song, index) => {
            return (
                <li key={index}>
                    <button className="playButton" onClick={() => playSong(song.id)}>Play</button>
                    <Link to={`songs/${song.id}`}>{song.title}
                    </Link>
                </li>
            );
        })
        const songsJSX3 = y.map((song, index) => {
            return (
                <li key={index}>
                    <button className="playButton" onClick={() => playSong(song.id)}>Play</button>
                    <Link to={`songs/${song.id}`}>{song.title}
                    </Link>
                </li>
            );
        })
        return (
            <div className="container-row">
                <div className="col-md-12 album">
                    <div className="col-md-4 albumImage">
                        <h1>Spice</h1>
                        <img src="../img/spice.jpg" alt=""/>
                    </div>
                    <div className="col-md-4 songs">
                        <ul className="albumsList">
                            {songsJSX}
                        </ul>
                    </div>
                    <div className="col-md-4 scary">
                    </div>
                </div>
                
                <div className="col-md-12 album">
                    <div className="col-md-4 albumImage">
                        <h1>Spice World</h1>
                        <img src="../img/spiceworld.jpg" alt=""/>
                    </div>
                    <div className="col-md-4 songs">
                        <ul className="albumsList">
                            {songsJSX2}
                        </ul>
                    </div>
                    <div className="col-md-4 scary">
                    </div>
                </div>
                <div className="col-md-12 album">
                    <div className="col-md-4 albumImage">
                        <h1>Forever</h1>
                        <img src="../img/forever.png" alt=""/>
                    </div>
                    <div className="col-md-4 songs">
                        <ul className="albumsList">
                            {songsJSX3}
                        </ul>
                    </div>
                    <div className="col-md-4 scary">
                    </div>
                </div>
            </div>

        )
    }
}

export default AlbumsList;