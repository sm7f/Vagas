import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Copyright */}
        <div className="mt-7 text-center text-sm text-gray-400">
          <p>&copy; 2025 Empresa de Vagas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
