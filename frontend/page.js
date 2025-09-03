'use client';
import React, { useState, useEffect } from 'react';
import { Mic, Camera, Heart, Users, Play, ArrowRight, Plus, Upload, MoreHorizontal, Share, MessageCircle } from 'lucide-react';

 function MemoraHomepage() {
  const [isRecording, setIsRecording] = useState(false);
  const [glowingOrbs, setGlowingOrbs] = useState([]);
  const [activeTab, setActiveTab] = useState('memories');

  const memories = [
    {
      title: "Sunday Morning Pancakes",
      author: "Mom",
      time: "2h ago",
      reactions: 12,
      type: "photo",
      preview: "The smell of vanilla and butter filling the kitchen every Sunday morning...",
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop&crop=faces",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b739?w=40&h=40&fit=crop&crop=faces"
    },
    {
      title: "First Day at College", 
      author: "You",
      time: "1d ago",
      reactions: 8,
      type: "photo",
      preview: "Standing in front of the campus gates, nervous but excited for what's ahead...",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop&crop=faces",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=faces"
    },
    {
      title: "Grandpa's War Stories",
      author: "Sarah", 
      time: "3d ago",
      reactions: 15,
      type: "voice",
      preview: "He told us about the letters he wrote to grandma during the war...",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&crop=faces",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=faces"
    }
  ];

  const familyMembers = [
    { name: "Mom", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b739?w=40&h=40&fit=crop&crop=faces", status: "active" },
    { name: "Dad", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces", status: "active" },
    { name: "Sarah", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=faces", status: "offline" },
    { name: "Alex", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=faces", status: "active" }
  ];

  useEffect(() => {
    // Create enhanced glowing background orbs
    const orbs = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 80 + Math.random() * 120,
      delay: Math.random() * 15,
      duration: 20 + Math.random() * 15,
      opacity: 0.15 + Math.random() * 0.25,
      color: i % 3 === 0 ? 'from-amber-400/30' : i % 3 === 1 ? 'from-orange-400/30' : 'from-yellow-400/30'
    }));
    setGlowingOrbs(orbs);
  }, []);

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTimeout(() => setIsRecording(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-25 to-orange-50 relative overflow-hidden">
      {/* Enhanced Glowing Background */}
      {glowingOrbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute animate-pulse"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            opacity: orb.opacity,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`
          }}
        >
          <div className={`w-full h-full bg-gradient-radial ${orb.color} via-orange-200/20 to-transparent rounded-full blur-2xl`}></div>
        </div>
      ))}

      {/* Enhanced floating light particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-300/40 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* iOS-style Navigation */}
      <nav className="relative z-10 backdrop-blur-xl bg-white/10 border-b border-white/20 px-4 py-2 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-xl font-semibold text-stone-800">Memora</h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              {familyMembers.slice(0, 3).map((member, index) => (
                <div key={index} className="relative">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-7 h-7 rounded-full border-2 border-white/30 shadow-sm"
                    style={{ marginLeft: index > 0 ? '-8px' : '0' }}
                  />
                  {member.status === 'active' && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border border-white shadow-sm"></div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={handleVoiceRecord}
              className={`p-3 rounded-2xl backdrop-blur-md border border-white/30 shadow-lg transition-all duration-300 ${
                isRecording 
                  ? 'bg-red-100/40 border-red-200/50 scale-110 shadow-red-200/50' 
                  : 'bg-white/20 hover:bg-white/30 hover:scale-105'
              }`}
            >
              <Mic className={`w-5 h-5 ${isRecording ? 'text-red-600 animate-pulse' : 'text-stone-600'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Container - iOS App Style */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        
        {/* Animated Hero Section */}
        <div className="backdrop-blur-2xl bg-white/15 rounded-3xl border border-white/20 p-8 mb-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-orange-400/5 to-yellow-400/5"></div>
          
          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '6s'}}></div>
            <div className="absolute top-20 right-20 w-12 h-12 bg-gradient-to-r from-orange-400/15 to-amber-500/15 rounded-lg rotate-45 animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
            <div className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-r from-amber-500/25 to-yellow-400/25 rounded-full animate-ping" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
            <div className="absolute bottom-10 right-10 w-8 h-8 bg-gradient-to-r from-orange-500/20 to-amber-600/20 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '5s'}}></div>
          </div>

          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content - Animated */}
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-stone-700">Saving stories that shaped you</span>
                </div>
                
                <h2 className="text-5xl font-bold text-stone-800 leading-tight animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  We have the photos,<br />
                  <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent animate-gradient-x">
                    but we've lost the stories
                  </span><br />
                  behind them.
                </h2>
                
                <p className="text-stone-600 text-xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  Preserve family voices and meaningful moments through stories that connect generations.
                </p>

                <div className="flex items-center space-x-4 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                  <button className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 flex items-center space-x-2 animate-pulse-slow">
                    <Mic className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Start Recording</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                  <button className="backdrop-blur-md bg-white/20 border border-white/30 text-stone-700 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/30">
                    View Demo
                  </button>
                </div>

                {/* Animated Stats */}
                <div className="flex items-center space-x-8 pt-4 animate-fade-in-up" style={{animationDelay: '1s'}}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600 animate-count-up">10K+</div>
                    <div className="text-sm text-stone-600">Stories Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 animate-count-up">50K+</div>
                    <div className="text-sm text-stone-600">Family Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-700 animate-count-up">99%</div>
                    <div className="text-sm text-stone-600">Memory Retention</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Interactive Mockup */}
              <div className="relative animate-fade-in-right" style={{animationDelay: '0.5s'}}>
                {/* Phone Mockup */}
                <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-2 shadow-2xl animate-float">
                  <div className="w-full h-full bg-gradient-to-br from-stone-50 to-amber-50 rounded-3xl overflow-hidden relative">
                    {/* Phone Screen Content */}
                    <div className="p-4 space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between animate-slide-in-down" style={{animationDelay: '1.2s'}}>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg"></div>
                          <span className="font-bold text-stone-800">Memora</span>
                        </div>
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full animate-pulse"></div>
                      </div>

                      {/* Memory Cards in Phone */}
                      <div className="space-y-3">
                        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-3 animate-slide-in-left" style={{animationDelay: '1.4s'}}>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                            <span className="text-xs font-medium text-stone-800">Mom's Sunday Story</span>
                          </div>
                          <div className="w-full h-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl"></div>
                        </div>

                        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-3 animate-slide-in-right" style={{animationDelay: '1.6s'}}>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                            <span className="text-xs font-medium text-stone-800">College Memories</span>
                          </div>
                          <div className="w-full h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl"></div>
                        </div>

                        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-3 animate-slide-in-left" style={{animationDelay: '1.8s'}}>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>
                            <span className="text-xs font-medium text-stone-800">Family Reunion</span>
                          </div>
                          <div className="w-full h-16 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl"></div>
                        </div>
                      </div>

                      {/* Recording Button */}
                      <div className="flex justify-center pt-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg animate-pulse-ring" style={{animationDelay: '2s'}}>
                          <Mic className="w-8 h-8 text-white animate-bounce" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Action Bubbles */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-bounce-slow" style={{animationDelay: '2.2s'}}>
                  <Camera className="w-8 h-8 text-white" />
                </div>

                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl animate-spin-slow" style={{animationDelay: '2.4s'}}>
                  <Heart className="w-6 h-6 text-white" />
                </div>

                <div className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-ping" style={{animationDelay: '2.6s'}}>
                  <Users className="w-5 h-5 text-white" />
                </div>

                {/* Vector-style connecting lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none animate-draw-line" style={{animationDelay: '3s'}}>
                  <path d="M 50 50 Q 200 100 350 150" stroke="url(#gradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" opacity="0.3">
                    <animate attributeName="stroke-dashoffset" values="10;0" dur="3s" repeatCount="indefinite" />
                  </path>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#ea580c" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fade-in-right {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slide-in-down {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slide-in-left {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(2deg);
            }
          }
          
          @keyframes pulse-ring {
            0% {
              box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
            }
            50% {
              box-shadow: 0 0 0 20px rgba(239, 68, 68, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
            }
          }
          
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          @keyframes pulse-slow {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          
          @keyframes gradient-x {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          
          @keyframes count-up {
            from {
              transform: scale(0.5);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }
          
          .animate-fade-in-right {
            animation: fade-in-right 1s ease-out forwards;
            opacity: 0;
          }
          
          .animate-slide-in-down {
            animation: slide-in-down 0.6s ease-out forwards;
            opacity: 0;
          }
          
          .animate-slide-in-left {
            animation: slide-in-left 0.6s ease-out forwards;
            opacity: 0;
          }
          
          .animate-slide-in-right {
            animation: slide-in-right 0.6s ease-out forwards;
            opacity: 0;
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-pulse-ring {
            animation: pulse-ring 2s infinite;
          }
          
          .animate-bounce-slow {
            animation: bounce-slow 3s infinite;
          }
          
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 4s infinite;
          }
          
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease infinite;
          }
          
          .animate-count-up {
            animation: count-up 1s ease-out forwards;
            opacity: 0;
          }
        `}</style>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-4 gap-6">
          
          {/* Memory Feed - Takes up 3 columns */}
          <div className="lg:col-span-3 backdrop-blur-2xl bg-white/15 rounded-3xl border border-white/20 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-stone-800">Recent Memories</h3>
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-3 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-6">
              {memories.map((memory, index) => (
                <div key={index} className="backdrop-blur-md bg-white/20 rounded-3xl p-6 border border-white/25 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/25">
                  <div className="flex items-center space-x-3 mb-4">
                    <img 
                      src={memory.avatar} 
                      alt={memory.author}
                      className="w-12 h-12 rounded-2xl shadow-md border-2 border-white/30"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-stone-800 text-lg">{memory.title}</h4>
                      <p className="text-stone-600 text-sm">{memory.author} • {memory.time}</p>
                    </div>
                    <button className="p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors">
                      <MoreHorizontal className="w-5 h-5 text-stone-600" />
                    </button>
                  </div>
                  
                  <div className="rounded-2xl overflow-hidden mb-4 shadow-lg">
                    <img 
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  
                  <p className="text-stone-700 mb-4 leading-relaxed">{memory.preview}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 bg-white/25 rounded-2xl px-4 py-2 hover:bg-white/35 transition-colors">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className="text-sm font-medium text-stone-700">{memory.reactions}</span>
                      </button>
                      <button className="flex items-center space-x-2 bg-white/25 rounded-2xl px-4 py-2 hover:bg-white/35 transition-colors">
                        <MessageCircle className="w-4 h-4 text-stone-600" />
                        <span className="text-sm font-medium text-stone-700">Comment</span>
                      </button>
                      {memory.type === 'voice' && (
                        <button className="flex items-center space-x-2 bg-white/25 rounded-2xl px-4 py-2 hover:bg-white/35 transition-colors">
                          <Play className="w-4 h-4 text-stone-600" />
                          <span className="text-sm font-medium text-stone-700">Play</span>
                        </button>
                      )}
                    </div>
                    <button className="p-2 rounded-xl bg-white/25 hover:bg-white/35 transition-colors">
                      <Share className="w-4 h-4 text-stone-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="backdrop-blur-2xl bg-white/15 rounded-3xl border border-white/20 p-6 shadow-xl">
              <h3 className="text-xl font-bold text-stone-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-4 p-4 rounded-2xl backdrop-blur-md bg-white/20 border border-white/25 text-left hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-md">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Record Memory</p>
                    <p className="text-sm text-stone-600">Start voice recording</p>
                  </div>
                </button>
                
                <button className="w-full flex items-center space-x-4 p-4 rounded-2xl backdrop-blur-md bg-white/20 border border-white/25 text-left hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-md">
                    <Upload className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-800">Upload Photo</p>
                    <p className="text-sm text-stone-600">Add with AI caption</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Family Members */}
            <div className="backdrop-blur-2xl bg-white/15 rounded-3xl border border-white/20 p-6 shadow-xl">
              <h3 className="text-xl font-bold text-stone-800 mb-4">Family Circle</h3>
              <div className="space-y-3">
                {familyMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-2xl bg-white/20 hover:bg-white/30 transition-colors">
                    <div className="relative">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-10 h-10 rounded-2xl shadow-md border-2 border-white/30"
                      />
                      {member.status === 'active' && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-stone-800">{member.name}</p>
                      <p className="text-xs text-stone-600">
                        {member.status === 'active' ? 'Online now' : 'Last seen 2h ago'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Memory */}
            <div className="backdrop-blur-2xl bg-white/15 rounded-3xl border border-white/20 p-6 shadow-xl">
              <h3 className="text-xl font-bold text-stone-800 mb-4">Memory of the Day</h3>
              <div className="rounded-2xl overflow-hidden mb-3 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=200&fit=crop&crop=faces"
                  alt="Featured memory"
                  className="w-full h-32 object-cover"
                />
              </div>
              <p className="font-semibold text-stone-800 mb-2">Christmas Morning 2023</p>
              <p className="text-sm text-stone-600 mb-4">The joy on everyone's faces when we opened presents together...</p>
              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                View Full Story
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 backdrop-blur-2xl bg-white/15 rounded-3xl border border-white/20 p-8 text-center shadow-xl">
          <h4 className="text-2xl font-bold text-stone-800 mb-3">Reliving memories together no matter where you are</h4>
          <p className="text-stone-600 mb-6 max-w-2xl mx-auto text-lg">
            Start preserving the stories behind your photos today. Create a legacy for future generations.
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-12 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Get Started Free
          </button>
        </div>
      </div>

      {/* Enhanced Recording Indicator */}
      {isRecording && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 backdrop-blur-2xl bg-red-50/80 border border-red-200/50 rounded-3xl px-8 py-4 shadow-2xl z-50">
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
            <span className="text-red-700 font-bold">Recording your story...</span>
            <div className="flex space-x-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-1 h-6 bg-red-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.15}s`}}></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default MemoraHomepage;