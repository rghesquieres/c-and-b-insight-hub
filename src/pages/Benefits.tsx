
import Navigation from "@/components/Navigation";
import { Heart, Umbrella, PiggyBank, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Benefits = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/91b7d0fb-7aaa-4bf5-9b92-8ce97834d17b.png')`,
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
                  <Heart className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-elegant text-korn mb-6">
                Benefits
              </h1>
              <p className="text-xl text-korn-700 max-w-3xl mx-auto leading-relaxed">
                VEA. PEE. PERCO et avantages en nature et sociaux. Optimisez votre politique 
                d'avantages sociaux et leur impact fiscal pour vos collaborateurs.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-slide-up">
              <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <PiggyBank className="w-8 h-8 text-korn mr-3" />
                    <CardTitle className="text-korn">Épargne salariale</CardTitle>
                  </div>
                  <CardDescription>
                    Dispositifs d'épargne entreprise et participation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-korn-700">
                    <li>• Plan d'Épargne Entreprise (PEE)</li>
                    <li>• Plan d'Épargne Retraite Collectif (PERCO)</li>
                    <li>• Participation aux bénéfices</li>
                    <li>• Intéressement des salariés</li>
                    <li>• Optimisation fiscale et sociale</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Heart className="w-8 h-8 text-korn mr-3" />
                    <CardTitle className="text-korn">Avantages sociaux</CardTitle>
                  </div>
                  <CardDescription>
                    Avantages en nature et complémentaires
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-korn-700">
                    <li>• Véhicule de fonction</li>
                    <li>• Mutuelle et prévoyance</li>
                    <li>• Tickets restaurant</li>
                    <li>• Chèques cadeaux</li>
                    <li>• Avantages CSE</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Umbrella className="w-8 h-8 text-korn mr-3" />
                    <CardTitle className="text-korn">Protection sociale</CardTitle>
                  </div>
                  <CardDescription>
                    Couverture santé et prévoyance collective
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-korn-700">
                    <li>• Complémentaire santé</li>
                    <li>• Assurance prévoyance</li>
                    <li>• Garantie maintien de salaire</li>
                    <li>• Protection juridique</li>
                    <li>• Négociation avec assureurs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Shield className="w-8 h-8 text-korn mr-3" />
                    <CardTitle className="text-korn">Conseil & Audit</CardTitle>
                  </div>
                  <CardDescription>
                    Analyse et optimisation de vos dispositifs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-korn-700">
                    <li>• Audit des avantages existants</li>
                    <li>• Optimisation fiscale</li>
                    <li>• Conformité réglementaire</li>
                    <li>• ROI des dispositifs</li>
                    <li>• Benchmark marché</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-elegant text-korn mb-6 text-center">
                Pourquoi optimiser vos avantages sociaux ?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-korn-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-korn" />
                  </div>
                  <h4 className="font-semibold text-korn mb-2">Attractivité</h4>
                  <p className="text-korn-700 text-sm">
                    Attirez et retenez les meilleurs talents grâce à un package attractif
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-korn-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PiggyBank className="w-8 h-8 text-korn" />
                  </div>
                  <h4 className="font-semibold text-korn mb-2">Optimisation</h4>
                  <p className="text-korn-700 text-sm">
                    Réduisez les charges sociales tout en maximisant l'avantage pour vos salariés
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-korn-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-korn" />
                  </div>
                  <h4 className="font-semibold text-korn mb-2">Conformité</h4>
                  <p className="text-korn-700 text-sm">
                    Respectez la réglementation URSSAF et optimisez votre situation fiscale
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Card className="bg-korn text-white max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-elegant mb-4">
                    Valorisez votre politique d'avantages sociaux
                  </h3>
                  <p className="text-lg mb-6 text-white/90">
                    Bénéficiez d'un accompagnement expert pour optimiser vos dispositifs 
                    et leur impact sur la motivation de vos équipes.
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

export default Benefits;
