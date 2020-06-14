import styled from 'styled-components';

export const Side = styled.div`
    transition: all 0.5s;
    background: #1e1e2d;

    .logo {
        background: #1b1b28;
        padding: 10px !important;
        width: 100%;
        min-height: 70px;
        /* border-bottom: 1px solid rgba(255, 255, 255, 0.1); */

        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 50%;
            height: auto;
        }
    }

    ul {
        list-style: none;
        margin-top: 20px;

        /* padding: 15px 0; */

        li {

            cursor: pointer;

            display: flex;

            a{
                padding: 13px 25px;
                display: flex;
                flex: 1;
                /* align-items: center; */
            }

            .icon {
                color: #494b74;
                flex: 0 0 33px;
                font-size: 1rem;
            }

            .item {
                font-size: 13px;
                font-weight: 500;
                line-height: 20px;
                color: #a2a3b7;

                display: flex;
                align-items: center;
            }

            &.active {
                border-left: 3px solid #3699ff;
            }

            &.active, &:hover {
                background: #1b1b28;

                .icon {
                    color: #3699ff;
                }

                .item {
                    color: #fff;
                }
            }


        }
    }

    /* transition: width 0.2s linear; */
    @media screen and (max-width: 1200px) {
        /* grid-row: 1;
        grid-column-start: 1;
        grid-column-end: 0; */
        /* z-index: 9999; */

        position: ${props => props.drag ? 'absolute' : 'inherit'};
        height: ${props => props.drag ? '100vh' : 'inherit'};
        width: ${props => props.drag ? '185px' : '0'};
        overflow: hidden;
        z-index: 999;
    }
`;
