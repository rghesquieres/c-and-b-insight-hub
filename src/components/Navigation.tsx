
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-[#106653] text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/6704a837-576d-4d57-b1fc-0149f467cb30.png" 
            alt="C&B Consulting" 
            className="h-8 w-auto"
          />
        </Link>
        
        <div className="flex space-x-8">
          <Link 
            to="/compensations" 
            className="text-white hover:text-cream transition-colors font-medium no-underline"
          >
            Compensations
          </Link>
          <Link 
            to="/benefits" 
            className="text-white hover:text-cream transition-colors font-medium no-underline"
          >
            Benefits
          </Link>
          <Link 
            to="/hr-control" 
            className="text-white hover:text-cream transition-colors font-medium no-underline"
          >
            HR Control
          </Link>
          <Link 
            to="/login" 
            className="text-white hover:text-cream transition-colors font-medium no-underline"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
