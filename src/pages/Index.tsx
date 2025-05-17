
import React from "react";
import LoginForm from "@/components/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-login-bg bg-cover bg-center bg-no-repeat relative">
      <div className="absolute inset-0 bg-teal-DEFAULT/30 backdrop-blur-sm"></div>
      
      <div className="relative z-10 w-full max-w-md px-4 py-12 mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">Workspace Login</h1>
          <p className="mt-2 text-teal-light text-white/80">Access your professional dashboard</p>
        </div>
        
        <LoginForm />
        
        <p className="mt-8 text-center text-white/70 text-sm">
          &copy; 2025 Workspace. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;
