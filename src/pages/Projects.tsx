import React, { useState } from 'react';
import { Search, Filter, Award, Calendar, Users, Eye, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "সৌর শক্তি ব্যবহার করে পানি বিশুদ্ধকরণ",
      category: "environment",
      description: "পরিবেশ বান্ধব প্রযুক্তি ব্যবহার করে পানি বিশুদ্ধকরণ পদ্ধতি উদ্ভাবন। এই প্রকল্পে সৌর শক্তি ব্যবহার করে পানি থেকে ক্ষতিকর জীবাণু অপসারণ করা হয়।",
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800",
      team: ["রহিম উদ্দিন", "সালমা আক্তার", "করিম মিয়া"],
      date: "2024-01-15",
      status: "completed",
      award: "জাতীয় পুরস্কার ২০২৪",
      views: 1250
    },
    {
      id: 2,
      title: "মাটির গুণাগুণ পরীক্ষা",
      category: "agriculture",
      description: "কৃষিক্ষেত্রে উন্নতির জন্য মাটির গুণাগুণ বিশ্লেষণ এবং উৎপাদনশীলতা বৃদ্ধির উপায় নির্ধারণ।",
      image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800",
      team: ["ফাতেমা খাতুন", "আবদুল করিম"],
      date: "2024-01-10",
      status: "ongoing",
      views: 890
    },
    {
      id: 3,
      title: "বায়ু দূষণ নিয়ন্ত্রণ",
      category: "environment",
      description: "শহরাঞ্চলে বায়ু দূষণ কমানোর জন্য উদ্ভাবনী সমাধান এবং পরিবেশ সংরক্ষণের কার্যকরী পদ্ধতি।",
      image: "https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=800",
      team: ["নাসির উদ্দিন", "রুমানা আক্তার", "মোহাম্মদ আলী"],
      date: "2024-01-05",
      status: "completed",
      award: "আঞ্চলিক পুরস্কার ২০২৪",
      views: 1456
    },
    {
      id: 4,
      title: "স্মার্ট সেচ ব্যবস্থা",
      category: "technology",
      description: "IoT প্রযুক্তি ব্যবহার করে স্বয়ংক্রিয় সেচ ব্যবস্থা তৈরি করা যা পানির অপচয় রোধ করে।",
      image: "https://images.pexels.com/photos/1000740/pexels-photo-1000740.jpeg?auto=compress&cs=tinysrgb&w=800",
      team: ["সাইফুল ইসলাম", "মারিয়া জাহান"],
      date: "2024-01-01",
      status: "ongoing",
      views: 670
    },
    {
      id: 5,
      title: "প্রাকৃতিক রং তৈরি",
      category: "chemistry",
      description: "ফুল, ফল এবং সবজি থেকে প্রাকৃতিক রং তৈরি করে রাসায়নিক রংের বিকল্প খুঁজে বের করা।",
      image: "https://images.pexels.com/photos/1325837/pexels-photo-1325837.jpeg?auto=compress&cs=tinysrgb&w=800",
      team: ["তাহমিদা সুলতানা", "রাকিব হাসান"],
      date: "2023-12-28",
      status: "completed",
      views: 534
    },
    {
      id: 6,
      title: "জৈব সার উৎপাদন",
      category: "agriculture",
      description: "পচনশীল বর্জ্য থেকে জৈব সার তৈরি করে পরিবেশ রক্ষা এবং কৃষিক্ষেত্রে উৎপাদনশীলতা বৃদ্ধি।",
      image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800",
      team: ["জাহাঙ্গীর আলম", "রেশমা বেগম", "কামরুল হাসান"],
      date: "2023-12-25",
      status: "ongoing",
      views: 723
    }
  ];

  const categories = [
    { id: 'all', name: 'সব প্রকল্প', count: projects.length },
    { id: 'environment', name: 'পরিবেশ', count: projects.filter(p => p.category === 'environment').length },
    { id: 'agriculture', name: 'কৃষি', count: projects.filter(p => p.category === 'agriculture').length },
    { id: 'technology', name: 'প্রযুক্তি', count: projects.filter(p => p.category === 'technology').length },
    { id: 'chemistry', name: 'রসায়ন', count: projects.filter(p => p.category === 'chemistry').length },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'ongoing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'সম্পন্ন';
      case 'ongoing': return 'চলমান';
      default: return 'অজানা';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              প্রকল্প শোকেস
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              আমাদের সদস্যদের দ্বারা সম্পন্ন এবং চলমান গবেষণা প্রকল্পসমূহ
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="প্রকল্প খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Users className="w-4 h-4 mr-1" />
                    <span>দল: {project.team.join(', ')}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{project.views} দর্শন</span>
                    </div>
                  </div>

                  {project.award && (
                    <div className="flex items-center text-sm text-yellow-600 mb-4">
                      <Award className="w-4 h-4 mr-1" />
                      <span>{project.award}</span>
                    </div>
                  )}
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    বিস্তারিত দেখুন
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">কোন প্রকল্প পাওয়া যায়নি</h3>
              <p className="text-gray-600">
                আপনার অনুসন্ধান অনুযায়ী কোন প্রকল্প খুঁজে পাওয়া যায়নি। অনুগ্রহ করে অন্য শব্দ দিয়ে খুঁজুন।
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <Award className="w-10 h-10 inline-block mr-3 text-yellow-600" />
              হল অব ফেম
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              পুরস্কার প্রাপ্ত এবং অসাধারণ প্রকল্পসমূহ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(project => project.award).map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-yellow-200">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      পুরস্কার প্রাপ্ত
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="bg-yellow-50 p-3 rounded-lg mb-4">
                    <p className="text-sm text-yellow-800 font-medium">🏆 {project.award}</p>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Users className="w-4 h-4 mr-1" />
                    <span>দল: {project.team.join(', ')}</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900 py-2 px-4 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all font-medium flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    বিস্তারিত দেখুন
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};