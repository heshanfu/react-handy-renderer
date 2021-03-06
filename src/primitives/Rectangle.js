import { renderShape } from './shape'

class Rectangle {
  constructor(root, props) {
    this.root = root
    this.props = props
  }

  render = (p, scribble) => {
    renderShape(
      'scribbleRect',
      { root: this.root, props: this.props },
      { p, scribble }
    )
  }
}

export { Rectangle }
