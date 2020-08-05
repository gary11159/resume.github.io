import React from 'react';
class Spinner extends React.Component {
    render() {
        return (
            <>
                <div id="loader-wrapper" style={{ opacity: '0.9' }}>
                    <div id="loader"><img src='https://i.imgur.com/qo4oWvj.gif' alt="" /></div>
                    <div className="loader-section section-left"></div>
                    <div className="loader-section section-right"></div>
                </div>
            </>
        );
    }
}

export default Spinner;