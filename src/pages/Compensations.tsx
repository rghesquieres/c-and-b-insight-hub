
import Navigation from "@/components/Navigation";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Compensations = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/060a2c0b-4407-4245-9cf9-f28e6533f07b.png')`,
        }}
      >
        <div className="absolute inset-0 bg-cream/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex justify-center mb-6">
                <div className="bg-korn p-4 rounded-full">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant text-korn mb-6">
                Compensations
              </h1>
              <p className="text-xl text-korn-700 max-w-3xl mx-auto leading-relaxed">
                Analyse des données salariales et benchmarking pour optimiser vos politiques 
                de rémunération et maintenir votre compétitivité sur le marché.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
              <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-8 h-8 text-korn mr-3" />
                    <CardTitle className="text-korn">Études de marché</CardTitle>
                  </div>
                  <CardDescription>
                    Analyses comparatives des rémunérations par secteur et fonction
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-korn-700">
                    <li>• Benchmarking salarial sectoriel</li>
                    <li>• Positionnement concurrentiel</li>
                    <li>• Évolution des tendances marché</li>
                    <li>• Recommandations stratégiques</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <DollarSign className="w-8 h-8 text-korn mr-3" />
                    <CardTitle className="text-korn">Politique salariale</CardTitle>
                  </div>
                  <CardDescription>
                    Conception et optimisation de vos grilles de rémunération
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-korn-700">
                    <li>• Grilles de classification</li>
                    <li>• Structures de rémunération</li>
                    <li>• Politique d'augmentation</li>
                    <li>• Gestion des écarts salariaux</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Users className="w-8 h-8 text-korn mr-3" />
                    <CardTitle className="text-korn">Audit & Conseil</CardTitle>
                  </div>
                  <CardDescription>
                    Diagnostic et optimisation de vos pratiques de rémunération
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-korn-700">
                    <li>• Audit des pratiques existantes</li>
                    <li>• Analyse d'équité interne</li>
                    <li>• Conformité réglementaire</li>
                    <li>• Plan d'actions correctives</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <Card className="bg-korn text-white max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-elegant mb-4">
                    Optimisez votre politique de rémunération
                  </h3>
                  <p className="text-lg mb-6 text-white/90">
                    Bénéficiez d'une expertise data-driven pour des décisions éclairées 
                    et une compétitivité renforcée sur votre marché.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Compensations;
