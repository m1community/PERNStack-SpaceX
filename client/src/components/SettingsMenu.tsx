import { Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup, MenuProps } from "@chakra-ui/react"
import React from "react"


export const SettingsMenu: React.FC<MenuProps> = ({children}) => {

    return (
        <Menu>
            <MenuButton>
                {children}
            </MenuButton>
            <MenuList minW="240px" >
                <MenuOptionGroup defaultValue="fr" title="Languages" type="checkbox">
                    <MenuItemOption value="fr">French</MenuItemOption>
                    <MenuItemOption value="en">English</MenuItemOption>
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    )
}