import styled from 'styled-components';

export const Back = styled.a`
    position: absolute;
    top: 15px;
    left: 20px;
    color: #b20710;
    font-weight: bold;
    cursor: pointer;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /*height: 100vh; 
    padding: 0 20px; */
    
`;

export const Form = styled.form`
    width: 400px;
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 1px 1px 20px 10px #dcdcdc;

    img{
        width: 130px;
        margin: 10px 0 40px;
    }

    p{
        color: #ff3333;
        margin-bottom: 15px;
        border: 1px solid #ff3333;
        border-radius: 20px;
        padding: 10px;
        width: 100%;
        text-align: center;
    }

    input{
        display: flex;
        height: 46px;
        margin-bottom: 15px;
        padding: 0 20px;
        color: #777;
        font-size: 15px;
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 5px;
        transition: all 0.2s linear;

        &::placeholder {
            color: #999;
        }

        &:focus {
            /* border: 2px solid #b20710; */
            box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
        }

        &.invalid{
            border-color: red;
            box-shadow: none;

            &::placeholder {
                color: red;
            }
        }
    }

    button{
        /* background-color: #b20710; */
        cursor: pointer;
        color: #fff;
        font-size: 16px;
        background: #b20710;
        height: 42px;
        border: 2px solid #b20710;
        border-radius: 5px;
        width: 100%;
        font-weight: bold;
        transition: all 0.2s;
    }

    button:hover{
        opacity: 0.98;
        box-shadow: 0 1px 6px 0 #b20710;
        
    }

    hr{
        margin: 20px 0;
        border: none;
        border-bottom: 1px solid #cdcdcd;
        width: 100%;
    }

    a{
        font-size: 14px;
        // font-weight: bold;
        color: #999;
        text-decoration: none;
        transition: all 0.2s;
    }

    a:hover{
        text-decoration: underline;
    }
`;