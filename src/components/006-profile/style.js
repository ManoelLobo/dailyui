import styled from 'styled-components';
import { primary, secondary, gray } from '../../style/colors';

export const Container = styled.div`
  display: flex;
  width: 400px;
  background: ${gray[100]};
  border-radius: 6px;
  padding: 20px;

  img {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .user-info {
    display: flex;
    flex: 1;
    flex-direction: column;
    line-height: 1.5rem;

    .name {
      font-family: Raleway, sans-serif;
      font-size: 1.5rem;
      color: ${primary[800]};
    }

    .title {
      font-size: 0.9rem;
      color: ${primary[500]};
    }

    .location {
      display: flex;
      align-items: center;

      font-size: 0.7rem;
      color: ${gray[600]};
    }

    .social {
      display: flex;
      flex-direction: row;

      font-size: 1rem;

      a {
        color: ${secondary[600]};
        margin-right: 10px;
      }
    }
  }
`;
