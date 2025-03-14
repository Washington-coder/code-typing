import { WindowsKeyboardType } from "../../pages/Typing";
import { KeyboardItemContainer } from "./styles";

export const KeyboardItem: React.FC<WindowsKeyboardType> = ({ children, ...props }) => {
  return (
    <KeyboardItemContainer
      key={props.id}
      width={props.width}
      height={props.height}
      labelPosition={props.labelPosition}
    >
      {children}
    </KeyboardItemContainer>
  );
};
