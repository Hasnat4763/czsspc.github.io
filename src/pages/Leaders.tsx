import React from 'react';
import { Crown, Shield, Users, Award } from 'lucide-react';

export const Leaders: React.FC = () => {
  const moderators = [
    {
      id: 1,
      name: 'Shemol Chandra Das',
      position: 'Chief Moderator',
      image: '/20201105105304.jpg',
      description: 'প্রধান মডারেটর হিসেবে ক্লাবের সামগ্রিক কার্যক্রম তদারকি করেন'
    },
    {
      id: 2,
      name: 'MD. Ibrahim Khalil',
      position: 'Moderator Morning',
      image: '/20220203125157.jpg',
      description: 'প্রভাতী শিফটের সকল কার্যক্রম পরিচালনা করেন'
    },
    {
      id: 3,
      name: 'Md Abul Kalam Azad',
      position: 'Moderator Day',
      image: '/20250524104739.jpg',
      description: 'দিবা শিফটের সকল কার্যক্রম পরিচালনা করেন'
    }
  ];

  const executiveCommittee = [
    {
      id: 1,
      name: 'Hossain Mahmud Chowdhury',
      position: 'President',
      description: 'ক্লাবের সভাপতি হিসেবে সামগ্রিক নেতৃত্ব প্রদান করেন'
    },
    {
      id: 2,
      name: 'Abrar Jarif Rafi',
      position: 'General Secretary',
      description: 'সাধারণ সম্পাদক হিসেবে ক্লাবের দৈনন্দিন কার্যক্রম পরিচালনা করেন'
    },
    {
      id: 3,
      name: 'Saif Al Fahad',
      position: 'Vice President',
      description: 'সহ-সভাপতি হিসেবে সভাপতিকে সহায়তা করেন'
    },
    {
      id: 4,
      name: 'Abdullah Parvej Fahim',
      position: 'Vice President',
      description: 'সহ-সভাপতি হিসেবে সভাপতিকে সহায়তা করেন'
    },
    {
      id: 5,
      name: 'Ojhayer Ahmmed Shanin',
      position: 'Treasurer',
      description: 'কোষাধ্যক্ষ হিসেবে অত্র ক্লাবের আর্থিক ব্যাবস্থাপনা করবেন'
    },
    {
      id: 6,
      name: 'Ayan Al Muhtadi',
      position: 'Join Secretary',
      description: 'যুগ্ম সম্পাদক হিসেবে সাধারণ সম্পাদককে সহায়তা করেন'
    },
    {
      id: 7,
      name: 'Nabil Bin Rahman',
      position: 'Join Secretary',
      description: 'যুগ্ম সম্পাদক হিসেবে সাধারণ সম্পাদককে সহায়তা করেন'
    },
    {
      id: 8,
      name: 'Saymon Islam',
      position: 'Publication Secretary',
      description: 'জনসংযোগ কর্মকর্তা হিসেবে বাহ্যিক যোগাযোগ রক্ষা করেন'
    },
    {
      id: 9,
      name: 'Abul Hasnat',
      position: 'Publication Secretary(Ongoing)',
      description: 'জনসংযোগ কর্মকর্তা হিসেবে বাহ্যিক যোগাযোগ রক্ষা করেন'
    },
    {
      id: 10,
      name: 'Belayet Hossain',
      position: 'Organization Secretary',
      description: 'নথিকরণ কর্মকর্তা হিসেবে সকল কার্যক্রমের রেকর্ড রাখেন'
    },
    {
      id: 11,
      name: 'Debottom Bohni Sen',
      position: 'Executive Member',
      description: 'নির্বাহী সদস্য হিসেবে কমিটির সিদ্ধান্ত বাস্তবায়নে সহায়তা করেন'
    },
    {
      id: 12,
      name: 'Nafsan Araf',
      position: 'Executive Member',
      description: 'নির্বাহী সদস্য হিসেবে কমিটির সিদ্ধান্ত বাস্তবায়নে সহায়তা করেন'
    },
    {
      id: 13,
      name: 'Rudronil Sengupto',
      position: 'Executive Member',
      description: 'নির্বাহী সদস্য হিসেবে কমিটির সিদ্ধান্ত বাস্তবায়নে সহায়তা করেন'
    },
    {
      id: 14,
      name: 'Sakibul Hasan Bhuiyan',
      position: 'Executive Member',
      description: 'নির্বাহী সদস্য হিসেবে কমিটির সিদ্ধান্ত বাস্তবায়নে সহায়তা করেন'
    },
    {
      id: 15,
      name: 'Yusuf Bhuiyan',
      position: 'Executive Member',
      description: 'নির্বাহী সদস্য হিসেবে কমিটির সিদ্ধান্ত বাস্তবায়নে সহায়তা করেন'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Crown className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              আমাদের নেতৃত্ব
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-blue-50">
              CZSSPC এর দক্ষ ও অভিজ্ঞ নেতৃত্ব পরিষদ
            </p>
          </div>
        </div>
      </section>

      {/* Moderators Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-2xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              মডারেটর পরিষদ
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              ক্লাবের কার্যক্রম তদারকি ও পরিচালনায় দায়িত্বরত মডারেটরগণ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {moderators.map((moderator) => (
              <div key={moderator.id} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 shadow-lg border-4 border-blue-100">
                  <img 
                    src={moderator.image} 
                    alt={moderator.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{moderator.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{moderator.position}</p>
                <p className="text-gray-600 leading-relaxed">
                  {moderator.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Committee Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-4 rounded-2xl">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              নির্বাহী কমিটি
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              ক্লাবের নীতি নির্ধারণ ও বাস্তবায়নে দায়িত্বরত নির্বাহী সদস্যগণ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executiveCommittee.map((member, index) => (
              <div key={member.id} className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 ${
                    index === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                    index === 1 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                    'bg-gradient-to-br from-gray-400 to-gray-600'
                  }`}>
                    {index === 0 ? (
                      <Crown className="w-8 h-8 text-white" />
                    ) : index === 1 ? (
                      <Award className="w-8 h-8 text-white" />
                    ) : (
                      <Users className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                    <p className={`font-medium text-sm ${
                      index === 0 ? 'text-yellow-600' :
                      index === 1 ? 'text-blue-600' :
                      'text-gray-600'
                    }`}>
                      {member.position}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Stats */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              নেতৃত্বের পরিসংখ্যান
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              আমাদের নেতৃত্ব পরিষদের অভিজ্ঞতা ও দক্ষতা
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">৩</div>
              <p className="text-blue-100 font-medium">মডারেটর</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">১৫</div>
              <p className="text-blue-100 font-medium">নির্বাহী সদস্য</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">৭+</div>
              <p className="text-blue-100 font-medium">বছরের অভিজ্ঞতা</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">১০০%</div>
              <p className="text-blue-100 font-medium">নিবেদিতপ্রাণ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};