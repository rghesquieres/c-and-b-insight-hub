
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // Logique de connexion à implémenter
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      {/* Logo en haut à gauche */}
      <Link to="/" className="absolute top-6 left-6 logo-text text-3xl">
        C&B
      </Link>

      <Card className="w-full max-w-md bg-white shadow-lg border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-elegant text-korn">Connexion</CardTitle>
          <CardDescription className="text-korn-700">
            Accédez à votre espace client
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-korn font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-korn-200 focus:border-korn focus:ring-korn"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-korn font-medium">
                Mot de passe
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-korn-200 focus:border-korn focus:ring-korn"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-korn hover:bg-korn-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Se connecter
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-korn-600">
              Mot de passe oublié ?{" "}
              <a href="#" className="text-korn hover:text-korn-700 font-medium">
                Réinitialiser
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
