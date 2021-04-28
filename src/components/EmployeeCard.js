import React from "react";


function EmployeeCard(props) {
  return (
   
    <div className="flex flex-col my-4">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap w-40">
                  <div className="flex items-center w-700">
                    <div className="flex-shrink-0 h-10 w-10">
     
                      <img className="h-10 w-10 rounded-full" src={props.picutre} alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 w-40">
                        {props.firstName} {props.lastName} 
                      </div>
             
                    </div>
                    <div className="text-sm text-gray-500">
                        {props.email}
                      </div>
                  </div>
                </td>   
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{props.phone}</div>
                  {/* <div className="text-sm text-gray-500">Optimization</div> */}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{props.location}</div>
                  {/* <div class="text-sm text-gray-500">Optimization</div> */}
                </td>
         
                
              </tr>
  
        
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )}

export default EmployeeCard;
