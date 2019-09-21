import React from 'react';

import './content.css';

class Content extends React.Component {
    render() {
        return (
            <div className="wrap wrap-content">
                <section className="content">
                    <h1 className="title">Test Task.</h1>
                    <h2 className="subTitle">React/GraphQL with Apollo</h2>
                </section>
            </div>
        )
    }
}

export default Content;