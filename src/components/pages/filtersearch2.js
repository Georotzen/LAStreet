import React, { useState, useEffect } from 'react';
// import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import styled from 'styled-components';
import axios from 'axios';
import Street from './street';
function StreetSearch2() {
    const searchList = [
        /* 
          "3383 Maryland Avenue",
          "13950 Foothill Blvd",
          "101 Los Angeles St.",
          "25678 Manhattan Drive",
          "1278 Hollywood Place",
          "500 Sunset Boulevard",
          "3000 Santa Monica Blvd.",
          "5151 University State Drive"
        */
  ];



    const [searchQueryStreets, setSearchQueryStreets] = useState([]);
    useEffect(() => {
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

return(
<div>
<Text>React: How to Fetch Data From API</Text>
{/** 
<div id="item-list">
              <ol>

                {searchQueryStreets.map((street) => (
                    <li key={street.OBJECTID}>{street.ST_NAME}</li>
                ))}

                </ol>
        </div>


   <AppWrapper>
     {searchQueryStreets.map((street, index) =>
       <Street
       key={index}
   //    imageURL={character.image}
       ST_NAME={street.ST_NAME}
     />
     )}
   </AppWrapper>
*/}
   </div>
);

}
const AppWrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-flow:row wrap;
justify-content:space-evenly;
align-items:center;
`
const Text = styled.h2`
text-align: center;
padding:0.5rem;
font-size:2.25rem;
`
export default StreetSearch2;