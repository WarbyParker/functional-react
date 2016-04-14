import React from 'react'

export default (Component) => class Ticker extends React.Component {
  constructor () {
    super()
    this.tick = this.tick.bind(this)
    this.state = { ticker: 0 }
  }

  tick () {
    this.setState({ ticker: this.state.ticker + 1 })
  }

  componentDidMount () {
    setInterval(() => this.tick(), 1000)
  }

  render () {
    return (
      <Component
        {...this.state}
        {...this.props}
      />
    )
  }
}
