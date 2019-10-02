import React from 'react'

const House = (props) =>{
    if(props.current){
        return(
            <div>
                <h2>FireHouse:</h2>
                <p>FireHouse Facility:{props.current.FacilityName}</p>
                <p>FireHouse Address:{props.current.FacilityAddress}</p>
                <p>Borough:{props.current.Borough}</p>
            </div>
        )
    }else{
        return <h2>Select a House</h2>
    }
}


export default House