import './styles.sass';

function Profile({
  username,
  media_count: mediaCount,
}) {
  return (
    <div className="profile">
      <h2><a href={`https://instagram.com/${username}`}>@{username}</a> ({mediaCount} posts)</h2>
    </div>
  );
}

export default Profile;