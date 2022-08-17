import Toggle from '../Toggle/Toggle';
import './header.css';
const Header = ({setUserName,setIsDarkMode}) => {
    return ( 
        <div className="header">
            <span onClick={() => setUserName("")}>GitHub</span> 
            <Toggle setIsDarkMode={setIsDarkMode} />
        </div>
     );
}
 
export default Header;