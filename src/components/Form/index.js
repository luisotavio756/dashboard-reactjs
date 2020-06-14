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

    .fieldset {
        font-size: 2em;
        text-align: left !important;
        color: #CF1A27;
        /* margin-bottom: 10px; */
        font-weight: 600;
    }

    .input-block {
        width: 100%;
        display: flex;
        flex-direction: column;

        label {
            font-size: 13px;
            font-weight: 600;
            color: #626262;

            &.flex {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            span {
                font-weight: 500;

                a {
                    font-size: 12px !important;
                    font-weight: 400;
                    color: #4285f4 ;
                }
            }

            sup {
                color: red;
            }
        }


        input, textarea, select {
            font-family: 'Poppins', Helvetica, sans-serif;
            margin-top: 5px;

            min-height: 42px;
            font-size: 13px;
            font-weight: 400;
            color: rgb(102, 102, 102);
            border: 1px solid #dee2e6;
            padding: 5px 12px;
            border-radius: 6px;
            transition: all 0.2s;
            background: none;
            /* width: 100%; */

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

            &.is-invalid {
                border-color: red;
            }


        }


        p {
            margin-top: 3px;
            font-size: 12px;
            color: rgb(153, 153, 153);
        }


        .checkbox {
            display: flex;
            align-items: center;

            input {
                margin-top: 0;
                min-height: 0 !important;
                margin-right: 4px;
            }

            span {
                color: #777;
            }
        }

        .file-input {
            border: 1px solid #dee2e6;
            border-radius: 6px;
            overflow: hidden;
            display: inline-block;
            padding: 0px 0px 0px 12px;
            /* min-height: 42px; */

            display: flex;
            align-items: center;
            /* justify-content: flex-end; */
            cursor: pointer;

            input[type="file"] {
                display: none;
            }

            .text {
                flex: 0.9;
                font-size: 13px;
                font-weight: 400;
                color: #999;
            }

            .icon {
                flex: 0.1;
                width: 42px;
                height: 42px;
                background: #CF1A27;

                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                transition: all 0.2s;

                &:hover {
                    filter: brightness(90%);
                }
            }

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
        background: #b20710;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 13px 0;
        transition: all 0.2s linear;
        font-weight: 500;

        &.btn-sm {
            padding: 0 !important;
            height: 32px;
            font-size: 12px;
        }

        &.btn-circle {
            border-radius: 60px;
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
