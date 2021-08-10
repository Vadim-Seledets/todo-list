export interface Theme {
  readonly name: string
  foreground: string
}

export class DarkBlueTheme implements Theme {
  readonly name = 'DarkBlueTheme'
  foreground = '#E0E0E0'
}
