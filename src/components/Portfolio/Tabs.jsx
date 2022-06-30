const Tabs = ({ tabs, activeTab, handleTabClick }) => {
  const renderTabs = tabs.map((tab) => {
    return (
      <button
        className={tab.title === activeTab ? 'tab active' : 'tab'}
        data-category={tab.category}
        onClick={handleTabClick}
        key={tab.category}>
        {tab.title}
      </button>
    )
  })

  return <div className='tabs'>{renderTabs}</div>
}

export default Tabs
