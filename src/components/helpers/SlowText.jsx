import React, { useState, useEffect ,useRef} from 'react';

 const SlowText = (props) => {
    const { speed, text } = props;
    const [placeholder, setPlaceholder] = React.useState(text[0]);
  
    const index = React.useRef(0);
  
    React.useEffect(() => {
      function tick() {
        index.current++;
        setPlaceholder((prev) => prev + text[index.current]);
      }
      if (index.current < text.length - 1) {
        let addChar = setInterval(tick, speed);
        return () => clearInterval(addChar);
      }
    }, [placeholder, speed, text]);
    return <span>{placeholder}</span>
  }

  export default SlowText