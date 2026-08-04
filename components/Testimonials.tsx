import { Star } from "lucide-react";

const reviews = [
  {
    name: "Emma Thompson",
    pet: "Golden Retriever Owner",
    review:
      "The team at GreenPaws treated our dog with genuine compassion and professionalism. Every visit has been a wonderful experience.",
  },
  {
    name: "David Wilson",
    pet: "Cat Owner",
    review:
      "From the reception staff to the veterinarians, everyone made us feel comfortable. I wouldn't trust anyone else with my cat.",
  },
  {
    name: "Sophia Miller",
    pet: "Labrador Owner",
    review:
      "Exceptional care during an emergency. The doctors explained everything clearly and treated our Labrador like family.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-emerald-700 font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Trusted By Pet Owners
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Nothing means more to us than the trust of families who choose
            GreenPaws to care for their beloved pets.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-slate-50 border border-gray-100 rounded-3xl p-8 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >

              <div className="flex gap-1">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-6 text-gray-600 leading-8 italic">
                “{review.review}”
              </p>

              <div className="mt-8">

                <h3 className="text-xl font-semibold text-gray-900">
                  {review.name}
                </h3>

                <p className="text-emerald-700 mt-1">
                  {review.pet}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}