// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props

  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="list-container">
      <p className="search-list">{suggestion}</p>
      <button type="button" className="button" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow-logo"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
