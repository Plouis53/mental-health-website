export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 py-6">
      <div className="container mx-auto">
        <p>&copy; 2024 Calm Play. All rights reserved.</p>
        <div className="mt-4">
          <a href="#privacy" className="hover:text-purple-500 mx-2">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-purple-500 mx-2">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
