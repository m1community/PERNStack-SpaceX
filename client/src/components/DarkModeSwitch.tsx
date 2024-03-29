import React from "react"
import { useColorMode, Switch, SwitchProps } from '@chakra-ui/react'

export const DarkModeSwitch: React.FC<SwitchProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Switch
      position="fixed"
      top="1rem"
      right="1rem"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
      defaultChecked
      {...props}
    />
  )
}
