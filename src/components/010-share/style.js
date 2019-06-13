import styled from 'styled-components';
import { primary, gray } from '../../style/colors';

export const Container = styled.div`
  width: ${props => (props.expanded ? '225px' : '50px')};
  height: 50px;
  overflow: hidden;
  transition: width 0.6s;
  border-radius: 25px;

  background: ${primary[400]};

  & button {
    width: 50px;
    height: 50px;
    border: 0;
    background: transparent;
    color: ${gray[100]};
  }

  & button.social {
    ${props =>
      props.expanded
        ? { width: '50px', height: '50px' }
        : { width: 0, height: 0, position: 'absolute', left: '-9000px;' }};
  }

  &:hover {
    width: 225px;

    & button.social {
      width: 50px;
      height: 50px;
      position: inherit;
    }

    & button.fb:hover {
      background: #3b5998;
    }
    & button.tw:hover {
      background: #38a1f3;
    }
    & button.gh:hover {
      background: ${gray[800]};
    }
  }

  .share {
    z-index: 100;
  }
`;
