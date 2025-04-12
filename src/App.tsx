import React, { useRef, useState } from 'react';
import { Brain, Upload, AlertCircle, CheckCircle2, Loader2, Github, Twitter, Linkedin, Mail } from 'lucide-react';

function App() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        // Simulate AI processing
        setLoading(true);
        setTimeout(() => {
          setResult(Math.random() * 100);
          setLoading(false);
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        // Simulate AI processing
        setLoading(true);
        setTimeout(() => {
          setResult(Math.random() * 100);
          setLoading(false);
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="h-8 w-8 text-purple-500" />
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/btwitsPratyush"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/btwitsPratyush"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/pratyush-kumar-3302b0229"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:pratyushk537@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 animate-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Brain className="h-24 w-24 text-purple-400 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 animate-text">
              NeuroScan AI
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Advanced AI-powered brain tumor detection using MRI scans. Upload your clear MRI image to get instant results powered by deep learning CNN architecture.
            </p>
            <div className="max-w-3xl mx-auto px-6 py-4 bg-gray-900/50 rounded-lg backdrop-blur-sm">
              <p className="italic text-gray-400">
                "Early detection is not just a medical advantage; it's a window of opportunity that can transform the course of treatment and ultimately, life itself."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 rounded-lg p-6 text-center backdrop-blur-sm border border-purple-900/20">
            <h3 className="text-3xl font-bold text-purple-400">98%</h3>
            <p className="text-gray-400">Accuracy Rate</p>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-6 text-center backdrop-blur-sm border border-purple-900/20">
            <h3 className="text-3xl font-bold text-purple-400">2.5s</h3>
            <p className="text-gray-400">Average Processing Time</p>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-6 text-center backdrop-blur-sm border border-purple-900/20">
            <h3 className="text-3xl font-bold text-purple-400">50K+</h3>
            <p className="text-gray-400">Scans Analyzed</p>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center cursor-pointer hover:border-purple-400 transition-colors duration-300 bg-gray-900/30 backdrop-blur-sm"
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {!image ? (
            <div className="space-y-4">
              <Upload className="h-12 w-12 mx-auto text-gray-400" />
              <p className="text-lg">Drag and drop your MRI scan here, or click to select</p>
              <p className="text-sm text-gray-500">Supported formats: PNG, JPG, JPEG</p>
            </div>
          ) : (
            <div className="space-y-4">
              <img src={image} alt="MRI Scan" className="max-h-96 mx-auto rounded-lg" />
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <Loader2 className="h-6 w-6 animate-spin text-purple-400" />
                  <span>Analyzing image...</span>
                </div>
              ) : result !== null && (
                <div className="space-y-4">
                  <div className="w-full bg-gray-800 rounded-full h-4">
                    <div 
                      className={`h-4 rounded-full transition-all duration-1000 ${
                        result > 70 ? 'bg-red-400' : result > 30 ? 'bg-yellow-400' : 'bg-green-400'
                      }`}
                      style={{ width: `${result}%` }}
                    />
                  </div>
                  <div className={`flex items-center justify-center space-x-2 ${
                    result > 70 ? 'text-red-400' : result > 30 ? 'text-yellow-400' : 'text-green-400'
                  }`}>
                    {result > 50 ? (
                      <>
                        <AlertCircle className="h-6 w-6" />
                        <span>Tumor Detected ({result.toFixed(1)}% confidence)</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="h-6 w-6" />
                        <span>No Tumor Detected ({(100 - result).toFixed(1)}% confidence)</span>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Quote Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-6">
          <p className="text-xl text-gray-300 italic">
            "In the realm of medical diagnostics, artificial intelligence isn't just a tool; it's a partner in our quest to save lives."
          </p>
          <p className="text-gray-500">- Dr. Sarah Chen, Neuroradiologist</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p className="mb-4">Developed by Pratyush</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/btwitsPratyush"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com/btwitsPratyush"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/pratyush-kumar-3302b0229"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:pratyushk537@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;