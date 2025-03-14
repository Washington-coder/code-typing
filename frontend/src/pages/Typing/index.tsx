import {
  PageContainer,
  KeyboardItemContainer,
  KeyboardLineContainer
} from "./styles";
import { WINDOWS_KEYBOARD_DATA_FIFTH_LINE, WINDOWS_KEYBOARD_DATA_FIRST_LINE, WINDOWS_KEYBOARD_DATA_FOURTH_LINE, WINDOWS_KEYBOARD_DATA_SECOND_LINE, WINDOWS_KEYBOARD_DATA_SIXTH_LINE, WINDOWS_KEYBOARD_DATA_THIRD_LINE } from "./windowsKeyboardData";
export interface WindowsKeyboardData {
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
            WINDOWS_KEYBOARD_DATA_FIRST_LINE.map((keyboardItem: WindowsKeyboardData, index) => {
              return (
                <KeyboardItemContainer
                  key={index}
                  width={keyboardItem.width}
                  height={keyboardItem.height}
                  labelPosition={keyboardItem.labelPosition}
                >
                  {keyboardItem.label}
                </KeyboardItemContainer>
              )
            })
          }
        </KeyboardLineContainer>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_SECOND_LINE.map((keyboardItem: WindowsKeyboardData, index) => {
              return (
                <KeyboardItemContainer
                  key={index}
                  width={keyboardItem.width}
                  height={keyboardItem.height}
                  labelPosition={keyboardItem.labelPosition}
                >
                  {keyboardItem.label}
                </KeyboardItemContainer>
              )
            })
          }
        </KeyboardLineContainer>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_THIRD_LINE.map((keyboardItem: WindowsKeyboardData, index) => {
              return (
                <KeyboardItemContainer
                  key={index}
                  width={keyboardItem.width}
                  height={keyboardItem.height}
                  labelPosition={keyboardItem.labelPosition}
                >
                  {keyboardItem.label}
                </KeyboardItemContainer>
              )
            })
          }
        </KeyboardLineContainer>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_FOURTH_LINE.map((keyboardItem: WindowsKeyboardData, index) => {
              return (
                <KeyboardItemContainer
                  key={index}
                  width={keyboardItem.width}
                  height={keyboardItem.height}
                  labelPosition={keyboardItem.labelPosition}
                >
                  {keyboardItem.label}
                </KeyboardItemContainer>
              )
            })
          }
        </KeyboardLineContainer>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_FIFTH_LINE.map((keyboardItem: WindowsKeyboardData, index) => {
              return (
                <KeyboardItemContainer
                  key={index}
                  width={keyboardItem.width}
                  height={keyboardItem.height}
                  labelPosition={keyboardItem.labelPosition}
                >
                  {keyboardItem.label}
                </KeyboardItemContainer>
              )
            })
          }
        </KeyboardLineContainer>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_SIXTH_LINE.map((keyboardItem: WindowsKeyboardData, index) => {
              return (
                <KeyboardItemContainer
                  key={index}
                  width={keyboardItem.width}
                  height={keyboardItem.height}
                  labelPosition={keyboardItem.labelPosition}
                >
                  {keyboardItem.label}
                </KeyboardItemContainer>
              )
            })
          }
        </KeyboardLineContainer>
      </main>
    </PageContainer>
  )
}