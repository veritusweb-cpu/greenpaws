import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-emerald-700 font-semibold">
            Customer Reviews
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Loved By Pet Parents
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            See why pet parents in the local community trust Surya Pet & Vet
            Clinic for their companions.
          </p>

        </div>

        {/* Rating */}
        <div className="mt-16 max-w-3xl mx-auto">

          <div className="bg-slate-50 border border-gray-100 rounded-[32px] p-10 md:p-12 text-center shadow-sm">

            <div className="flex justify-center gap-2">

              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-8 h-8 fill-yellow-400 text-yellow-400"
                />
              ))}

            </div>

            <h3 className="text-5xl font-bold text-gray-900 mt-6">
              4.9
            </h3>

            <p className="text-xl text-gray-600 mt-2">
              Google Rating
            </p>

            <p className="text-gray-500 mt-2">
              Based on 85+ reviews
            </p>

            <div className="flex justify-center mt-8">
              <Quote className="w-10 h-10 text-emerald-200" />
            </div>

            <p className="text-gray-600 mt-4 leading-8 max-w-xl mx-auto">
              A strong reputation is built one happy pet and one satisfied
              pet parent at a time.
            </p>

          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">

          <a
            href="#appointment"
            className="inline-flex bg-emerald-700 hover:bg-emerald-800 transition text-white px-8 py-4 rounded-full font-semibold"
          >
            Book An Appointment
          </a>

        </div>

      </div>
    </section>
  );
}