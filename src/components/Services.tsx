import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const servicesColumn1 = [
    {
      title: "Odontología General",
      description: "Cuidado integral de tu salud bucal con chequeos preventivos, limpiezas dentales, empastes y tratamientos para mantener tu sonrisa saludable."
    },
    {
      title: "Estética Dental y Restaurativa",
      description: "Mejora la apariencia de tu sonrisa con blanqueamientos, carillas, y restauraciones que combinan belleza y funcionalidad."
    },
    {
      title: "Implantología",
      description: "Reemplazo permanente de dientes perdidos mediante implantes dentales de última generación para restaurar tu sonrisa completa."
    },
    {
      title: "Periodoncia (encías y hueso)",
      description: "Tratamiento especializado de enfermedades de las encías y hueso que sostiene los dientes, previniendo la pérdida dental."
    },
    {
      title: "Odontopediatría",
      description: "Atención dental especializada para niños, creando experiencias positivas desde temprana edad para una salud bucal de por vida."
    }
  ];

  const servicesColumn2 = [
    {
      title: "Endodoncia (tratamiento de nervio)",
      description: "Tratamientos de conducto especializados para salvar dientes dañados y eliminar el dolor con técnicas avanzadas."
    },
    {
      title: "Patología Oral",
      description: "Diagnóstico y tratamiento de enfermedades que afectan la cavidad oral, incluyendo lesiones y anomalías de tejidos blandos."
    },
    {
      title: "Cirugía Oral y Orofacial",
      description: "Procedimientos quirúrgicos especializados incluyendo extracciones complejas, cirugía de muelas del juicio y correcciones maxilofaciales."
    },
    {
      title: "Ortodoncia",
      description: "Corrección de la posición de dientes y mandíbula mediante brackets, alineadores invisibles y otros tratamientos ortodónticos."
    },
    {
      title: "Odontología Digital",
      description: "Tecnología de vanguardia con escaneo 3D, diseño digital de sonrisas y tratamientos asistidos por computadora para resultados precisos."
    }
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Column 1 */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {servicesColumn1.map((service, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Column 2 */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {servicesColumn2.map((service, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
