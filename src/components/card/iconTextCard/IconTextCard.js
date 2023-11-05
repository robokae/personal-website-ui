import { MED_ICON_SIZE } from "../../../constants/StyleConstants";
import Icon from "../../icon/Icon";
import Card from "../Card";
import { Content, IconContainer } from "./IconTextCard.styles";

function IconTextCard({ icons, iconCol, iconBackground, text, outline }) {
  return (
    <Card horizontalAlign="center" verticalAlign="center" outline={outline}>
      <Content>
        {icons && (
          <IconContainer>
            {icons.map((icon, index) => (
              <Icon
                key={index}
                icon={icon}
                color={iconCol}
                background={iconBackground}
                size={MED_ICON_SIZE}
              />
            ))}
          </IconContainer>
        )}
        {text && <p>{text}</p>}
      </Content>
    </Card>
  );
}

export default IconTextCard;
