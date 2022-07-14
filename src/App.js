import './App.css';
import Spinner from './components/Spinner';
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState(null);
  const [isImageShown, setIsImageShown] = useState(false);

  // Add the effect in the function body
  useEffect(() => {

    setTimeout(() => { setIsLoading(false); }, 2000);

  }, []);

  useEffect(() => {
    if(!isLoading) {
      getPicture()
    }    
  }, [isLoading]);

  const getPicture = () => {
    Axios.get('https://picsum.photos/seed/picsum/1920/800')
      .then(response => {
        setImage(response.config.url)
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="App">
      {isLoading && <Spinner />}
      {image && <button onClick={() => setIsImageShown(true)}>VER FOTO</button>}
      {isImageShown && <img src={image} />}
    </div>
  );
}

export default App;
