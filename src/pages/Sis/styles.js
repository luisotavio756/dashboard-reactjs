import styled from 'styled-components';

export const Wrap = styled.div`
    display: grid;
    grid-template-columns: 18% 82%;
    grid-template-rows: 100vh;

    /* grid-template-areas: '' */
`;

export const Main = styled.div`
    @media screen and (max-width: 1200px) {
        grid-row: 1;
        grid-column: 1/3;
    }

    background: #ebedf5;

    .content {
        height: calc(100vh - 70px);
        overflow-y: auto;
        padding: 30px 0;

        .title {
            h1 {
                /* font-family: 'Montserrat'; */
                color: #424242;
                font-weight: 300;
            }
        }
    }
`;

export const NavBar = styled.div`
    padding: 0 30px;
    height: 70px;
    background: #fff;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    ul {
        list-style: none;

        li {
            padding: 0 10px;
            border-left: 1px solid #999;
            cursor: pointer;

            font-weight: 400;
            color: #b5b5c3;

        }
    }

    span {
        font-size: 13px;
        color: #b5b5c3;
        font-weight: normal;

        .name {
            font-weight: bold;
        }
    }

    .toggle {
        opacity: 0;
        transition: margin 0.3s;
    }

    @media screen and (max-width: 1200px) {
        display: flex;
        justify-content: space-between;

        ul {
            display: none;
        }


        svg {
            color: #fff;
        }

        .toggle {
            color: #555;
            opacity: 1;
        }

    }
`;

