import React from "react";

import "./loading.css"

class Loading extends React.Component {
    render() {
        return (
            <div className="loading">
                <div className="item-1"></div>
                <div className="item-2"></div>
                <div className="item-3"></div>
                <div className="item-4"></div>
                <div className="item-5"></div>
            </div>
        )
    }
}
export default Loading;