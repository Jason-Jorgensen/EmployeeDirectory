// import React, { useState } from 'react';
import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeCard from './components/EmployeeCard';


function App() {
    // const [ searchTerm ]



    return(
        <div>
            <Header />
            <Wrapper>
                <EmployeeCard />
            </ Wrapper>
            <Footer />
        </div>
    )

}

export default App;