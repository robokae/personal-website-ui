import { MED_ICON_SIZE } from "../../../constants/StyleConstants";
import Icon from "../../icon/Icon";
import Card from "../Card";
import { Content, IconContainer } from "./IconTextCard.styles";

function IconTextCard({
  horizontalAlign,
  verticalAlign,
  icons,
  iconCol,
  iconBackground,
  text,
  outline,
  backgroundColor,
  padding,
}) {
  return (
    <Card
      horizontalAlign={horizontalAlign}
      verticalAlign={verticalAlign}
      outline={outline}
      backgroundColor={backgroundColor}
      padding={padding}
    >
      <Content horizontalAlign={horizontalAlign} verticalAlign={verticalAlign}>
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
