import {
  BOTTOM,
  CENTER,
  LEFT,
  OUTLINE,
  RIGHT,
  SHADOW,
  TOP,
} from "../../constants/StyleConstants";
import { CardContainer } from "./Card.styles";
import PropTypes from "prop-types";

const Card = ({ variation, horizontalAlign, verticalAlign, children }) => {
  return (
    <CardContainer
      variation={variation}
      horizontalAlign={horizontalAlign}
      verticalAlign={verticalAlign}
    >
      {children}
    </CardContainer>
  );
};

Card.propTypes = {
  variation: PropTypes.oneOf([OUTLINE, SHADOW]),
  horizontalAlign: PropTypes.oneOf([LEFT, CENTER, RIGHT]),
  verticalAlign: PropTypes.oneOf([TOP, CENTER, BOTTOM]),
};

Card.defaultProps = {
  variation: SHADOW,
  horizontalAlign: LEFT,
  verticalAlign: TOP,
};

export default Card;
