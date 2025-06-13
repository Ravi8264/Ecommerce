import React from "react";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            Welcome to My E-commerce Store
          </h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 text-center text-lg">
              Your one-stop shop for all your needs
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
