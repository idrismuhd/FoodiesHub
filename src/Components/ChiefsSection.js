import ChiefCard from './ChiefCard'

export default function ChiefsSection() {
  const chiefs = [
    {
      name: 'Benjamin Abale',
      img: '/img/top-chiefs/download (2).jpg',
      recipesCount: '10',
      cuisine: 'Mexican',
    },
    {
      name: 'Emma Richard',
      img: '/img/top-chiefs/download (3).jpg',
      recipesCount: '05',
      cuisine: 'Japanese',
    },
    {
      name: 'Monday Sule',
      img: '/img/top-chiefs/download (4).jpg',
      recipesCount: '13',
      cuisine: 'Italin',
    },
    {
      name: 'Sani Adele',
      img: '/img/top-chiefs/download (5).jpg',
      recipesCount: '08',
      cuisine: 'American',
    },
    {
      name: 'Peter Shedrack',
      img: '/img/top-chiefs/download (1).jpg',
      recipesCount: '09',
      cuisine: 'French',
    },
    {
      name: 'Gabriel Lai',
      img: '/img/top-chiefs/download.jpg',
      recipesCount: '09',
      cuisine: 'French',
    },
  ]
  return (
    <div className='section chiefs'>
      <h1 className='title'> Our Top Chiefs </h1>
      <div className='top-chiefs-container'>
        {chiefs.map((chief) => (
          <ChiefCard key={chief.name} chief={chief} />
        ))}
      </div>
    </div>
  )
}
