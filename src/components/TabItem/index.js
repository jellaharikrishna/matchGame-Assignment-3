import './index.css'

const TabItem = props => {
  const {tabList, isActiveTabId, onToggleTab} = props
  const {tabId, displayText} = tabList

  const tabClassname = isActiveTabId ? 'active-tabbtn' : 'tabbtn'

  const onClickTab = () => {
    onToggleTab(tabId)
  }

  return (
    <li className="tablist-card">
      <button type="button" className={tabClassname} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
