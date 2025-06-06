import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} blue & brown properties LLC. All
            rights reserved.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            1755 Archdale Drive, Charlotte, NC 28210
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Mayer Drive, Highland NY 12528
          </p>
        </div>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li>
            <Link
              to="/privacy-policy"
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/terms-of-service"
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
