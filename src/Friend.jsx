export default function Friend({ friend }) {
  console.log(friend);
  const {name,email,phone,username} = friend;
  return (
    <div className="card">
      <h4>Name:{name} </h4>
      <p>Email:{email}</p>
      <p>Phone Number:{phone}</p>
      <h5>Username:{username}</h5>
    </div>
  );
}
