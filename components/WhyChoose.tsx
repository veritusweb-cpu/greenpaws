import {
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Experienced Veterinarians",
    description:
      "Our highly qualified veterinary team provides compassionate care backed by years of clinical expertise.",
  },
  {
    icon: Stethoscope,
    title: "Advanced Medical Equipment",
    description:
      "Modern diagnostic technology helps us deliver accurate treatment and faster recovery for every pet.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "Every pet is treated like family with patience, empathy, and personalized attention from our team.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-emerald-700 font-semibold">
            Why Choose GreenPaws
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Trusted Care. Modern Medicine. Happy Pets.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine advanced veterinary medicine with genuine compassion to
            provide the highest standard of care for every pet.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">

                  <Icon className="w-8 h-8 text-emerald-700" />

                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mt-8">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}