import React from 'react'

class HouseList extends React.Component{

    renderHouse(){
        return this.props.fireData.map((fireData,index) => {
            return(
                <li key = {index}
                onClick ={() => this.props.selectHouse(fireData)}>
                    {fireData.FacilityName}
                </li>
            )
        })
    }

    render(){
        return(
            <ul>
                {this.renderHouse()}
            </ul>
        )
    }

}
export default HouseList