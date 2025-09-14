export default function User({ user }) {
  const { name, email, website } = user;
  return (
    <div className="border border-gray-400 p-6">
      <h2>
        <span className="font-semibold">Name:</span> {name}
      </h2>
      <h2>
        <span className="font-semibold">Email:</span> {email}
      </h2>
      <h2>
        <span className="font-semibold">Website:</span> {website}
      </h2>
    </div>
  );
}
