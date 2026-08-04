const doctors = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Veterinarian",
    qualification: "BVSc, MVSc",
    experience: "12+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
  },
  {
    name: "Dr. Michael Brown",
    role: "Veterinary Surgeon",
    qualification: "BVSc, DACVS",
    experience: "10+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
  },
  {
    name: "Dr. Emily Wilson",
    role: "Small Animal Specialist",
    qualification: "BVSc, MVSc",
    experience: "8+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&q=80",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-emerald-700 font-semibold">
            Meet Our Team
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Experienced Veterinarians You Can Trust
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Our dedicated veterinary professionals combine years of experience
            with genuine compassion to deliver exceptional care for every pet.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-semibold text-gray-900">
                  {doctor.name}
                </h3>

                <p className="mt-2 text-emerald-700 font-medium">
                  {doctor.role}
                </p>

                <p className="mt-3 text-gray-500">
                  {doctor.qualification}
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  {doctor.experience}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}