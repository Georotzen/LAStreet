import React, { useState, useEffect } from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
export default function StreetSearch() {


  const [searchQueryStreets, setSearchQueryStreets] = useState([]);       // Interchange between streetDataList and searchList
const [searchQuery, setSearchQuery] = useState([]);

useEffect(() =>{
  console.log('ENDPOINT MAIN ENTRY FOR STREET UI - API');
  
  const getStreets = async function (){
    const baseURL = 'http://localhost:3001/filteredData';
    const response = await axios.get(baseURL);

        /*filter the data this time, data doesn't have image and we need an image for each street*/
        const data = response.data.filter(street => street.ST_NAME);    
        console.log("data", data);
        let tenRandomStreets = [];
    
                /** Select 10 random streets */
    
        for (let i = 0; i < 10; i++) {
          const index = Math.floor(Math.random() * data.length);
          tenRandomStreets.push(data[index]);

       }

			//set characters to characters state
      setSearchQueryStreets(tenRandomStreets);
        
    }
    getStreets();

}, [])
/** ----------------------------------------------------------------------------- */




/** ----------------------------------------------------------------------------- */
  const [filteredList, setFilteredList] = new useState([]);
  const filterBySearch = (event) => {

              /* Access input value */
              const query = event.target.value;
              
              /* Create copy of item list */
               var updatedList = [...filteredList];
             // var updatedList = [...streetsList];
              /* Include all elements which includes the search query */
              updatedList = updatedList.filter((item) => {

              return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;

              });
              
              // Trigger render with updated values
              setFilteredList(updatedList);
        };
  return (
    <>
        
      <MDBInputGroup>

        <MDBInput label='Search for Street Address' onChange={filterBySearch}/>

        <MDBBtn rippleColor='dark'>
               <MDBIcon icon='search' />      
        </MDBBtn>
        <span>&nbsp;</span>
        {/* Button to fetch users data */}
        <MDBBtn onClick={filterBySearch}>Fetch Selected Streets</MDBBtn>
       


      </MDBInputGroup>


    </>
  );
}