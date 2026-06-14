function About() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>

      <p className="text-gray-700 mb-2">
        This is the About page.
      </p>

      <p className="text-gray-700">
        It is rendered when the URL path is <strong>/about</strong>.
      </p>
    </div>
  );
}

export default About;