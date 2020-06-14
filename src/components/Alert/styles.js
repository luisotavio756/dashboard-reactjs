import styled from 'styled-components';

export const Alert = styled.button`
    border: none;
    border-radius: 0.42rem;
    padding: .65rem 1rem;
    font-size: 0.9em;
    line-height: 1.5;
    margin-bottom: 10px;

    font-weight: 300;
    transition: all 0.2s;
    /* color: #777; */

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        background-color: transparent;
        color: #eee;
        border: none;
        cursor: pointer;
        font-size: 16px;
    }

    &.primary {
        color: #fff !important;
        background-color: #3699ff;
    }

    &.danger {
        color: #fff !important;
        background-color: #f64e60;
    }

    &.warning {
        background-color: orange;
        color: #fff !important;
    }

    &.success {
        background-color: #1bc5bd;
        color: #fff !important;
    }

    &.info {
        background-color: #8950fc;
        color: #fff !important;
    }

    &.light {
        color: #80808f !important;
        background-color: #f3f6f9;
    }

    &.dark {
        color: #fff !important;
        background-color: #212121;
    }

    &.alert-circle {
        border-radius: 2rem;
    }

    &.alert-shadow {
        box-shadow: 0 9px 16px 0 rgba(27,197,189,.25)!important;
    }

    &.hover {
        &:hover {
            filter: brightness(85%);
        }
    }

`;
