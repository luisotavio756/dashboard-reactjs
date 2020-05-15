import React, { memo } from 'react';

import styled from 'styled-components';

const PaginationSection = styled.nav`
    display: flex;
    justify-content: flex-end;

    ul.pagination {
        display: flex;
        padding-left: 0;
        list-style: none;
        border-radius: .25rem;

        .page-item.disabled .page-link {
            color: #6c757d;
            pointer-events: none;
            cursor: auto;
            background-color: #fff;
            border-color: #dee2e6;
        }

        .page-item.active .page-link {
            z-index: 3;
            color: #fff;
            background-color: #3490dc;
            border-color: #3490dc;
            cursor: pointer;
        }

        .page-item:first-child .page-link {
            margin-left: 0;
            border-top-left-radius: .25rem;
            border-bottom-left-radius: .25rem;
        }

        .page-link {
            cursor: pointer;
            position: relative;
            display: block;
            padding: .5rem .75rem;
            margin-left: -1px;
            line-height: 1.25;
            color: #3490dc;
            background-color: #fff;
            border: 1px solid #dee2e6;
        }
    }
`;


function Pagination({ pages, active, before, after, load }) {
    
    function loadPage(page) {
        load(page)
    }
    
    const items = [];

    for (let i = 1; i <= pages; i++) {
        items.push(<li key={i} className={i == active ? 'page-item active' : 'page-item'}><button className="page-link" onClick={loadPage.bind(null, i)}>{i}</button></li>)
    }
    
    return (
        <PaginationSection>
            <ul className="pagination">
                {/* <li className="page-item disabled" aria-disabled="true" aria-label="« Anterior"  onClick={loadPage.bind(null, (active-1))}>
                    <button className="page-link" aria-hidden="true">Ant</button>
                </li> */}
                {
                    items
                }
                {/* <li className="page-item" onClick={loadPage.bind(null, (active+1))}>
                    <button className="page-link" aria-hidden="true">Pro</button>
                </li> */}
            </ul>
        </PaginationSection>
    );
}

export default memo(Pagination);
