import styled from 'styled-components';


export const Dropzone = styled.div`
    height: 200px;
    width: 200px;
    overflow: hidden;
    border-radius: 360px;
    margin: 15px auto;
    background: #E1FAEC;
    /* border-radius: 10px; */

    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 48px; */
    cursor: pointer;



    .image, .image-default {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;

        img {
            transition: all 0.2s;
        }
    }

    &:hover {
        .image img {
            filter: brightness(30%) !important;
        }

        .image span {
            opacity: 1;
        }
    }

    .image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .image-default img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(50%) !important;
    }

    .image-default span {
        /* opacity: 0; */
        position: absolute;
        color: #fff;
        font-weight: 500;
        transition: all 0.2s;
    }

    .image span {
        opacity: 0;
        position: absolute;
        color: #fff;
        font-weight: 500;
        transition: all 0.2s;
    }

    p {
        width: calc(100% - 60px);
        height: calc(100% - 60px);
        border-radius: 10px;
        border: 1px dashed #4ECB79;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #333;
    }

    p svg {
        color: #4ECB79;
        width: 24px;
        height: 24px;
        margin-bottom: 8px;
    }
`;
