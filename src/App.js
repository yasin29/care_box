import { createContext, useEffect, useState } from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons';
import Map from './components/Map/Map';
import Streams from './components/Streams/Streams';

export const Context = createContext(); //context api

function App() {
  const [streams, setStreams] = useState([]); //streams links
  const [select, setSelect] = useState([]); //selected link
  useEffect(() => {
    fetch('https://care-box-backend.herokuapp.com/api/v1/applicant_test/get_video_link/')
      .then(res => res.json())
      .then(data => setStreams(data));
  }, []); //fetching stream data
  return (
    <Context.Provider value={[select, setSelect]}>
      <div className="App">
        <div className="text-center bg-secondary text-white p-5">
          <div className="row">
            <div className="col-lg-8">
              <Streams select={select}></Streams>
            </div>
            <div className="col-lg-4">
              <h5>List of Videos</h5>
              {
                streams.map(stream => <Buttons key={stream.id} streams={stream}></Buttons>)
              }
            </div>
          </div>
        </div>
      </div>
      <Map></Map>
    </Context.Provider>
  );
}

export default App;
