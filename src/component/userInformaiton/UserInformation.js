import './userInformation.css';
const UserInformation = ({user,setUserName}) => {
    const clickHandler = () => {
        fetch(`https://api.github.com/users/${user.login}/repos`).then(response => response.json()).then(data =>{
            if(data.length){
                setUserName(data);
                console.log(data);
            }
            else{
                alert('User does have any repositories');
            }
        });
    }
    return ( 
    <div className="user_information" onClick={clickHandler}>
        <img src={user.avatar_url} alt="avatar" />
        <div className="user_information-text">
            <div className="user_information-login">@{user.login}</div>
            
        </div>
    </div> 
    );
}
 
export default UserInformation;