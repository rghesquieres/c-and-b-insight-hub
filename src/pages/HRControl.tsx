
import { Link } from "react-router-dom";
import { ArrowLeft, Users, BarChart3, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HRControl = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-korn-200">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-korn hover:text-korn-600 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="logo-text text-3xl">
            C&B
          </div>
        </div>
        <Link 
          to="/login" 
          className="text-korn hover:text-korn-600 transition-colors font-medium text-lg no-underline"
        >
          Login
        </Link>
      </header>

      {/* Main Content */}
      <main className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="bg-korn p-4 rounded-full">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-elegant text-korn mb-6">
              HR Control
            </h1>
            <p className="text-xl text-korn-700 max-w-3xl mx-auto leading-relaxed">
              Pilotage et gestion des indicateurs sociaux pour un suivi précis de vos 
              performances RH et l'aide à la décision stratégique.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-slide-up">
            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <BarChart3 className="w-8 h-8 text-korn mr-3" />
                  <CardTitle className="text-korn">Tableaux de bord RH</CardTitle>
                </div>
                <CardDescription>
                  Indicateurs clés de performance et reporting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-korn-700">
                  <li>• KPI sociaux et RH</li>
                  <li>• Dashboards interactifs</li>
                  <li>• Reporting automatisé</li>
                  <li>• Analyse prédictive</li>
                  <li>• Benchmarking sectoriel</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Target className="w-8 h-8 text-korn mr-3" />
                  <CardTitle className="text-korn">Analyse des coûts</CardTitle>
                </div>
                <CardDescription>
                  Maîtrise et optimisation des coûts sociaux
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-korn-700">
                  <li>• Analyse de la masse salariale</li>
                  <li>• Coût complet du travail</li>
                  <li>• Budget formation</li>
                  <li>• Coûts de recrutement</li>
                  <li>• ROI des investissements RH</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-8 h-8 text-korn mr-3" />
                  <CardTitle className="text-korn">Pilotage social</CardTitle>
                </div>
                <CardDescription>
                  Suivi des performances et tendances RH
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-korn-700">
                  <li>• Taux de turnover</li>
                  <li>• Absentéisme et présentéisme</li>
                  <li>• Satisfaction collaborateurs</li>
                  <li>• Performance individuelle</li>
                  <li>• Climat social</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Users className="w-8 h-8 text-korn mr-3" />
                  <CardTitle className="text-korn">Aide à la décision</CardTitle>
                </div>
                <CardDescription>
                  Support stratégique pour la direction
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-korn-700">
                  <li>• Analyses prospectives</li>
                  <li>• Recommandations stratégiques</li>
                  <li>• Simulation de scénarios</li>
                  <li>• Plan d'actions correctives</li>
                  <li>• Accompagnement changement</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Indicators Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-elegant text-korn mb-6 text-center">
              Indicateurs clés suivis
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-korn mb-2">15%</div>
                <div className="text-sm text-korn-700">Taux de turnover moyen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-korn mb-2">4.2%</div>
                <div className="text-sm text-korn-700">Taux d'absentéisme</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-korn mb-2">85%</div>
                <div className="text-sm text-korn-700">Satisfaction collaborateurs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-korn mb-2">12k€</div>
                <div className="text-sm text-korn-700">Coût moyen recrutement</div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-korn-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-elegant text-korn mb-6 text-center">
              Notre approche méthodologique
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-korn text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold text-korn mb-2">Collecte</h4>
                <p className="text-korn-700 text-sm">
                  Extraction et consolidation des données RH depuis vos systèmes
                </p>
              </div>
              <div className="text-center">
                <div className="bg-korn text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold text-korn mb-2">Analyse</h4>
                <p className="text-korn-700 text-sm">
                  Traitement statistique et identification des tendances significatives
                </p>
              </div>
              <div className="text-center">
                <div className="bg-korn text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold text-korn mb-2">Pilotage</h4>
                <p className="text-korn-700 text-sm">
                  Mise en place de tableaux de bord et recommandations d'actions
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-korn text-white max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-elegant mb-4">
                  Transformez vos données RH en avantage concurrentiel
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Bénéficiez d'un pilotage RH data-driven pour des décisions éclairées 
                  et une performance sociale optimisée.
                </p>
                <Link 
                  to="/login"
                  className="inline-block bg-white text-korn px-8 py-3 rounded-lg font-medium hover:bg-cream transition-colors no-underline"
                >
                  Demander une démonstration
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HRControl;
