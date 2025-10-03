export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 border-t border-cyan-100">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left space-y-3">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Drop Anxiety
            </h3>
            <p className="text-gray-600 text-sm max-w-xs leading-relaxed">
              Your trusted companion on the journey to mental wellness and inner peace.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-sm font-semibold text-gray-700">Download Our App</p>
            <div className="flex gap-3">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img src="/app-store-badge.png" alt="Download on the App Store" className="h-10" />
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img src="/google-play-badge.png" alt="Get it on Google Play" className="h-10" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors font-medium">
              Resources
            </a>
            <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors font-medium">
              Support
            </a>
            <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors font-medium">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors font-medium">
              Terms
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cyan-100 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Drop Anxiety. All rights reserved. | Developed by{" "}
            <span className="font-semibold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              upclude dev
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
