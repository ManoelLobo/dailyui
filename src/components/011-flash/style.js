import styled from "styled-components";
import Alert from "@reach/alert";
import { primary, secondary } from "../../style/colors";

const alertStyles = {
  success: {
    background: secondary[200],
    borderTop: `2px solid ${secondary[700]}`
  }
};

export const Container = styled(Alert)`
  @keyframes toDisappear {
    from {
      ${alertStyles["success"]}
    }

    to {
      background: transparent;
      color: transparent;
      border-top: 2px solid transparent;
    }
  }

  animation: ${props => props.timer / 1000}s 1 toDisappear;
`;
