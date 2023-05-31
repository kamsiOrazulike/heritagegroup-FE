import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-4">Sorry, the page you're looking for does not exist.</p>
      <Link href="/">
        <a className="text-blue-500">Go back to the home page</a>
      </Link>
    </div>
  );
};

export default NotFoundPage;
