import { IconSize } from "constants/style";
import { Content, IconContainer } from "./IconTextCard.styles";
import Card from "../Card";
import Icon from "components/icon/Icon";

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
                size={IconSize.SIZE_MD}
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
