import { useCallback, useEffect, useState } from 'react';
import './styles.sass';

function InputBar({
  onTokenChange,
}) {

  const [token, setToken] = useState('');
  const [lastToken, setLastToken] = useState();
  const [newTokenPasted, setNewTokenPasted] = useState(false);

  const handlePaste = useCallback((event) => {
    const value = (event.clipboardData || window.clipboardData).getData('text');
    setToken(value);
    setNewTokenPasted(true);
    event.preventDefault();
  }, []);

  const triggerTokenChange = useCallback(() => {
    if (token && token !== lastToken) {
      onTokenChange(token);
      setLastToken(token);
    }
  }, [token, lastToken, onTokenChange]);

  useEffect(() => {
    if (newTokenPasted) {
      triggerTokenChange(token);
      setNewTokenPasted(false);
    }
  }, [token, newTokenPasted, triggerTokenChange]);


  return (
    <div className="input-bar">
      <input
        placeholder="Paste an Instagram token here..."
        value={token}
        onChange={({ target: { value } }) => setToken(value)}
        onPaste={handlePaste}
      />
      <button onClick={() => triggerTokenChange()}>Fetch</button>
    </div>
  );
}

export default InputBar;