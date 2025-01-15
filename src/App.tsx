import React from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  CheckCircle,
  Cpu,
  Wifi,
  HardDrive,
  Database,
  Monitor,
  Truck,
  ArrowRight,
} from "lucide-react";

function App() {
  const services = [
    {
      icon: <Monitor />,
      title: "Manutenção de Computadores",
      description: "Reparo e manutenção de computadores e notebooks",
    },
    {
      icon: <Wifi />,
      title: "Redes e Wi-Fi",
      description: "Configuração e otimização de redes",
    },
    {
      icon: <HardDrive />,
      title: "Formatação e Sistemas",
      description: "Instalação de sistemas e remoção de vírus",
    },
    {
      icon: <Database />,
      title: "Recuperação de Dados",
      description: "Backup e recuperação de arquivos",
    },
    {
      icon: <Cpu />,
      title: "Suporte Remoto",
      description: "Assistência online para problemas simples",
    },
    {
      icon: <Truck />,
      title: "Atendimento Domiciliar",
      description: "Serviço na sua casa ou escritório",
    },
  ];

  const whatsappLink = "https://wa.me/5561995039289";

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://github.com/hiagodrigo/renovotech/blob/main/public/Renovo_Tech_Logo.png?raw=true"
                alt="Renovo Tech Logo"
                className="h-10"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-renovo-dark hover:text-renovo-blue font-medium"
              >
                Serviços
              </a>
              <a
                href="#about"
                className="text-renovo-dark hover:text-renovo-blue font-medium"
              >
                Sobre
              </a>
              <a
                href="#contact"
                className="text-renovo-dark hover:text-renovo-blue font-medium"
              >
                Contato
              </a>
              <a href={whatsappLink} className="btn-primary">
                Agendar Atendimento
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-renovo-gradient-start to-renovo-gradient-end overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Soluções em Tecnologia na Sua Porta!
              </h1>
              <p className="text-xl mb-10 text-white/90">
                Manutenção de computadores, redes e mais, onde você estiver em
                Valparaíso de Goiás.
              </p>
              <div className="flex items-center gap-6">
                <a href={whatsappLink} className="btn-primary">
                  Solicitar Atendimento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#about" className="btn-outline">
                  Saiba mais
                </a>
              </div>
              <p className="mt-8 text-lg font-medium flex items-center">
                <CheckCircle className="mr-2 h-5 w-5" />
                Se não resolver, não paga!
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80"
                alt="Técnico trabalhando"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-renovo-dark">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group">
                <div className="text-renovo-blue mb-4 p-3 bg-renovo-blue/5 rounded-xl w-fit group-hover:bg-renovo-blue/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-renovo-dark">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-renovo-dark">
            Por que Escolher a Renovo Tech?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Equipe Experiente",
                  desc: "Profissionais qualificados e confiáveis.",
                },
                {
                  title: "Atendimento Rápido",
                  desc: "Resposta ágil em toda Valparaíso de Goiás.",
                },
                {
                  title: "Garantia de Satisfação",
                  desc: "Se não resolver, você não paga!",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="p-2 bg-renovo-blue/5 rounded-lg group-hover:bg-renovo-blue/10 transition-colors">
                    <CheckCircle className="text-renovo-blue h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-renovo-dark mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80"
                alt="Equipe técnica"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-renovo-dark/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-renovo-dark">
            Entre em Contato
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Phone />,
                    title: "WhatsApp",
                    content: (
                      <a
                        href={whatsappLink}
                        className="text-renovo-blue hover:underline"
                      >
                        Clique aqui para falar conosco
                      </a>
                    ),
                  },
                  {
                    icon: <Mail />,
                    title: "E-mail",
                    content: (
                      <a
                        href="mailto:renovotechexpert@gmail.com"
                        className="text-renovo-blue hover:underline"
                      >
                        renovotechexpert@gmail.com
                      </a>
                    ),
                  },
                  {
                    icon: <Clock />,
                    title: "Horário de Atendimento",
                    content: "Segunda a Sábado, das 8h às 18h",
                  },
                  {
                    icon: <MapPin />,
                    title: "Área de Atendimento",
                    content: "Valparaíso de Goiás e regiões próximas",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="p-2 bg-renovo-blue/5 rounded-lg group-hover:bg-renovo-blue/10 transition-colors">
                      {React.cloneElement(item.icon, {
                        className: "text-renovo-blue h-6 w-6",
                      })}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-renovo-dark mb-1">
                        {item.title}
                      </h3>
                      <div className="text-gray-600">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-renovo-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <img
                src="./Renovo_Tech_Logo.png"
                alt="Renovo Tech Logo"
                className="h-8 mb-4"
              />
              <p className="text-white/80">
                © 2025 Renovo Tech. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex gap-8">
              <a
                href="#services"
                className="hover:text-renovo-blue transition-colors"
              >
                Serviços
              </a>
              <a
                href="#about"
                className="hover:text-renovo-blue transition-colors"
              >
                Sobre
              </a>
              <a
                href="#contact"
                className="hover:text-renovo-blue transition-colors"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
