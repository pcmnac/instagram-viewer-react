import MediaItem from '../media-item';
import './styles.sass';

function Media({
  media,
}) {
  return (
    <div className="media">
      {media.map((item) => (<MediaItem key={item.id} {...item} />))}
    </div>
  );
}

export default Media;