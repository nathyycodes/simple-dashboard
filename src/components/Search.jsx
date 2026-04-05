export default function Search({search, setSearch, handleSearch }){


    return(
        <div className="search-bar">
            <input type="text" className="search"  value={search} onChange={e => setSearch(e.target.value)}></input>
            <button className="badk" onClick={handleSearch} ><img src="src\assets\search-button-svgrepo-com.svg" alt="" /></button>
           
        </div>    
    )
}