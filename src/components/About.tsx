import { Building2, Heart, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Building2,
      title: "Nueva Sede",
      description: "Instalaciones modernas en Santo Domingo de Heredia",
    },
    {
      icon: Heart,
      title: "Atención Personalizada",
      description: "Cuidamos de tu salud bucal con dedicación",
    },
    {
      icon: Shield,
      title: "Tecnología Avanzada",
      description: "Equipos de última generación para tu comodidad",
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6">
            Sobre <span className="text-primary">Nosotros</span>
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            En Dental Care Costa Rica estamos emocionados de anunciar nuestra nueva sede en Heredia, Santo Domingo. 
            Queremos seguir ofreciendo nuestros servicios odontológicos de calidad con la tecnología más avanzada 
            y la mejor atención para nuestros pacientes. Queremos brindarte atención personalizada y garantizar 
            que cada visita a nuestra clínica sea una experiencia cómoda y segura.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
                  <feature.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
