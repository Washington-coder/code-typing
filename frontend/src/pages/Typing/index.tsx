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

export function Typing() {

  return (
    <PageContainer>
      <main>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_FIRST_LINE.map((keyboardItem: WindowsKeyboardType) => {
              return (
                <KeyboardItem {...keyboardItem} />
              )
            })
          }
        </KeyboardLineContainer>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_SECOND_LINE.map((keyboardItem: WindowsKeyboardType) => {
              return (
                <KeyboardItem {...keyboardItem} />
              )
            })
          }
        </KeyboardLineContainer>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_THIRD_LINE.map((keyboardItem: WindowsKeyboardType) => {
              return (
                <KeyboardItem {...keyboardItem} />
              )
            })
          }
        </KeyboardLineContainer>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_FOURTH_LINE.map((keyboardItem: WindowsKeyboardType) => {
              return (
                <KeyboardItem {...keyboardItem} />
              )
            })
          }
        </KeyboardLineContainer>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_FIFTH_LINE.map((keyboardItem: WindowsKeyboardType) => {
              return (
                <KeyboardItem {...keyboardItem} />
              )
            })
          }
        </KeyboardLineContainer>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_SIXTH_LINE.map((keyboardItem: WindowsKeyboardType) => {
              return (
                <KeyboardItem {...keyboardItem} />
              )
            })
          }
        </KeyboardLineContainer>
      </main>
    </PageContainer>
  )
}