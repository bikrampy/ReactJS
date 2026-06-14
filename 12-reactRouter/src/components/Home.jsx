function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      <p className="text-gray-700 mb-2">
        Welcome to the Home page of our React Router demo.
      </p>

      <p className="text-gray-700">
        This page is rendered when the URL path is <strong>/</strong>.
      </p>
    </div>
  );
}

export default Home;