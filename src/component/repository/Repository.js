import './Repository.css';
const Repository = ({repository,textColor}) => {
return (
     <a href={repository.html_url} className="repository">
        <h1 style = {{color: textColor}}>{repository.name}</h1>
    </a> 
    );
}
 
export default Repository;