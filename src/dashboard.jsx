import React, { useState, useEffect } from 'react';
import './styles/dashboard.css'


function Dashboard() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const apiResponse = [
        { title: "Mine", artist: "Taylor Swift", album: "Speak Now", bpm: 150 },
        { title: "The Story of Us", artist: "Taylor Swift", album: "Speak Now", bpm: 150 },
        { title: "Enchanted", artist: "Taylor Swift", album: "Speak Now", bpm: 150 },
        { title: "Back to December", artist: "Taylor Swift", album: "Speak Now", bpm: 148 },
        { title: "Long Live", artist: "Taylor Swift", album: "Speak Now", bpm: 152 },
        { title: "Dear John", artist: "Taylor Swift", album: "Speak Now", bpm: 140 },
        { title: "Sparks Fly", artist: "Taylor Swift", album: "Speak Now", bpm: 153 },
      ];
      setSongs(apiResponse);
    };

    fetchSongs();
  }, []);

  return (
    <div className="dashboard-container">
      <header className="header">Runify</header>
      <div className="content">
        <div className="box">
          <h2 className="box-title">Afternoon Run 2</h2>
          <div className="run-info-container">
            <img src="/logo192.png" alt="Album cover" className="run-image" />
            <div className="run-stats">
              <p>Distance: 6km</p>
              <p>Duration: 40min</p>
              <p>Average BPM: 150</p>
            </div>
          </div>

  <div className="button-group">
    <button className="cancel-btn">Cancel</button>
    <button className="save-btn">Save</button>
  </div>
</div>

        <div className="box playlist-box">
          <h2 className="box-title">Preview Playlist</h2>
          <div className="song-list">
            {songs.map((song, index) => (
              <div className="song" key={index}>
                  <img src="/logo192.png" alt={song.album} className="song-image" />
                  <div className="song-details">
                    <p className="song-title"><strong>{song.title}</strong></p>
                    <p className="song-info">Artist: {song.artist}</p>
                    <p className="song-info">Album: {song.album}</p>
                    <p className="song-info">BPM: {song.bpm}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
