import { FaSearch } from 'react-icons/fa'
export default function PreviousSearches() {
  const searches = [
    'pizza',
    'burger',
    'cookes',
    'juice',
    'biryani',
    'ice cream',
    'lasagna',
    'pudding',
    'soup',
  ]
  return (
    <div className='previous-searches section'>
      <h2>Previous Searches</h2>
      <div className='previous-searches-container'>
        {searches.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + 's' }}
            className='search-item'
          >
            {search}
          </div>
        ))}
      </div>
      <div className='search-box'>
        <input type='text' placeholder='Search ...' />
        <button className='btnm'>
          <FaSearch icon={FaSearch} />
        </button>
      </div>
    </div>
  )
}
