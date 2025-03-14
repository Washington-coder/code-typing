import { FaChevronDown, FaChevronUp } from "react-icons/fa";
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
  children?: React.ReactNode;
}

export function Typing() {
  return (
    <PageContainer>
      <main>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_FIRST_LINE.map((keyboardItem: WindowsKeyboardType) => {
              return (
                <KeyboardItem {...keyboardItem}>{keyboardItem.label}</KeyboardItem>
              )
            })
          }
        </KeyboardLineContainer>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_SECOND_LINE.map((keyboardItem: WindowsKeyboardType) => {
              return (
                <KeyboardItem {...keyboardItem}>
                  {keyboardItem.secondaryLabel ?
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <p>{keyboardItem.secondaryLabel}</p>
                      <p>{keyboardItem.label}</p>
                    </div>
                    :
                    keyboardItem.label
                  }
                </KeyboardItem>
              )
            })
          }
        </KeyboardLineContainer>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_THIRD_LINE.map((keyboardItem: WindowsKeyboardType) => {
              return (
                <KeyboardItem {...keyboardItem}>{keyboardItem.label}</KeyboardItem>
              )
            })
          }
        </KeyboardLineContainer>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_FOURTH_LINE.map((keyboardItem: WindowsKeyboardType) => {
              return (
                <KeyboardItem {...keyboardItem}>
                  {keyboardItem.secondaryLabel ?
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <p>{keyboardItem.secondaryLabel}</p>
                      <p>{keyboardItem.label}</p>
                    </div>
                    :
                    keyboardItem.label
                  }
                </KeyboardItem>
              )
            })
          }
        </KeyboardLineContainer>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_FIFTH_LINE.map((keyboardItem: WindowsKeyboardType) => {
              return (
                <KeyboardItem {...keyboardItem}>
                  {keyboardItem.secondaryLabel ?
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <p>{keyboardItem.secondaryLabel}</p>
                      <p>{keyboardItem.label}</p>
                    </div>
                    :
                    keyboardItem.label
                  }
                </KeyboardItem>
              )
            })
          }
        </KeyboardLineContainer>
        <KeyboardLineContainer>
          {
            WINDOWS_KEYBOARD_DATA_SIXTH_LINE.map((keyboardItem: WindowsKeyboardType) => {
              return (
                <KeyboardItem {...keyboardItem}>
                  {keyboardItem.label === 'up-down' ?
                    <div style={{ display: 'flex', width: '100%', flexDirection: 'column', gap: '0.3rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <FaChevronUp />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <FaChevronDown />
                      </div>
                    </div>
                    :
                    keyboardItem.label
                  }
                </KeyboardItem>
              )
            })
          }
        </KeyboardLineContainer>
      </main>
    </PageContainer>
  )
}