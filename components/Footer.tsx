export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Brand */}
          <div>

            <h2 className="text-4xl font-bold text-emerald-400">
              Surya Pet & Vet Clinic
            </h2>

            <p className="text-gray-400 mt-5 leading-8 max-w-md">
              Veterinary care and pet supplies in Shaheen Bagh, Jasola,
              making it easier for pet parents to care for their companions.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-4 text-gray-400">

              <a
                href="#services"
                className="hover:text-white transition"
              >
                Services
              </a>

              <a
                href="#reviews"
                className="hover:text-white transition"
              >
                Reviews
              </a>

              <a
                href="#appointment"
                className="hover:text-white transition"
              >
                Get In Touch
              </a>

              <a
                href="#contact"
                className="hover:text-white transition"
              >
                Contact
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4 text-gray-500 text-sm">

          <p>
            © 2026 Surya Pet & Vet Clinic. All rights reserved.
          </p>

          <p>
            Shaheen Bagh, New Delhi
          </p>

        </div>

      </div>

    </footer>
  );
}