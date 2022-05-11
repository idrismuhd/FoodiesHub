import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
export default function ChiefCard({ chief }) {
  return (
    <div className='chief-card'>
      <img src={chief.img} alt='' />
      <div className='chief-card-info'>
        <h3 className='chief-card-name'>{chief.name}</h3>
        <p className='chief-recipe-count'>
          Recipes: <b>{chief.recipesCount}</b>
        </p>
        <p className='chief-cuisine'>
          Cuisine: <b>{chief.cuisine}</b>
        </p>
        <p className='chief-icons'>
          <FaFacebook className='facbook' />
          <FaTwitter className='twitter' />
          <FaInstagram className='insta' />
        </p>
      </div>
    </div>
  )
}
