import './App.css';
import { useState } from 'react';
import Header from './component/header/Header';
import SearchUser from './component/searchUser/SearchUser';
import Users from './container/users/Users';
import UserPage from './container/userPage/UserPage';


function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [userName, setUserName] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  let backroundColor = isDarkMode ? '#161B22 ' : '#fff';
  return (
    <div className="App" style={{backgroundColor: backroundColor }}>
      <Header setUserName= {setUserName} style = {{backgroundColor: "#000"}} setIsDarkMode = {setIsDarkMode} />
      {userName[0] ? <UserPage isDarkMode = {isDarkMode} userName = {userName}/> : <><SearchUser setSearchResult={setSearchResult} /><Users setUserName= {setUserName} searchResult = {searchResult}/></>}
    </div>
  );
}

export default App;
