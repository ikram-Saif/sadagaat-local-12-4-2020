import React from 'react';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

function Preload(props){
  const style = { 
    textAlign: 'center'
  }

    return(
<div className="sweet-loading" style = {{style}}>
<BeatLoader
  css = {style}
  size={20}
  loading={props.loading}
  color = {'rgb(6, 105, 147) !important'}
/>
</div>
    )
    
}
export default Preload;
    