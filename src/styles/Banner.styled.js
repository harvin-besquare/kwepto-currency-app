import styled from "styled-components/macro";
// export const BannerContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   justify-content: space-between;
// `;

// export const BannerTextStyled = styled.div`
//   text-align: left;
//   width: 40%;
//   h1 {
//     font-size: 4rem;
//     font-weight: 800;
//   }
//   p {
//     font-size: 2.5rem;
//     font-weight: 400;
//   }
// `;

// export const BannerImgStyled = styled.div`
//   height: 100%;
// `;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  .banner-img {
    max-width: 20vw;
    min-width: 325px;

    img {
      height: 100%;
      width: 100%;
    }
  }

  .banner-txt {
    width: 45%;
    h1 {
      font-size: clamp(55px, 6vw, 75px);
      font-weight: 800;
    }
    p {
      font-size: clamp(20px, 2.5vw, 30px);
      font-weight: 500;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    .banner-txt {
      text-align: center;
      width: 100%;
    }
  }
`;
