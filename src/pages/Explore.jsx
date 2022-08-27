import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import adopt from '../assets/jpg/adopt.jpg'
import sale from '../assets/jpg/sale.jpg'

function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className='pageHeader'>Explore</p>
      </header>

      <main>
        <Slider />

        <p className='exploreCategoryHeading'>Categories</p>
        <div className='exploreCategories'>
          <Link to='/category/adoption'>
            <img
              src={adopt}
              alt='rent'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Dogs for adoption</p>
          </Link>
          <Link to='/category/sale'>
            <img
              src={sale}
              alt='sell'
              className='exploreCategoryImg'
            />
            <p className='exploreCategoryName'>Dogs for sale</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Explore
