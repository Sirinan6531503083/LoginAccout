import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginW.css'; 
import logo from './image/logomfu.jpg'; 

const LoginW = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [language, setLanguage] = useState('EN');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted with password: ', password);
        navigate('/nextPage'); // 
    };

    const toggleLanguage = () => {
        setLanguage(language === 'EN' ? 'TH' : 'EN');
    };

    const getText = () => {
        return language === 'EN'
            ? {
                header: 'MFU ECOMMERCE',
                subHeader: 'MFU ECOMMERCE',
                description: 'To continue, first verify that it\'s you',
                footer: 'Mae Fah Luang University',
            }
            : {
                header: 'MFU ECOMMERCE (TH)',
                subHeader: 'MFU ECOMMERCE',
                description: 'ในการดำเนินการต่อ โปรดยืนยันว่าคุณเป็นผู้ใช้',
                footer: 'มหาวิทยาลัยแม่ฟ้าหลวง',
            };
    };

    return (
        <div className="login-page">
            <div className="navbar">
                <div className="navbar-left">
                    <img src={logo} alt="MFU Logo" className="navbar-logoo" />
                    <span>{getText().subHeader}</span>
                </div>
                <div className="navbar-right">
                    <div className="account-menu">
                        <span>ACCOUNT</span>
                        <div className="dropdown">
                            <button className="dropdown-link" onClick={() => navigate('/profile')}>
                                Profile
                            </button>
                            <button className="dropdown-link" onClick={() => navigate('/logout')}>
                                Logout
                            </button>
                        </div>
                    </div>
                    <button className="language-toggle" onClick={toggleLanguage}>
                        {language}
                    </button>
                </div>
            </div>
            <div className="login-container">
                <div className="login-box">
                    <div className="login-header">
                        <img src={logo} alt="MFU Logo" className="logo1" />
                        <h1>{getText().header}</h1>
                        <p>{getText().description}</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="email-display">
                            <span className="email-icon">👤</span>
                            <span className="email-text">@lamduan.mfu.ac.th</span>
                        </div>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <div className="show-password">
                            <input
                                type="checkbox"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                            />
                            <label>Show password</label>
                        </div>
                        <button type="submit" className="next-button">Next</button>
                    </form>
                    <button
                        type="button"
                        className="forgot-link"
                        onClick={() => navigate('/forgot-password')}
                    >
                        Forgot password?
                    </button>
                </div>
            </div>
            <footer className="footer">
                <p>{getText().footer}</p>
            </footer>
        </div>
    );
};

export default LoginW;
