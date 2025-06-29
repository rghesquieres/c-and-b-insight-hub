
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/c26c1cc8-f4e2-4ece-886c-b7c16719a998.png')`,
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#032821] opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/6704a837-576d-4d57-b1fc-0149f467cb30.png" 
              alt="C&B Consulting" 
              className="h-12 w-auto"
            />
          </div>
          <Link 
            to="/login" 
            className="text-white hover:text-cream transition-colors font-medium text-lg no-underline"
          >
            Login
          </Link>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center px-6 py-16 min-h-[calc(100vh-80px)]">
          {/* Hero Text */}
          <div className="text-center mb-32 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-wide">
              BE MORE THAN
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide max-w-4xl mx-auto">
              La puissance de la data analyse au service de l'expertise RH
            </p>
            
            {/* CTA Button */}
            <div className="mt-12">
              <button className="bg-white text-[#032821] px-8 py-3 rounded-lg font-medium hover:bg-cream transition-colors text-lg">
                Comment pouvons-nous vous aider ?
              </button>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl animate-slide-up">
            {/* Compensations */}
            <Link to="/compensations" className="block h-full">
              <div className="bg-[#106653] text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 min-h-[280px] flex flex-col">
                <h3 className="text-white font-semibold text-xl mb-4 pb-2 border-b border-white/30">
                  Compensations
                </h3>
                <p className="text-white/90 leading-relaxed flex-grow">
                  Analyse des données salariales, benchmarking, politiques de rémunération
                </p>
              </div>
            </Link>

            {/* Benefits */}
            <Link to="/benefits" className="block h-full">
              <div className="bg-[#106653] text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 min-h-[280px] flex flex-col">
                <h3 className="text-white font-semibold text-xl mb-4 pb-2 border-b border-white/30">
                  Benefits
                </h3>
                <p className="text-white/90 leading-relaxed flex-grow">
                  Accords, Participation, VEA, PEE, PERCO et avantages en nature et sociaux
                </p>
              </div>
            </Link>

            {/* HR Control */}
            <Link to="/hr-control" className="block h-full">
              <div className="bg-[#106653] text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 min-h-[280px] flex flex-col">
                <h3 className="text-white font-semibold text-xl mb-4 pb-2 border-b border-white/30">
                  HR Control
                </h3>
                <p className="text-white/90 leading-relaxed flex-grow">
                  Maîtrise de la masse salariale, Pilotage social & légal
                </p>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
