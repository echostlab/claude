export class ColorFile {
  constructor(path = '', content = '') {
    this.path = path
    this.content = content
  }
}

export class ColorDiff {
  diff() {
    return []
  }
}

export function getSyntaxTheme() {
  return {
    added: 'green',
    removed: 'red',
    unchanged: 'white',
  }
}
