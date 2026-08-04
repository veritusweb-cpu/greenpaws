import {
  Stethoscope,
  Syringe,
  Bone,
  Ambulance,
  Smile,
  Scissors,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Checkups",
    description:
      "Routine health examinations to keep your pets healthy throughout every stage of life.",
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    description:
      "Protect your pets from preventable diseases with complete vaccination programs.",
  },
  {
    icon: Bone,
    title: "Surgery",
    description:
      "Safe surgical procedures performed with modern equipment and experienced veterinarians.",
  },
  {
    icon: Ambulance,
    title: "Emergency Care",
    description:
      "Immediate medical attention whenever your pet needs urgent treatment.",
  },
  {
    icon: Smile,
    title: "Dental Care",
    description:
      "Professional dental cleaning and treatment for healthy teeth and gums.",
  },
  {
    icon: Scissors,
    title: "Pet Grooming",
    description:
      "Premium grooming services to keep your pets clean, comfortable, and happy.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-emerald-700 font-semibold">
            Our Services
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Complete Care For Every Stage Of Your Pet's Life
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            From preventive care to emergency treatment, our experienced team
            provides everything your pet needs to stay healthy and happy.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">

                  <Icon className="w-8 h-8 text-emerald-700" />

                </div>

                <h3 className="text-2xl font-semibold mt-8 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-8">
                  {service.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}