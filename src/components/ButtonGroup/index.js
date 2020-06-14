import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    cursor: pointer;
    font-size: 12px;
    padding: 8px 10px;
    /* border-radius: 60px; */
    background: #dcdcdc;
    color: #fff;
    border: none;
    font-weight: 500;
    transition: all 0.2s;

    &:first-of-type {
      border-top-left-radius: .42rem;
      border-bottom-left-radius: .42rem;
    }

    &:last-of-type {
      border-top-right-radius: .42rem;
      border-bottom-right-radius: .42rem;
    }

    &:hover {
      opacity: 0.95;
      /* box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important; */
    }

  }

    &.primary .active{
        color: #fff;
        background-color: #3699ff;

        span {
            color: #3699ff;
            background: #fff;
            border-radius: 60px;
            padding: 0 5px;
        }
    }

    &.danger .active{
        color: #fff;
        background-color: #f64e60;

        span {
            color: #f64e60;
            background: #fff;
            border-radius: 60px;
            padding: 0 5px;
        }
    }

    &.warning .active{
        background-color: orange;
        color: #fff;

        span {
            color: orange;
            background: #fff;
            border-radius: 60px;
            padding: 0 5px;
        }
    }

    &.success .active{
        background-color: #1bc5bd;
        color: #fff;

        span {
            color: #1bc5bd;
            background: #fff;
            border-radius: 60px;
            padding: 0 5px;
        }
    }

    &.info .active{
        background-color: #8950fc;
        color: #fff;

        span {
            color: #8950fc;
            background: #fff;
            border-radius: 60px;
            padding: 0 5px;
        }
    }
`;
