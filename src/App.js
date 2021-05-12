import React, { useState, useEffect,  Fragment} from 'react';

import useServerData from "./hooks/useServerData";
import Switcher from "./switcher/switcher";
import TableBody from "./tableBody/tableBody";
import Pagination from "./pagination/pagination";

function App() {

    const [isButtonClick, setIsButtonClick] = useState( false);
    const [directionSort,setDirectionSort] = useState(true);
    const [rowItem, setRowItem] = useState('');
    const [url, setUrl] = useState('');
    const [totalCountRow, setTotalCountRow] = useState(0);
    const [totalCountPage, setTotalCountPage] = useState(0);
    const [isRowClicked, setIsRowClicked] = useState(false);
    //setIsLoading}, getData]
    const [{concatData, isLoading, isLoaded,  setConcatData}] = useServerData({url, isButtonClick});
    const limitCountPage = 50;
    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    const btnHandler = (url) => {
        setUrl(url);
        setIsButtonClick(true);
    }

    const currentPage = (numberPage) => {
        setCurrentPageNumber(numberPage);
        console.log('numberPage : ', numberPage);
        console.log('currentPageNumber : ',currentPageNumber);
    }

    useEffect(() => {
        if(!isLoaded){
            return
        } else {
            setTotalCountRow(concatData.length);
            const getTotalCountPage = totalCountRow / limitCountPage;
            setTotalCountPage(getTotalCountPage);

            currentPage();
        }

    },[ isLoaded, setTotalCountRow,  concatData.length, totalCountRow,currentPage])

    let pages =[];
    for (let i = 1 ; i<=totalCountPage; i++){
        pages.push(i);
    }

    const sortData = (field) => {
        setRowItem(field);
        const copyData = concatData.concat();

        let sortData;
        if(directionSort){
            sortData = copyData.sort(
                (a, b)=> {return a[field] > b[field]? 1 : -1}
            );
        } else  sortData = copyData.reverse(
            (a, b)=> {return a[field] > b[field]? 1 : -1}
        );

        setConcatData(sortData);
        setDirectionSort(!directionSort);

    }

    const detailRow = (row) => {
        setIsRowClicked(true);
        setRowItem(row);
    }

  return (

    <div className="container">
        {
            !isButtonClick? <Switcher btnHandler={btnHandler}/> :
                <Fragment>
                    {/*<Switcher btnHandler={btnHandler}/>*/}
                    <TableBody sortData={sortData}
                               detailRow={detailRow}
                               directionSort={directionSort}
                               concatData={concatData}
                               rowItem={rowItem}
                               isLoading={isLoading}
                               isRowClicked={isRowClicked}/>
                </Fragment>
        }
        <Pagination pages = {pages} currentPage={currentPage}/>

    </div>
  )
}

export default App;
