import {
  PageContainer,
  KeyboardLineContainer,
  KeyboardContainer,
  KeyboardContainerUp,
} from "./styles";
import {
  WINDOWS_KEYBOARD_DATA_FIFTH_LINE,
  WINDOWS_KEYBOARD_DATA_FIRST_LINE,
  WINDOWS_KEYBOARD_DATA_FOURTH_LINE,
  WINDOWS_KEYBOARD_DATA_SECOND_LINE,
  WINDOWS_KEYBOARD_DATA_SIXTH_LINE,
  WINDOWS_KEYBOARD_DATA_THIRD_LINE
} from "./windowsKeyboardData";
import { KeyboardItem } from "../../components/KeyboardItem";
import { FaChevronUp } from "react-icons/fa";
import { useState } from "react";
export interface WindowsKeyboardType {
  id: number;
  label: string;
  labelPosition: 'center' | 'left' | 'right';
  secondaryLabel?: string;
  width: number;
  height: number;
}

const KYEBOARD_LINES = [
  WINDOWS_KEYBOARD_DATA_FIRST_LINE,
  WINDOWS_KEYBOARD_DATA_SECOND_LINE,
  WINDOWS_KEYBOARD_DATA_THIRD_LINE,
  WINDOWS_KEYBOARD_DATA_FOURTH_LINE,
  WINDOWS_KEYBOARD_DATA_FIFTH_LINE,
  WINDOWS_KEYBOARD_DATA_SIXTH_LINE,
]

export function Typing() {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  return (
    <PageContainer>
      <h1>Typing</h1>
      <KeyboardContainer isVisible={isKeyboardVisible} >
        <KeyboardContainerUp onClick={() => setIsKeyboardVisible(!isKeyboardVisible)}>
          <span>
            <FaChevronUp size={24} />
          </span>
        </KeyboardContainerUp>

        {
          KYEBOARD_LINES.map((keyboardLine: WindowsKeyboardType[]) => {
            return (
              <KeyboardLineContainer>
                {
                  keyboardLine.map((keyboardItem: WindowsKeyboardType) => {
                    return (
                      <KeyboardItem {...keyboardItem} />
                    )
                  })
                }
              </KeyboardLineContainer>
            )
          })
        }
      </KeyboardContainer>
    </PageContainer>
  )
}