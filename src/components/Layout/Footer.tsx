import React from 'react';
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/club logo.jpg" 
                  alt="CZSSPC Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">CZSSPC</h3>
                <p className="text-sm text-gray-300">কুমিল্লা জিলা স্কুল বিজ্ঞান প্রজেক্ট ক্লাব</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              আমাদের লক্ষ্য হলো স্কুল পর্যায়ে বিজ্ঞান শিক্ষার প্রসার ঘটানো এবং শিক্ষার্থিদের গবেষণামূলক কাজে উৎসাহিত করা।
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  সম্পর্কে
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  ইভেন্ট
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  প্রজেক্ট
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  যোগাযোগ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">যোগাযোগ</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  কুমিল্লা জিলা স্কুল<br />
                  কুমিল্লা-৩৫০০, বাংলাদেশ
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+880</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">czsspc2019@outlook.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 CZSSPC - কুমিল্লা জিলা স্কুল বিজ্ঞান প্রজেক্ট ক্লাব। সমস্ত অধিকার সংরক্ষিত।
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                গোপনীয়তা নীতি
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                শর্তাবলী
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};