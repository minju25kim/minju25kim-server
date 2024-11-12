
import { Language, Download, Share } from '../assets/svg/Button.ts'

export function Icon(icon: string): string {
    switch (icon) {
        case 'lang':
            return Language();
        case 'download':
            return Download();
        case 'share':
            return Share();
        default:
            return "";
    }
}