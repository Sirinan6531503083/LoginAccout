import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './image/logomfu.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [language, setLanguage] = useState('EN');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted with email: ', email);
        navigate('/loginW');
    };

    const toggleLanguage = () => {
        setLanguage(language === 'EN' ? 'TH' : 'EN');
    };

    const getText = () => {
        return language === 'EN'
            ? {
                welcome: 'MFU ECOMMERCE',
                signIn: "Sign in to continue to Email (Lamduan Email)",
                emailPlaceholder: 'Email',
                forgotEmail: 'Forgot email?',
                guestInfo: 'Not your computer? Use Guest mode to sign in privately.',
                learnMore: 'Learn more',
                createAccount: 'Create account',
                next: 'Next',
                footer: 'Mae Fah Luang University',
            }
            : {
                welcome: 'MFU ECOMMERCE',
                signIn: 'ลงชื่อเข้าใช้เพื่อดำเนินการต่อทางอีเมล (ใช้อีเมลลำดวน)',
                emailPlaceholder: 'อีเมล',
                forgotEmail: 'ลืมอีเมล?',
                guestInfo: 'ไม่ใช่คอมพิวเตอร์ของคุณ? ใช้โหมดผู้เยี่ยมชมเพื่อลงชื่อเข้าใช้อย่างเป็นส่วนตัว',
                learnMore: 'เรียนรู้เพิ่มเติม',
                createAccount: 'สร้างบัญชี',
                next: 'ถัดไป',
                footer: 'มหาวิทยาลัยแม่ฟ้าหลวง',
            };
    };

    const text = getText();

    return (
        <div className="login-page">
            <div className="navbar">
                <div className="navbar-left">
                    <img src={logo} alt="MFU Logo" className="navbar-logo" />
                    <span>{text.welcome}</span>
                </div>
                <div className="navbar-right">
                    <div className="account-menu">
                        <span>ACCOUNT</span>
                        <div className="dropdown">
                            <a href="/profile">Profile</a>
                            <a href="/logout">Logout</a>
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
                        <img src={logo} alt="MFU Logo" className="logo" />
                        <h1>{text.welcome}</h1>
                        <h2>{text.signIn}</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder={text.emailPlaceholder}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <a href="/forgot-email" className="forgot-link">{text.forgotEmail}</a>
                        <div className="guest-mode-info">
                            <p>{text.guestInfo}</p>
                            <a href="#" className="learn-more-link">{text.learnMore}</a>
                        </div>
                        <button type="submit">{text.next}</button>
                        <a href="/create-account" className="create-link">{text.createAccount}</a>
                    </form>
                </div>
            </div>
            <footer className="footer">
                <p>{text.footer}</p>
            </footer>
        </div>
    );
};

export default Login;
