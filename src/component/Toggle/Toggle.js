import './toggle.css';
import { useEffect, useState } from 'react';
const Toggle = ({setIsDarkMode}) => {
    const [toggle, setToggle] = useState(false);
    const [classList, setClassList] = useState('toggle-circle');
    const toggleMode = () => {
        setToggle(() =>!toggle);
        
    }
    useEffect(() =>{
        if(toggle){
            setClassList('toggle-circle toggle-circle-active');
            setIsDarkMode(true);
        } else{
            setClassList('toggle-circle');
            setIsDarkMode(false);
        };
    } , [toggle,setIsDarkMode]);
    return ( 
    <div className="toggle" onClick={toggleMode}>
        <div className={classList}>
            
        </div>
    </div> 
    );
}
 
export default Toggle;