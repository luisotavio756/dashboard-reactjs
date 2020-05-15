import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    cursor: pointer;
    font-size: 13px;
    padding: 8px 10px;
    /* border-radius: 60px; */
    background: #dcdcdc;
    color: #fff;
    border: none;
    font-weight: bold;
    transition: all 0.2s;

    &:first-of-type {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-of-type {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    
    &:hover {
      opacity: 0.95;
      /* box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important; */
    }

    &.active {
      background: #b20710;
      color: #fff;
    }

  }
`;