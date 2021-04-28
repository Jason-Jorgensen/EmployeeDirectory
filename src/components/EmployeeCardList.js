import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeeCardList({data}) {
    console.log(data)
    // return(
    //     <EmployeeCard/>
    // )
    return(
        data.map(employee => (
            <EmployeeCard
            firstName= {employee.name.first}
            lastName= {employee.name.last}
            email= {employee.email}
            picutre = {employee.picture.thumbnail}
            phone = {employee.cell}
            age = {employee.registered.age}
            location = {employee.location.state}


            />
        ))
    )
};

export default EmployeeCardList;

