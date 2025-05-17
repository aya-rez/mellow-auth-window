
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false);
      
      if (email && password) {
        toast({
          title: "Login successful",
          description: "Welcome back!",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Please enter valid credentials.",
        });
      }
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card className="w-full max-w-md shadow-lg border-teal-light/20 bg-white/90 backdrop-blur-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center text-teal-DEFAULT">Welcome Back</CardTitle>
        <CardDescription className="text-center text-teal-light">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-teal-DEFAULT">Email</Label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-light">
                <User size={18} />
              </div>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white border-teal-light/30 focus-visible:ring-teal-DEFAULT/50"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-teal-DEFAULT">Password</Label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-light">
                <Lock size={18} />
              </div>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10 bg-white border-teal-light/30 focus-visible:ring-teal-DEFAULT/50"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-light hover:text-teal-DEFAULT transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 accent-teal-DEFAULT rounded focus:ring-teal-DEFAULT/50"
              />
              <label htmlFor="remember" className="text-sm text-teal-dark">Remember me</label>
            </div>
            <a href="#" className="text-sm text-teal-DEFAULT hover:underline">
              Forgot password?
            </a>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-teal-DEFAULT hover:bg-teal-DEFAULT/90 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Sign In"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 mt-2">
        <div className="relative w-full">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-teal-light/20"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 bg-white text-teal-light">Or continue with</span>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="w-full border-teal-light/30 hover:bg-teal-light/10 text-teal-DEFAULT">
            Google
          </Button>
          <Button variant="outline" className="w-full border-teal-light/30 hover:bg-teal-light/10 text-teal-DEFAULT">
            GitHub
          </Button>
        </div>
        <div className="text-center text-sm text-teal-light">
          Don't have an account?{" "}
          <a href="#" className="text-teal-DEFAULT hover:underline">
            Sign up
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
