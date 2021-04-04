import moment from 'moment';
import './styles.sass';

function MediaItem({
  caption = '',
  media_type: mediaType,
  media_url: mediaUrl,
  thumbnail_url: thumbUrl,
  permalink,
  timestamp,
}) {
  return (
    <div className={`media-item type-${mediaType}`}>
      <div className="container">
        <img src={thumbUrl || mediaUrl} alt={caption} />
        <span className="caption">{caption.substr(0, 50)}{caption.length > 50 && '...'}</span>
      </div>
      <span className="date">{moment(timestamp).fromNow()}</span>
      <a href={permalink} target='instagram'>view on Instagram</a>
    </div>
  );
}

export default MediaItem;