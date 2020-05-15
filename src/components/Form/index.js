import styled from 'styled-components';

export const Form = styled.form`
    margin: 0 auto;
    /* background: #fff; */
    /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important; */
    /* border-radius: 5px; */
    padding: 0;

    .section-form {
        h2 {
            color: #7d40e7;
        }
    }

    .section-form:not(:first-of-type) {
        margin-top: 15px;
    }
    .input-block:not(:first-of-type) {
        margin-top: 15px;
    }

    .input-block {
        display: flex;
        flex-direction: column;

        label {
            font-size: 16px;
            font-weight: bold;
            color: #444;
        }

        input, textarea, select {
            font-family: 'Product Sans';
            margin-top: 5px;
            min-height: 42px;
            font-size: 14px;
            color: rgb(102, 102, 102);
            border: 1px solid #dee2e6;
            padding: 5px 12px;
            border-radius: 3px;
            transition: all 0.2s;

            &:focus {
                border-color: #999;
                /* box-shadow: 0 .5rem 1rem rgba(0,0,0,.15); */
            }

            &.input-sm {
                min-height: 32px;
                font-size: 12px;
            }

            &.bottom-b {
                border: none;
                border-radius: 0;
                border-bottom: 1px solid #999;
            }


        }

        textarea {
            font-family: sans-serif;
        }


        p {
            margin-top: 3px;
            font-size: 12px;
            color: rgb(153, 153, 153);
        }



    }

    .input-row {
        display: flex;
        flex-wrap: wrap;
        /* margin-top: 15px; */

        .input-block {
            margin-top: 15px;
        }

        [class*="col-"] {
            margin-top: 0px;
        }

        @media screen and (max-width: 790px) {
            [class*="col-"] {
                padding: 0px !important;
            }
        }

        [class*="col-"]:first-of-type {
            padding-left: 0 !important;
        }

        [class*="col-"]:last-of-type {
            padding-right: 0 !important;
        }


    }

    button.btn-form {
        cursor: pointer;
        margin-top: 15px;
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        background: #b20710;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 15px 20px;
        transition: all 0.2s linear;

        &.btn-sm {
            padding: 0 !important;
            height: 32px;
            font-size: 14px;
        }

        &:hover {
            filter: brightness(90%);
        }
    }

    .alert {
        padding: 15px 10px;
        /* border: 2px solid #7e1bf0; */
        /* color: #7e1bf0; */
        /* color: #fff; */
        border-radius: 5px;
        transition: all 0.2s linear;

        &.alert-success {
            color: #fff;
            background: rgb(4, 211, 97);
        }

        &.alert-danger {
            color: #fff;
            background: darkred;
        }
    }

`;
