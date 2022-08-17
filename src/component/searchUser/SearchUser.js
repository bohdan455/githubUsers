import "./searchUser.css";
import { useRef, useState, useEffect } from "react";
const SearchUser = ({setSearchResult}) => {
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef();
  useEffect(() =>{
    inputRef.current.focus();
  },[])
    const searchUser = (e) =>{
        e.preventDefault();
        if(searchValue){
          fetch(`https://api.github.com/search/users?q=${searchValue}`).then(response => response.json()).then(data => setSearchResult(data.items));
          setSearchValue('')
        }
    }
  return (
    <form className="search_user" action="" onSubmit={searchUser}>
      <input ref={inputRef} type="text" className="search_user-input" placeholder="GitHub username" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
      <input type="submit" className="search_user-button" value="->"/>
    </form>
  );
};

export default SearchUser;
