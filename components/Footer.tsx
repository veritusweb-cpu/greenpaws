export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid md:grid-cols-2 gap-12">

          <div>

            <h2 className="text-4xl font-bold text-emerald-400">
              GreenPaws
            </h2>

            <p className="text-gray-400 mt-5 leading-8 max-w-md">
              Compassionate veterinary care with modern medicine,
              trusted by pet owners who want the very best for
              their companions.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-4 text-gray-400">

              <a href="#services" className="hover:text-white transition">
                Services
              </a>

              <a href="#doctors" className="hover:text-white transition">
                Doctors
              </a>

              <a href="#reviews" className="hover:text-white transition">
                Testimonials
              </a>

              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">

          © 2026 GreenPaws Veterinary Clinic. All rights reserved.

        </div>

      </div>

    </footer>
  );
}