import styled from 'styled-components';
import Slider from 'rc-slider';
import { primary, gray } from '../../style/colors';

export const Container = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${primary[800]};
  padding: 12px;
`;

export const Current = styled.div`
  display: flex;
  align-items: center;
  width: 220px;
  img {
    width: 48px;
    height: 48px;
  }
  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    span {
      font-size: 13px;
      color: white;
    }
    small {
      font-size: 11px;
      color: ${gray[300]};
      margin-top: 5px;
    }
  }
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSlider = styled(Slider).attrs(({ type }) => ({
  railStyle: { background: gray[700], borderRadius: 10 },
  trackStyle:
    type === 'position'
      ? { background: primary[400] }
      : { background: 'white' },
  handleStyle: type === 'position' ? { border: 0 } : { display: 'none' },
}))``;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    margin: 0 15px;
    color: ${primary[200]};
    font-size: 1rem;
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  span {
    font-size: 11px;
    color: ${gray[300]};
  }
`;

export const ProgressSlider = styled.div`
  width: 500px;
  margin: 0 15px;
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 20px;
  color: ${primary[200]};

  img {
    margin-right: 5px;
  }
`;
