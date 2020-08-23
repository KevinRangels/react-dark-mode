import React, { useRef } from 'react';
import './switch.css'

const Switch = ({setDarkMode, checked, setChecked}) => {
    const ref = useRef(null)
    function handleChange(event) {
        setChecked(ref.current.checked)
        setDarkMode(ref.current.checked)   
    }
    return ( 
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input ref={ref} type="checkbox" checked={checked} className="checkbox" id="checkbox" onChange={handleChange} />
            <label className="switch" htmlFor="checkbox"></label>
          </div>
     );
}
 
export default Switch;