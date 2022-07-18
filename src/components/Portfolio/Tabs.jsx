import { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient'

const Tabs = ({ tabs, activeTab, handleTabClick }) => {
  const [categories, setCategories] = useState([])

  const loadCategories = async () => {
    let { data: categories, error } = await supabase
      .from('categories')
      .select('*')
      .order('id')

    setCategories(categories)
  }

  useEffect(() => {
    loadCategories()
  }, [])

  const renderTabs = categories.map((tab) => {
    return (
      <button
        className={tab.title === activeTab ? 'tab active' : 'tab'}
        data-category={tab.category}
        onClick={handleTabClick}
        key={tab.id}>
        {tab.title}
      </button>
    )
  })

  return <div className='tabs'>{renderTabs}</div>
}

export default Tabs
