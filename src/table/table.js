import React, {useState} from 'react';
import ArrowUp from "../svg/arrowUp";
import ArrowDown from "../svg/arrowDown";
import { v4 as uuidv4 } from 'uuid';

const Table = ( {concatData, sortData, directionSort, detailRow}) => {

    const [fieldData, setFieldData] = useState('');

    const Arrow = () => {
        return (
            directionSort ? <ArrowDown/> : <ArrowUp/>
                    )
    }

    const fieldSortData = (field) =>{
        sortData(field);
        setFieldData(field);
    }

    return (
        <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col"  onClick={()=> fieldSortData('id')} >
                    id { fieldData === 'id' ? <Arrow/> : null}
                </th>
                <th scope="col"  onClick={()=> fieldSortData('firstName')}>
                    firstName { fieldData === 'firstName' ? <Arrow/> : null}
                </th>
                <th scope="col"  onClick={()=> fieldSortData('lastName')}>
                    lastName { fieldData === 'lastName' ? <Arrow/> : null}
                </th>
                <th scope="col"  onClick={()=> fieldSortData('email')}>
                    email { fieldData === 'email' ? <Arrow/> : null}
                </th>
                <th scope="col"   onClick={()=> fieldSortData('phone')}>
                    phone { fieldData === 'phone' ? <Arrow/> : null}
                </th>
            </tr>
            </thead>

            <tbody>
            {concatData.map((item) => (
                <tr key={uuidv4()} onClick={() => detailRow(item)} >
                    <td >{item.id }</td>
                    <td >{item.firstName}</td>
                    <td >{item.lastName}</td>
                    <td >{item.email}</td>
                    <td >{item.phone}</td>
                </tr>
            ))
            }

            </tbody>
        </table>
    )
}
//key={uuid()}
export default Table;