import styled from 'styled-components';

export const Badge = styled.span`
    padding: 5px 10px;
    font-size: 11px;
    font-weight: bold;
    border-radius: 5px;

    &.primary {
        color: #fff;
        background-color: #3699ff;
    }

    &.danger {
        color: #fff;
        background-color: #f64e60;
    }

    &.warning {
        background-color: orange;
        color: #fff;
    }

    &.success {
        background-color: #1bc5bd;
        color: #fff;
    }

    &.info {
        background-color: #8950fc;
        color: #fff;
    }

    &.light {
        color: #80808f;
        background-color: #f3f6f9;
    }

    &.dark {
        color: #fff;
        background-color: #212121;
    }



`;
