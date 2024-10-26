import React, { useState } from 'react';
import { verifyTwoFactorCode } from '../../services/AuthService';

function TwoFactorAuth() {
    const [code, setCode] = useState('');
    const [isVerified, setIsVerified] = useState(false);

    const handleVerify = async () => {
        const result = await verifyTwoFactorCode(code);
        setIsVerified(result);
    };

    return (
        <div>
            <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter 2FA Code" />
            <button onClick={handleVerify}>Verify</button>
            {isVerified && <p>Two-Factor Authentication Successful!</p>}
        </div>
    );
}

export default TwoFactorAuth;
