import { Icon } from "../utils/Icon"
import { themeButtonStyle } from '../style.css'

export function Theme() {
    return /*html*/`
        <button class="${themeButtonStyle}">${Icon('light')}</button>
    `
}