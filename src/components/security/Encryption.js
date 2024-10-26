import React, { useState } from 'react';
import { encryptData, decryptData } from '../../services/EncryptionService';

function Encryption() {
    const [input, setInput] = useState('');
    const [encrypted, setEncrypted] = useState('');
    const [decrypted, setDecrypted] = useState('');

    const handleEncrypt = () => {
        const result = encryptData(input);
        setEncrypted(result);
    };

    const handleDecrypt = () => {
        const result = decryptData(encrypted);
        setDecrypted(result);
    };

    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter data to encrypt" />
            <button onClick={handleEncrypt}>Encrypt</button>
            {encrypted && <p>Encrypted: {encrypted}</p>}
            <button onClick={handleDecrypt}>Decrypt</button>
            {decrypted && <p>Decrypted: {decrypted}</p>}
        </div>
    );
}

export default Encryption;
