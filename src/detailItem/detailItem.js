import React from 'react';



const DetailedItem = ({detailItemData}) => {

    const addressCity = detailItemData && detailItemData.address ? detailItemData.address.city : null;

    const streetAddress = detailItemData && detailItemData.address ? detailItemData.address.streetAddress : null;
    const state = detailItemData && detailItemData.address ? detailItemData.address.state : null;
    const addressZip = detailItemData && detailItemData.address ? detailItemData.address.zip : null;

    return(
        <div>
            <ul>
               <li>id: {detailItemData.id}</li>
               <li> firstName: {detailItemData.firstName}</li>
               <li>lastName: {detailItemData.lastName}</li>
               <li>email: {detailItemData.email}</li>
               <li>phone: {detailItemData.phone}</li>
               <li>city: {addressCity}</li>
               <li>streetAddress: {streetAddress}</li>
               <li>state: {state}</li>
               <li>addressZip: {addressZip}</li>
            </ul>
        </div>
    )
}

export default DetailedItem;