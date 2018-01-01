import React from 'react';

const handleFrameLoaded=()=> {
    let frame = document.getElementById('idIframe')
    frame.height = '2791px'
}

const IframeViewer = props => {
    return (
        <div className='container'>
            <iframe
                    key={'frame' + new Date().getTime()}
                    id="idIframe"
                    scrolling={true}
                    onLoad={()=> handleFrameLoaded()}
                    className="col-md-12 col-lg-12 col-sm-12 col-xs-12"
                    frameBorder="0"
                    src={props.renderUrl}
            />
        </div>    
    )
}

export default IframeViewer;