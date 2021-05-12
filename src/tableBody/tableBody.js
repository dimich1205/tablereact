import React, {Fragment} from 'react';
import Loader from "../loader/loader";
import Table from "../table/table";
import DetailedItem from "../detailItem/detailItem";


const TableBody = ({
                       isRowClicked,
                       concatData,
                       sortData,
                       directionSort,
                       detailRow,
                       rowItem,
                       isLoading }) => {
    return (

        isLoading ? <Loader/> :
            <Fragment>
                <Table concatData={concatData}
                       sortData={sortData}
                       directionSort={directionSort}
                       detailRow ={detailRow}
                />
                {isRowClicked? <DetailedItem detailItemData={rowItem}/> : null} {/*можно ли так?*/}
            </Fragment>
    )
}

export default TableBody;