import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { WindowsKeyboardType } from "../../pages/Typing";
import { KeyboardItemContainer } from "./styles";

export const KeyboardItem: React.FC<WindowsKeyboardType> = ({ ...props }) => {

  function renderKeyWithSecondaryLabel(keyboardItem: WindowsKeyboardType) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
        <p>{keyboardItem.secondaryLabel}</p>
        <p>{keyboardItem.label}</p>
      </div>
    )
  }

  function renderUpDownKey() {
    return (
      <div style={{ display: 'flex', width: '100%', flexDirection: 'column', gap: '0.3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FaChevronUp />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FaChevronDown />
        </div>
      </div>
    )
  }

  return (
    <KeyboardItemContainer
      key={props.id}
      width={props.width}
      height={props.height}
      labelPosition={props.labelPosition}
    >
      {props.secondaryLabel ?
        renderKeyWithSecondaryLabel(props)
        :
        props.label === 'up-down' ?
          renderUpDownKey()
          :
          props.label
      }
    </KeyboardItemContainer>
  );
};
