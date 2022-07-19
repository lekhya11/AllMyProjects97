TabItem ------> folder

Index.js-----file

import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

index.css------------

.tab-btn {
  font-family: 'Roboto';
  color: #9aa5b1;
  font-weight: 500;
  font-size: 16px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
}

@media screen and (min-width: 992px) {
  .tab-btn {
    font-size: 24px;
  }
}

.active-tab-btn {
  border-bottom: 2px solid #0b69ff;
  color: #3e4c59;
}

.tab-btn:hover {
  border-bottom: 2px solid aqua;
  color: red;
  font-size: 20px;
}
