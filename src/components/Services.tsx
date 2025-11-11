import { Card, CardContent } from "@/components/ui/card";
import {
  Smile,
  Sparkles,
  Anchor,
  Activity,
  Baby,
  Zap,
  FileText,
  Scissors,
  Fingerprint,
  Monitor,
} from "lucide-react";

const Services = () => {
  const services = [
    { icon: Smile, title: "Odontología General", color: "from-blue-500 to-blue-600" },
    { icon: Sparkles, title: "Estética Dental y Restaurativa", color: "from-cyan-500 to-cyan-600" },
    { icon: Anchor, title: "Implantología", color: "from-sky-500 to-sky-600" },
    { icon: Activity, title: "Periodoncia (encías y hueso)", color: "from-blue-400 to-blue-500" },
    { icon: Baby, title: "Odontopediatría", color: "from-indigo-500 to-indigo-600" },
    { icon: Zap, title: "Endodoncia (tratamiento de nervio)", color: "from-violet-500 to-violet-600" },
    { icon: FileText, title: "Patología Oral", color: "from-blue-600 to-blue-700" },
    { icon: Scissors, title: "Cirugía Oral y Orofacial", color: "from-cyan-600 to-cyan-700" },
    { icon: Fingerprint, title: "Ortodoncia", color: "from-sky-600 to-sky-700" },
    { icon: Monitor, title: "Odontología Digital", color: "from-blue-500 to-blue-600" },
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Servicios de Vanguardia para tu <span className="text-primary">Sonrisa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nos especializamos en una amplia gama de tratamientos para el cuidado de tu salud bucal
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-full mb-4`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-base font-semibold text-foreground leading-tight">
                  {service.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
