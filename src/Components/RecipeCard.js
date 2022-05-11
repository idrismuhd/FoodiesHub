import CustomImage from './CustomImage'

export default function RecipeCard({ recipe }) {
  return (
    <div className='recipe-card'>
      <CustomImage imgSrc={recipe.image} pt='65%' />
      <div className='recipe-card-info'>
        <img className='auther-img' src={recipe.authorImg} alt='' />
        <p className='recipe-title'>{recipe.title}</p>
        <p className='recipe-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea
          magnam animi necessitatibus soluta eum?
        </p>
        <a className='view-btn' href='#!'>
          VIEW RECIPE
        </a>
      </div>
    </div>
  )
}
