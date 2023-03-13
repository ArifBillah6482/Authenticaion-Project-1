function Profile() {
  const user = JSON.parse(window.localStorage.getItem("user"));
  return <div>{user.username}</div>;
}
/// /// /// /// ///
export default Profile;
