import styled from 'styled-components';

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 18% 82%;
  grid-template-rows: 100vh;
  
  /* grid-template-areas: '' */
`;

export const Main = styled.div`
  @media screen and (max-width: 1200px) {
    grid-row: 1;
    grid-column: 1/3;
  }
  
  background: #fff;

  .content {
    height: calc(100vh - 70px);
    overflow-y: auto;
    padding: 30px 0;

    .title {
      h1 {
        /* font-family: 'Montserrat'; */
        color: #333;
        font-weight: normal;
      }
    }
  }
`;

export const NavBar = styled.div`
  padding: 0 30px;
  height: 70px;
  background: #333;
  
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ul {
    list-style: none;

    li {
      padding: 0 10px;
      border-left: 1px solid #999;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold; 
      color: #999;

    }
  }

  .name {
    color: #fff;
    margin-right: 10px;
  }

  .toggle {
    opacity: 0;
  }

  @media screen and (max-width: 1200px) {
    ul {
      display: none;
    }

    display: flex;
    justify-content: space-between;

    svg {
      color: #fff;
    }

    .toggle {
      opacity: 1;
    }
    
  }
`;

