import styled from 'styled-components';
import Alert from '@reach/alert';
import { primary, secondary, adversary, gray } from '../../style/colors';

const alertStyles = {
  success: {
    background: primary[200],
    borderTop: `2px solid ${primary[700]}`,
    color: primary[800],
  },
  failure: {
    background: adversary[200],
    borderTop: `2px solid ${adversary[700]}`,
    color: adversary[800],
  },
  default: {
    background: secondary[200],
    borderTop: `2px solid ${secondary[700]}`,
    color: secondary[800],
  },
};

export const Container = styled(Alert)`
  padding: 20px;
  margin: 10px;
  ${props =>
    alertStyles[props.appearance]
      ? alertStyles[props.appearance]
      : alertStyles['default']};
    };
`;
