import {Component} from 'react'
import './index.css'

class GetEmoji extends Component {
  onClicking = () => {
    const {onSubmit} = this.props
    onSubmit()
  }

  render() {
    const {details, key} = this.props
    const {name, imageUrl} = details
    return (
      <li className="sub-container">
        <img
          className="emojis"
          onClick={this.onClicking}
          src={imageUrl}
          alt={name}
        />
        <p className="emoji-description">{name}</p>
      </li>
    )
  }
}

export default GetEmoji
