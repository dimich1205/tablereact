import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Pagination = ({pages, currentPage}) => {

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                </li>
                {
                    pages.map(p => {
                        return  (
                            <li key={uuidv4()}className="page-item">
                                <a className="page-link" href="#" onClick={() => {currentPage(p)}}>
                                    {p}
                                </a><
                            /li>
                        )
                    })
                }
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;