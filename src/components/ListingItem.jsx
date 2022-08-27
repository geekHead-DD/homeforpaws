import { Link } from 'react-router-dom'
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg'
import { ReactComponent as EditIcon } from '../assets/svg/editIcon.svg'
import dogageIcon from '../assets/svg/dogage.svg'
import dogIcon from '../assets/svg/dog.svg'

function ListingItem({ listing, id, onEdit, onDelete }) {
  return (
    <li className='categoryListing'>
      <Link
        to={`/category/${listing.type}/${id}`}
        className='categoryListingLink'
      >
        <img
          src={listing.imgUrls[0]}
          alt={listing.name}
          className='categoryListingImg'
        />
        <div className='categoryListingDetails'>
          <p className='categoryListingName'>{listing.name}</p>
          <p className='categoryListingLocation'>{listing.location}</p>
          
          {listing.type==='sale'&&
          <p className='categoryListingPrice'>
            $
            {listing.offer
              ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            {/* {listing.type === 'rent' && ' / Month'} */}
          </p>}
          <div className='categoryListingInfoDiv'>
            <img width='9%' src={dogageIcon} alt='bath' />
            <p className='categoryListingInfoText'>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} years old`
                : '1 year old'}
            </p>
            <img width='9%' src={dogIcon} alt='bed' />
            <p className='categoryListingInfoText'>
              {listing.gender ==='male'
                ? ''
                : `${listing.bathrooms} puppies`}
            </p>
          </div>
        </div>
      </Link>

      {onDelete && (
        <DeleteIcon
          className='removeIcon'
          fill='rgb(231, 76,60)'
          onClick={() => onDelete(listing.id, listing.name)}
        />
      )}

      {onEdit && <EditIcon className='editIcon' onClick={() => onEdit(id)} />}
    </li>
  )
}

export default ListingItem
