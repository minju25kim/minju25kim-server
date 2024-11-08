
import { Language, Upload, Download, Share } from '../assets/svg/Button.ts'
import { Dark, Light, System } from '../assets/svg/Theme.ts'

export function Icon(icon: string): string {
    switch (icon) {
        case 'lang':
            return Language();
        case 'up':
            return Upload();
        case 'down':
            return Download();
        case 'share':
            return Share();
        case 'dark':
            return Dark();
        case 'light':
            return Light();
        case 'system':
            return System();
        default:
            return "";
    }
}