import { Star, Heart, Stethoscope, Clock3 } from "lucide-react";

const stats = [
  {
    icon: Star,
    title: "4.9/5",
    subtitle: "Average Rating",
  },
  {
    icon: Heart,
    title: "5,000+",
    subtitle: "Happy Pets",
  },
  {
    icon: Stethoscope,
    title: "15+",
    subtitle: "Years Experience",
  },
  {
    icon: Clock3,
    title: "24/7",
    subtitle: "Emergency Care",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="bg-emerald-100 p-4 rounded-2xl">
                <item.icon className="w-7 h-7 text-emerald-700" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-500">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}