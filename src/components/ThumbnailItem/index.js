import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, onToggleThumbnail} = props
  const {thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    onToggleThumbnail(thumbnailUrl)
  }

  return (
    <li className="thumbnail-card">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnail}
      >
        <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default ThumbnailItem
