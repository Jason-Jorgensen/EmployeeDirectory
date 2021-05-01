// import React, { useState } from 'react';
import React,{ Component, useEffect, useState } from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import API from './utils/API';
import SearchBar from './components/SearchBar';
import SortButtons from './components/SortButtons';
import EmployeeCard from "./components/EmployeeCard";



function App() {
    
    // const getData = () => {
    //     API.getRandomPerson()
    // .then(res =>
    //     setUserData(res.data.results))};

    const [ userData, setUserData ] = useState([]);
    const [search, setSearch ] =useState("");
    const [sort, setSort ] =useState();
    const [sortType, setSortType] =useState("");

    useEffect(() => {
        API.getRandomPerson().then((res) => {
            setUserData(res.data.results);
        });
    }, []);

    // useEffect(()=> {
    //     if (sort === "name"){
    //         setUserData(prevState=> prevState.sort((a,b) =>(a.name.first > b.name.first) ? 1 : -1))
    //     }
    //     if (sort === "state") {
    //         setUserData(prevState=> prevState.sort((a,b)=> (a.location.state > b.location.state) ? 1: -1))
    //     }
    //     console.log("working")
    // }, [sort]);
    
    console.log(userData)
    
    // const sortEmployees =

    return(
        <div>
            <Wrapper>
            <Navbar />
                <SearchBar setSearch = {setSearch}/>
                <SortButtons setSort = {setSort}/>
                {userData.filter(employee => 
                    employee.name.first.toLowerCase().includes(search.toLowerCase()) ||
                    employee.name.last.toLowerCase().includes(search.toLowerCase()))
                    .sort(sort==="name" ? (a,b) =>((a.name.first > b.name.first) ? 1 : -1):(a,b)=> ((a.location.state > b.location.state) ? 1: -1))
                    .map(employee => (
                        <EmployeeCard
                        key= {employee.id.value}
                        firstName= {employee.name.first}
                        lastName= {employee.name.last}
                        email= {employee.email}
                        picutre = {employee.picture.thumbnail}
                        phone = {employee.cell}
                        age = {employee.registered.age}
                        location = {employee.location.state}
                        />))}
            <Footer />
            </ Wrapper>
        </div>
    )

}

export default App;