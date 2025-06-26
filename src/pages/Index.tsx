
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
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
          className="text-korn hover:text-korn-600 transition-colors font-medium text-lg no-underline"
        >
          Login
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 py-16">
        {/* Tagline */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="tagline text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            La puissance de la data analyse<br />
            au service de l'expertise RH
          </h1>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl animate-slide-up">
          {/* Compensations */}
          <Link to="/compensations" className="block h-full">
            <div className="service-card">
              <h3 className="m-0">Compensations</h3>
              <p>
                Analyse des données salariales et benchmarking pour optimiser 
                vos politiques de rémunération et maintenir votre compétitivité.
              </p>
            </div>
          </Link>

          {/* Benefits */}
          <Link to="/benefits" className="block h-full">
            <div className="service-card">
              <h3 className="m-0">Benefits</h3>
              <p>
                VEA. PEE. PERCO et avantages en nature et sociaux. 
                Optimisez votre politique d'avantages sociaux et leur impact fiscal.
              </p>
            </div>
          </Link>

          {/* HR Control */}
          <Link to="/hr-control" className="block h-full">
            <div className="service-card">
              <h3 className="m-0">HR Control</h3>
              <p>
                Pilotage et gestion des indicateurs sociaux pour un suivi 
                précis de vos performances RH et l'aide à la décision.
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Index;
