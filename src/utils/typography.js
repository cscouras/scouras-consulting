import Typography from "typography"
import bootstrapTheme from "typography-theme-bootstrap"

bootstrapTheme.overrideThemeStyles = ( { rhythm }, options) => ({
    'table': {
        width: '60%',
        fontSize: '.8rem'
    },
    'h1': {
        marginBottom: 0,
    }
})

const typography = new Typography(bootstrapTheme)

export default typography
export const rhythm = typography.rhythm
