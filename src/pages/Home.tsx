import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, BookOpen, Target, Microscope, Beaker } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-2xl bg-white p-2">
                <img 
                  src="/club logo.jpg" 
                  alt="CZSSPC Logo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-5xl md:text-7xl mb-2">CZSSPC</span>
              <span className="block text-2xl md:text-3xl font-medium text-blue-100">
                কুমিল্লা জিলা স্কুল বিজ্ঞান প্রজেক্ট ক্লাব
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-blue-50">
              LEARN MORE TO INVENT NEW
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/about" 
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all inline-flex items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                আমাদের সম্পর্কে জানুন
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/leaders" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                নেতৃত্ব দেখুন
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              আমাদের বৈশিষ্ট্য
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              বিজ্ঞান শিক্ষায় এগিয়ে থাকার জন্য আমাদের রয়েছে নানা সুবিধা
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">পুরস্কার প্রাপ্ত</h3>
              <p className="text-gray-600 leading-relaxed">
                জাতীয় ও আন্তর্জাতিক পর্যায়ে বিভিন্ন পুরস্কার অর্জন
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">সক্রিয় সদস্য</h3>
              <p className="text-gray-600 leading-relaxed">
                ১৩০+ সক্রিয় সদস্য বিভিন্ন বিজ্ঞান প্রকল্পে কাজ করছেন
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-purple-400 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">গবেষণা প্রকল্প</h3>
              <p className="text-gray-600 leading-relaxed">
                ৪৫+ সফল গবেষণা প্রকল্প সম্পন্ন করেছি
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-red-400 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">লক্ষ্যভিত্তিক</h3>
              <p className="text-gray-600 leading-relaxed">
                স্পষ্ট লক্ষ্য নিয়ে বিজ্ঞান শিক্ষার প্রসার ঘটানো
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              আমাদের অর্জন
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              সংখ্যায় আমাদের সাফল্যের গল্প
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">১৩০+</div>
              <div className="text-blue-100 font-medium">সক্রিয় সদস্য</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">৪৫+</div>
              <div className="text-blue-100 font-medium">সফল প্রকল্প</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">৯+</div>
              <div className="text-blue-100 font-medium">জাতীয় পুরস্কার</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">৩+</div>
              <div className="text-blue-100 font-medium">আন্তর্জাতিক অর্জন</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              সাম্প্রতিক প্রকল্প
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              আমাদের সদস্যদের দ্বারা পরিচালিত কিছু উল্লেখযোগ্য প্রকল্প
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "সৌর শক্তি ব্যবহার করে পানি বিশুদ্ধকরণ",
                description: "পরিবেশ বান্ধব প্রযুক্তি ব্যবহার করে পানি বিশুদ্ধকরণ পদ্ধতি",
                image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: <Beaker className="w-6 h-6" />
              },
              {
                title: "মাটির গুণাগুণ পরীক্ষা",
                description: "কৃষিক্ষেত্রে উন্নতির জন্য মাটির গুণাগুণ বিশ্লেষণ",
                image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: <Microscope className="w-6 h-6" />
              },
              {
                title: "বায়ু দূষণ নিয়ন্ত্রণ",
                description: "শহরাঞ্চলে বায়ু দূষণ কমানোর জন্য উদ্ভাবনী সমাধান",
                image: "https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=800",
                icon: <Target className="w-6 h-6" />
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded-lg">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <Link 
                    to="/projects" 
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform"
                  >
                    বিস্তারিত দেখুন
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/projects" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              সব প্রকল্প দেখুন
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Users className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            আমাদের সাথে যোগ দিন
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-blue-50">
            বিজ্ঞানের জগতে নতুন আবিষ্কার আর গবেষণার জন্য আমাদের সাথে যোগ দিন
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all inline-flex items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              যোগাযোগ করুন
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/leaders" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              নেতৃত্ব দেখুন
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};