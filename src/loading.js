import React from "react";
import ReactLoading from 'react-loading';

const Loading = () => {
    return ( 
    <div className="loading">
        <ReactLoading type="bubbles" color="#bada55" height={'20%'} width={'20%'}/>
    </div> );
}
 
export default Loading;