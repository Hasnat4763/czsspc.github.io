import React from 'react';
import { Award, Users, Target, BookOpen, Calendar, MapPin, Microscope, Beaker, FlaskConical, Phone, Mail, Clock } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <FlaskConical className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              আমাদের সম্পর্কে
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-blue-50">
              CZSSPC - কুমিল্লা জিলা স্কুল বিজ্ঞান প্রজেক্ট ক্লাব<br />
              বিজ্ঞান শিক্ষার অগ্রদূত
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-xl mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">আমাদের লক্ষ্য</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                কুমিল্লা জিলার স্কুল পর্যায়ে বিজ্ঞান শিক্ষার মান উন্নয়ন এবং ছাত্রছাত্রীদের মধ্যে বিজ্ঞানমনস্ক চিন্তাভাবনার বিকাশ। 
                আমরা চাই প্রতিটি শিক্ষার্থী বিজ্ঞানের প্রতি আগ্রহী হয়ে উঠুক এবং গবেষণামূলক কাজে অংশগ্রহণ করুক।
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-xl mr-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">আমাদের দৃষ্টিভঙ্গি</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                একটি বিজ্ঞানমনস্ক সমাজ গড়ে তোলা যেখানে প্রতিটি শিক্ষার্থী তার সৃজনশীলতা ও উদ্ভাবনী ক্ষমতা দিয়ে দেশ ও জাতির 
                কল্যাণে অবদান রাখতে পারবে। বিজ্ঞান ও প্রযুক্তির মাধ্যমে সমাজের উন্নতি সাধন করা।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              আমাদের ইতিহাস
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              ২০১৯ সালে প্রতিষ্ঠিত, CZSSPC আজ কুমিল্লার সবচেয়ে বড় বিজ্ঞান সংগঠন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">২০১৯</h3>
              <p className="text-gray-600 leading-relaxed">
                ক্লাবের প্রতিষ্ঠা। মাত্র ২৫ জন সদস্য নিয়ে যাত্রা শুরু।
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">২০২০</h3>
              <p className="text-gray-600 leading-relaxed">
                সদস্য সংখ্যা ৫০ এ পৌঁছে। প্রথম জাতীয় পুরস্কার অর্জন।
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">২০২৪</h3>
              <p className="text-gray-600 leading-relaxed">
                ১৪০+ সদস্য এবং 5০+ সফল প্রকল্প সম্পন্ন।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              আমাদের মূল দল
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              আমাদের অভিজ্ঞ ও দক্ষ পরিচালনা পরিষদ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 shadow-lg border-4 border-blue-100">
                <img 
                  src="/20201105105304.jpg" 
                  alt="প্রফেসর আবদুল করিম" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">জনাব শ্যামল চন্দ্র দাস</h3>
              <p className="text-blue-600 font-medium mb-4">প্রধান মডারেটর</p>
              <p className="text-gray-600 leading-relaxed">
                কুমিল্লা জিলা স্কুল 
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 shadow-lg border-4 border-green-100">
                <img 
                  src="/20250524104739.jpg" 
                  alt="ডঃ ফাতেমা খাতুন" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">জনাব ইব্রাহিম খলিল</h3>
              <p className="text-green-600 font-medium mb-4">মডারেটর</p>
              <p className="text-gray-600 leading-relaxed">
                বিজ্ঞান শিক্ষক এবং গবেষণা কার্যক্রমের প্রধান সমন্বয়কারী
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 shadow-lg border-4 border-purple-100">
                <img 
                  src="/20220203125157.jpg" 
                  alt="মোহাম্মদ রহিম" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">মোহাম্মদ আবুল কালাম আজাদ</h3>
              <p className="text-purple-600 font-medium mb-4">মডারেটর</p>
              <p className="text-gray-600 leading-relaxed">
                ক্লাবের দৈনন্দিন কার্যক্রম পরিচালনা এবং সদস্য সমন্বয়ের দায়িত্বে
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              আমাদের অর্জন
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              বিগত বছরগুলোতে আমাদের উল্লেখযোগ্য সাফল্যসমূহ
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">১৫+</div>
              <p className="text-blue-100 font-medium">জাতীয় পুরস্কার</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">১৪০+</div>
              <p className="text-blue-100 font-medium">সক্রিয় সদস্য</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">১০০+</div>
              <p className="text-blue-100 font-medium">সফল প্রকল্প</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">৩+</div>
              <p className="text-blue-100 font-medium">আন্তর্জাতিক অর্জন</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              আমাদের অবস্থান
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              কুমিল্লা জেলার হৃদয়ে অবস্থিত আমাদের কার্যালয়
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-8">
                  <div className="bg-blue-600 p-3 rounded-xl mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">যোগাযোগের ঠিকানা</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <MapPin className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">ঠিকানা</p>
                      <p className="text-gray-700">কুমিল্লা জিলা স্কুল, কুমিল্লা-৩৫০০</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <Phone className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">ফোন</p>
                      <p className="text-gray-700">+880 1234-567890</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <Mail className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">ইমেইল</p>
                      <p className="text-gray-700">czsspc2019@outlook.in</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <Clock className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">কার্যালয় সময়</p>
                      <p className="text-gray-700">প্রত্যেক রবিবার এবং বৃহস্পতিবার ( সকাল ১১ টা থেকে দুপুর ১ টা)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Google Maps এ আমাদের খুঁজুন</p>
                  <p className="text-sm text-gray-500 mt-2">কুমিল্লা জিলা স্কুল </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};