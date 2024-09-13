import { Link } from 'expo-router';

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Products page</p>
      <Link href="/">Home</Link>
    </div>
  );
}
