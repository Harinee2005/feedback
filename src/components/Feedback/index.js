import {Component} from 'react'
import GetEmoji from '../GetEmoji'
import './index.css'

class Feedback extends Component {
  state = {doneFeedback: false}

  onFeedback = () => {
    this.setState({doneFeedback: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {doneFeedback} = this.state

    return (
      <div className="background">
        <div className="container">
          {!doneFeedback ? (
            <>
              <h1 className="feedback-qn">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emojis-container">
                {emojis.map(eachEmoji => (
                  <GetEmoji
                    details={eachEmoji}
                    onSubmit={this.onFeedback}
                    key={eachEmoji.id}
                  />
                ))}
              </ul>
            </>
          ) : (
            <>
              <img className="emojis" src={loveEmojiUrl} alt="love emoji" />
              <h1 className="feedback-qn">Thank You!</h1>
              <p className="thankyou-description">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
