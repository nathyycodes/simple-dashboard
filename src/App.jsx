import { useState ,useEffect } from 'react'
import './App.css'
import Search from './components/Search'
import UserList from './components/UserList'

function App() {
  const [user, setUser] = useState([])
  const [filterUSers, setFilterUsers] = useState(user)
  const [search , setSearch] = useState('')


  useEffect(()=> {
    async function getUserData() {
      const reponse = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await reponse.json()
      setUser(data)  
      setFilterUsers(data)
    }
    getUserData()
  }
  , [])

  function handleSearch(){
    const filter = user.filter(
      user => user.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilterUsers(filter)
  }



  return (
    <>
    <h1>User Dashboard</h1>
    <Search setSearch= {setSearch} search = {search} handleSearch={handleSearch}/>
    <UserList user= {filterUSers} />
    
    </>
    
      
  )
}

export default App
