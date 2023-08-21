import { MED_ICON_SIZE } from "../../../constants/StyleConstants";
import Icon from "../../icon/Icon";
import Card from "../Card";
import { Content } from "./IconTextCard.styles";

function IconTextCard({ icon, iconCol, text, outline }) {
  return (
    <Card horizontalAlign="center" verticalAlign="center" outline={outline}>
      <Content>
        <Icon icon={icon} color={iconCol} size={MED_ICON_SIZE} />
        <p>{text}</p>
      </Content>
    </Card>
  );
}

export default IconTextCard;
