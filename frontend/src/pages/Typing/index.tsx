import {
  PageContainer,
  KeyboardLineContainer
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

  return (
    <PageContainer>
      <main>
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
      </main>
    </PageContainer>
  )
}