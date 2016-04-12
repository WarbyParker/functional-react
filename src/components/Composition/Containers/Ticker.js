import React from 'react'

let Ticker = Component => class extends React.Component {
  constructor () {
    super()
    this.tick = this.tick.bind(this)
    this.state = { ticker: 0 }
  }

  tick () {
    this.setState({ ticker: this.state.ticker + 1 })
  }

  componentWillMount () {
    console.log(`mounting...: provided via Ticker Container`)
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

export default Ticker
