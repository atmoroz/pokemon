import React from 'react';

import './header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="wrap">
                <header className="header">
                    <div className="clientInfo">
                        <img className="clientPhoto" src="../image/icons.jpg" alt="foto"/>
                        <div className="clientInfo_wrap">
                            <p>Andrey</p>
                            <p>Moroz</p>
                        </div>
                    </div>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%BC%D0%BE%D1%80%D0%BE%D0%B7-68822a194/" className="linkedin" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square " aria-hidden="true"></i></a>
                        <a href="https://github.com/atmoroz" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;