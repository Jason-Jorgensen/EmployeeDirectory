// import React, { useState } from 'react';
import React,{ Component, useEffect, useState } from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmployeeCardList from './components/EmployeeCardList';
import API from './utils/API';
import SearchBar from './components/SearchBar';
import SortButtons from './components/SortButtons';



function App() {
    
    // const getData = () => {
    //     API.getRandomPerson()
    // .then(res =>
    //     setUserData(res.data.results))};

    const [ userData, setUserData ] = useState([]);
    const [search, setSearch ] =useState("");
    const [sort, setSort ] =useState("");
    const [sortType, setSortType] =useState("");

    useEffect(() => {
        API.getRandomPerson().then((res) => {
            setUserData(res.data.results);
        });
    }, []);

    useEffect(()=> {
        if (sort === "name"){
            setUserData(userData.sort((a,b) =>(a.name.first > b.name.first) ? 1 : -1))
        }
        if (sort === "state") {
            setUserData(userData.sort((a,b)=> (a.location.state > b.location.state) ? 1: -1))
        }
    }, [sort]);
    
    console.log(userData)
    
    // const sortEmployees =

    return(
        <div>
            <Wrapper>
            <Navbar />
                <SearchBar setSearch = {setSearch}/>
                <SortButtons setSort = {setSort}/>
                <EmployeeCardList data={userData.filter(employee => 
                    employee.name.first.toLowerCase().includes(search.toLowerCase()) ||
                    employee.name.last.toLowerCase().includes(search.toLowerCase()))}/>
            <Footer />
            </ Wrapper>
        </div>
    )

}

export default App;