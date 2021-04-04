import { useState } from "react";
import { getInstagramData } from "../../service/api";
import InputBar from "../input-bar";
import Media from "../media";
import Profile from "../profile";
import './styles.sass';

function Home() {
  const [result, setResult] = useState({});
  const [message, setMessage] = useState();

  async function handleTokenChange(token) {
    setMessage('Fetching...');
    setResult({});

    try {
      const igData = await getInstagramData(token);
      setResult(igData);
      setMessage('');
    } catch (e) {
      setMessage(e.message);
    }
  }

  const { profile, media } = result;

  return (
    <div className="home">
      <InputBar onTokenChange={handleTokenChange} />
      {message && <h2>{message}</h2>}
      {profile && <Profile {...profile} />}
      {media && <Media media={media} />}
    </div>
  );
}

export default Home;