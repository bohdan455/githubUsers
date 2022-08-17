import { useEffect,useState } from 'react';
import Repository from '../../component/repository/Repository';
import './userPage.css';
const UserPage = ({userName,isDarkMode}) => {
    const [textColor, setTextColor] = useState('#fff');
    useEffect(() =>{
        if(isDarkMode){
            setTextColor('#fff');
        } else{
            setTextColor('#000');
        }
    }, [isDarkMode]);
    return ( 
    <div className="user_page">
        <div className="user_page-description"><a href={userName[0].owner.html_url}>
            <img src={userName[0].owner.avatar_url} alt="" /></a>
            <span style ={{color: textColor}}>{userName[0].owner.login}</span>
        </div>
        <div className="user_page-repos">
            {userName.map((repository) => <Repository textColor = {textColor} repository={repository} key={repository.id} />)}
        </div>

    </div> 
    );
}
 
export default UserPage;