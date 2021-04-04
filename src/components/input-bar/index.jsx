import { useState } from 'react';
import './styles.sass';

function InputBar({
  onTokenChange,
}) {

  const [token, setToken] = useState('');
  const [lastToken, setLastToken] = useState();

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      triggerTokenChange();
    }
  };

  const triggerTokenChange = () => {
    if (token && token !== lastToken) {
      onTokenChange(token);
      setLastToken(token);
    }
  };

  return (
    <div className="input-bar">
      <input
        placeholder="Enter a Instagram token..."
        value={token}
        onChange={({ target: { value } }) => setToken(value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={() => triggerTokenChange()}>Fetch</button>
    </div>
  );
}

export default InputBar;