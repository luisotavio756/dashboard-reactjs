import styled from 'styled-components';

export const Side = styled.div`
  transition: all 0.5s;
  background: #222;

  .logo {
    padding: 5px !important;
    width: 100%;
    height: 70px;
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

    padding: 0 10px;

    li {
      margin: 8px 0;
      cursor: pointer;
      padding: 18px 20px;
      /* border-bottom: 1px solid rgba(0, 0, 0, 0.1); */

      font-size: 14px;
      font-weight: bold;

      color: #fff;

      &.active {
        background: #b20710;
        border-radius: 80px;
        color: #fff;
        /* border-bottom: 10px solid #b20710; */
      }
    }
  }

  @media screen and (max-width: 1200px) {
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 0;

    position: ${props => props.drag ? 'absolute' : 'inherit'}; 
    height: ${props => props.drag ? '100vh' : 'inherit'}; 
  }
`;