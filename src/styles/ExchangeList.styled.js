import styled from "styled-components/macro";
import ReactPaginate from "react-paginate";

export const CardStyled = styled.div`
  display: grid;
  place-items: center;
  padding: 1em;
  border-radius: 25px;
  width: 100%;
  background-color: white;
`;

export const ListHeaderStyled = styled.div`
  border-bottom: solid 2px #dfe6e9;
  display: grid;
  grid-template-columns: 0.25fr 0.5fr repeat(3, 1fr);
  align-items: center;
  text-align: center;
  width: 90%;
  padding: 1em;

  .center {
    place-self: center;
  }

  .visibility {
    visibility: visible;
  }

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 5%repeat (4, 20%);
    .visibility {
      visibility: hidden;
    }
  }
`;

export const ExchangeListStyled = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 0.5fr repeat(3, 1fr);
  align-items: center;
  text-align: right;
  width: 90%;
  padding: 10px;

  p {
    color: #000;
  }

  .center {
    place-self: center;
  }

  &:hover {
    background-color: #ecf0f1;
  }
  .trust-main {
    display: flex;
    justify-content: flex-end;
    column-gap: 1rem;
    align-items: center;
  }
  .main-bar {
    background-color: #dcdcdc;
    border-radius: 10px;
    width: 100px;
    height: 10px;
  }
  .green-bar-10 {
    background-color: #00c118;
    border-radius: 10px;
    height: 10px;
    width: 100%;
  }
  .green-bar-9 {
    background-color: #00c118;
    border-radius: 10px;
    height: 10px;
    width: 90%;
  }
  .green-bar-8 {
    background-color: #00c118;
    border-radius: 10px;
    height: 10px;
    width: 80%;
  }
  .green-bar-7 {
    background-color: #00c118;
    border-radius: 10px;
    height: 10px;
    width: 70%;
  }
  .green-bar-6 {
    background-color: #00c118;
    border-radius: 10px;
    height: 10px;
    width: 60%;
  }
  .green-bar-5 {
    background-color: #00c118;
    border-radius: 10px;
    height: 10px;
    width: 50%;
  }
  .green-bar-4 {
    background-color: #00c118;
    border-radius: 10px;
    height: 10px;
    width: 40%;
  }
  .website-url {
    background-color: #d3d3d3;
    border-radius: 10px;
    padding: 10px;
    margin-left: 50%;
    display: flex;
    justify-content: center;
    font-weight: bold;
  }

  .website-url:hover {
    background-color: #f7a528;
  }

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 5%, repeat (3, 20%);
    .visibility {
      visibility: hidden;
    }
  }
`;

export const ExchangeInfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: start;
  text-align: start;
  column-gap: 10px;
  img {
    width: auto;
    height: auto;
  }
  p {
    color: #636e72;
  }
`;

export const PageNumberStyled = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  a {
    margin: 0 0.5em;
    &:active {
      color: #f7a528;
    }
  }
`;

export const ExchangeBannerStyled = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 300px;
  margin-top: 100px;
`;
