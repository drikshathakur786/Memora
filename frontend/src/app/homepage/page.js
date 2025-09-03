'use client';
import React, { useState, useEffect } from 'react';
import { Mic, Camera, Heart, Users, ArrowRight, X, Mail, Lock, User, Eye, EyeOff, MessageCircle, Share, Plus } from 'lucide-react';

function MemoraHeroFooter() {
  const [glowingOrbs, setGlowingOrbs] = useState([]);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signup');
  const [showPassword, setShowPassword] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
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

  const handleAuthModalOpen = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
    setFormData({ name: '', email: '', password: '' });
  };

  const handleAuthModalClose = () => {
    setShowAuthModal(false);
    setFormData({ name: '', email: '', password: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (authMode === 'signup' && !formData.name.trim()) {
      alert('Please enter your name');
      return;
    }
    
    if (!formData.email.trim()) {
      alert('Please enter your email');
      return;
    }
    
    if (!formData.password.trim()) {
      alert('Please enter your password');
      return;
    }
    
    console.log('Form submitted:', formData);
    setShowAuthModal(false);
    setFormData({ name: '', email: '', password: '' });
    setShowDashboard(true);
  };

  const handleSocialLogin = () => {
    setShowAuthModal(false);
    setShowDashboard(true);
  };

  if (showDashboard) {
    return <DashboardPage />;
  }

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

      {/* Navigation */}
      <nav className="relative z-10 backdrop-blur-xl bg-white/10 border-b border-white/20 px-4 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-stone-800">Memora</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-stone-700 hover:text-amber-600 font-medium transition-colors duration-300">Features</a>
            <a href="#how-it-works" className="text-stone-700 hover:text-amber-600 font-medium transition-colors duration-300">How it Works</a>
            <a href="#pricing" className="text-stone-700 hover:text-amber-600 font-medium transition-colors duration-300">Pricing</a>
            <a href="#about" className="text-stone-700 hover:text-amber-600 font-medium transition-colors duration-300">About</a>
          </div>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => handleAuthModalOpen('login')}
              className="hidden md:block text-stone-700 hover:text-amber-600 font-medium px-4 py-2 rounded-lg transition-colors duration-300"
            >
              Sign In
            </button>
            <button 
              onClick={() => handleAuthModalOpen('login')}
              className="backdrop-blur-md bg-white/20 border border-white/30 text-stone-700 px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/30"
            >
              Log In
            </button>
            <button 
              onClick={() => handleAuthModalOpen('signup')}
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="backdrop-blur-2xl bg-white/15 rounded-3xl border border-white/20 p-8 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-orange-400/5 to-yellow-400/5"></div>
          
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-amber-400/20 to-orange-500/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '6s'}}></div>
            <div className="absolute top-20 right-20 w-12 h-12 bg-gradient-to-r from-orange-400/15 to-amber-500/15 rounded-lg rotate-45 animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
            <div className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-r from-amber-500/25 to-yellow-400/25 rounded-full animate-ping" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
            <div className="absolute bottom-10 right-10 w-8 h-8 bg-gradient-to-r from-orange-500/20 to-amber-600/20 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '5s'}}></div>
          </div>

          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-stone-700">Saving stories that shaped you</span>
                </div>
                
                <h2 className="text-5xl font-bold text-stone-800 leading-tight">
                  We have the photos,<br />
                  <span className="bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
                    but we have lost the stories
                  </span><br />
                  behind them.
                </h2>
                
                <p className="text-stone-600 text-xl leading-relaxed">
                  Preserve family voices and meaningful moments through stories that connect generations.
                </p>

                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => handleAuthModalOpen('signup')}
                    className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 flex items-center space-x-2"
                  >
                    <Mic className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Sign Up Free</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                  <button className="backdrop-blur-md bg-white/20 border border-white/30 text-stone-700 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/30">
                    View Demo
                  </button>
                </div>

                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">10K+</div>
                    <div className="text-sm text-stone-600">Stories Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">50K+</div>
                    <div className="text-sm text-stone-600">Family Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-700">99%</div>
                    <div className="text-sm text-stone-600">Memory Retention</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-stone-50 to-amber-50 rounded-3xl overflow-hidden relative">
                    <div className="p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg"></div>
                          <span className="font-bold text-stone-800">Memora</span>
                        </div>
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full animate-pulse"></div>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                            <span className="text-xs font-medium text-stone-800">Mom Sunday Story</span>
                          </div>
                          <div className="w-full h-16 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl"></div>
                        </div>

                        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                            <span className="text-xs font-medium text-stone-800">College Memories</span>
                          </div>
                          <div className="w-full h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl"></div>
                        </div>
                      </div>

                      <div className="flex justify-center pt-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                          <Mic className="w-8 h-8 text-white animate-bounce" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="backdrop-blur-2xl bg-white/15 rounded-3xl border border-white/20 p-8 text-center shadow-xl">
          <h4 className="text-2xl font-bold text-stone-800 mb-3">Reliving memories together no matter where you are</h4>
          <p className="text-stone-600 mb-6 max-w-2xl mx-auto text-lg">
            Start preserving the stories behind your photos today. Create a legacy for future generations.
          </p>
          <button 
            onClick={() => handleAuthModalOpen('signup')}
            className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-12 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Sign Up Free - Start Today
          </button>
        </div>
      </div>

      {/* Authentication Modal */}
      {showAuthModal && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={handleAuthModalClose}
        >
          <div 
            className="bg-gradient-to-br from-white/95 via-amber-50/95 to-orange-50/95 backdrop-blur-3xl rounded-3xl border-2 border-white/40 p-6 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-[0_32px_64px_rgba(0,0,0,0.3)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
            
            <button
              onClick={handleAuthModalClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/80 hover:bg-white/95 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
            >
              <X className="w-4 h-4 text-stone-700" />
            </button>

            <div className="text-center mb-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                <Heart className="w-8 h-8 text-white animate-pulse" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-stone-800 via-amber-800 to-orange-800 bg-clip-text text-transparent mb-2">
                {authMode === 'signup' ? 'Join Memora' : 'Welcome Back'}
              </h2>
              <p className="text-stone-700 text-base font-medium">
                {authMode === 'signup' 
                  ? 'Start preserving your family stories today' 
                  : 'Continue your story journey'
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              {authMode === 'signup' && (
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600 group-focus-within:text-orange-600 transition-colors z-10" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 bg-white/90 backdrop-blur-md border-2 border-white/60 rounded-2xl placeholder-stone-500 text-stone-800 text-base font-medium focus:outline-none focus:ring-4 focus:ring-amber-500/30 focus:border-amber-500 focus:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-xl"
                    required
                  />
                </div>
              )}
              
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600 group-focus-within:text-orange-600 transition-colors z-10" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 bg-white/90 backdrop-blur-md border-2 border-white/60 rounded-2xl placeholder-stone-500 text-stone-800 text-base font-medium focus:outline-none focus:ring-4 focus:ring-amber-500/30 focus:border-amber-500 focus:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-xl"
                  required
                />
              </div>
              
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-600 group-focus-within:text-orange-600 transition-colors z-10" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-12 py-3 bg-white/90 backdrop-blur-md border-2 border-white/60 rounded-2xl placeholder-stone-500 text-stone-800 text-base font-medium focus:outline-none focus:ring-4 focus:ring-amber-500/30 focus:border-amber-500 focus:bg-white/95 transition-all duration-300 shadow-lg hover:shadow-xl"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-600 hover:text-orange-600 transition-colors z-10 p-1 rounded-lg hover:bg-white/50"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <button
                type="submit"
                disabled={!formData.email || !formData.password || (authMode === 'signup' && !formData.name)}
                className={`w-full py-4 rounded-2xl font-bold text-base shadow-2xl transition-all duration-500 hover:scale-[1.02] flex items-center justify-center space-x-2 relative overflow-hidden group ${
                  (!formData.email || !formData.password || (authMode === 'signup' && !formData.name))
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 text-white hover:shadow-[0_20px_40px_rgba(251,146,60,0.4)]'
                }`}
              >
                <span>{authMode === 'signup' ? 'Create Account' : 'Sign In'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-6 pt-6 border-t-2 border-white/40 relative z-10">
              <p className="text-center text-stone-700 mb-4 text-base font-medium">Or continue with</p>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={handleSocialLogin}
                  className="flex items-center justify-center space-x-2 py-3 bg-white/80 backdrop-blur-md border-2 border-white/60 rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md"></div>
                  <span className="font-semibold text-stone-800 text-sm">Google</span>
                </button>
                <button 
                  onClick={handleSocialLogin}
                  className="flex items-center justify-center space-x-2 py-3 bg-white/80 backdrop-blur-md border-2 border-white/60 rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <div className="w-5 h-5 bg-gradient-to-r from-gray-800 to-black rounded-lg shadow-md"></div>
                  <span className="font-semibold text-stone-800 text-sm">Apple</span>
                </button>
              </div>
            </div>

            <div className="mt-6 text-center relative z-10">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 border border-white/40">
                <p className="text-stone-700 text-base">
                  {authMode === 'signup' ? 'Already have an account?' : "Don't have an account?"}
                  <button
                    onClick={() => setAuthMode(authMode === 'signup' ? 'login' : 'signup')}
                    className="ml-2 text-amber-600 hover:text-orange-600 font-bold transition-colors hover:underline"
                  >
                    {authMode === 'signup' ? 'Sign In' : 'Sign Up'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Dashboard Component
function DashboardPage() {
  const activeMembers = [
    { name: "Mom", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b739?w=40&h=40&fit=crop&crop=faces", status: "online", lastSeen: "now", activity: "Recording a memory" },
    { name: "Dad", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces", status: "online", lastSeen: "2m ago", activity: "Viewing photos" },
    { name: "Sarah", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=faces", status: "away", lastSeen: "15m ago", activity: "Away" },
    { name: "Alex", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=faces", status: "online", lastSeen: "just now", activity: "Adding comments" },
    { name: "Grandma", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=faces", status: "offline", lastSeen: "1h ago", activity: "Offline" },
  ];

  const familyCircle = [
    { 
      name: "The Johnson Family", 
      members: 12, 
      avatar: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=60&h=60&fit=crop", 
      recentActivity: "Mom shared a new memory",
      newMemories: 3
    },
    { 
      name: "College Friends", 
      members: 8, 
      avatar: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=60&h=60&fit=crop", 
      recentActivity: "Alex uploaded graduation photos",
      newMemories: 1
    },
    { 
      name: "Work Squad", 
      members: 15, 
      avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=60&h=60&fit=crop", 
      recentActivity: "Team retreat memories",
      newMemories: 5
    },
  ];

  const memories = [
    {
      id: 1,
      title: "Sunday Morning Pancakes",
      author: "Mom",
      time: "2h ago",
      reactions: 12,
      comments: 5,
      type: "photo",
      content: "The smell of vanilla and butter filling the kitchen every Sunday morning... These moments with family are what I treasure most.",
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500&h=300&fit=crop&crop=faces",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b739?w=40&h=40&fit=crop&crop=faces",
      tags: ["family", "traditions"]
    },
    {
      id: 2,
      title: "First Day at College",
      author: "You",
      time: "1d ago",
      reactions: 18,
      comments: 8,
      type: "photo",
      content: "Standing in front of the campus gates, nervous but excited for what's ahead. Mom cried, Dad pretended not to.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&fit=crop&crop=faces",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=faces",
      tags: ["milestone", "education"]
    },
    {
      id: 3,
      title: "Grandpa War Stories",
      author: "Sarah",
      time: "3d ago",
      reactions: 25,
      comments: 12,
      type: "voice",
      content: "He told us about the letters he wrote to grandma during the war, how he kept her picture in his pocket.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=300&fit=crop&crop=faces",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=faces",
      tags: ["history", "love"]
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-25 to-orange-50">
      {/* Dashboard Header */}
      <nav className="backdrop-blur-xl bg-white/15 border-b border-white/30 px-6 py-4 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-stone-800">Memora</h1>
              <p className="text-sm text-stone-600">Welcome back, Alex!</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-3 rounded-2xl backdrop-blur-md bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-110">
              <Mic className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-2xl backdrop-blur-md bg-white/30 border border-white/40 shadow-lg hover:bg-white/40 transition-all hover:scale-110">
              <Camera className="w-5 h-5 text-stone-600" />
            </button>
            <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl border-2 border-white/40 shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
          </div>
        </div>
      </nav>

      {/* Main Dashboard Layout */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          
          {/* LEFT SIDEBAR - Active Members */}
          <div className="col-span-3">
            <div className="sticky top-24">
              <div className="backdrop-blur-2xl bg-white/20 rounded-3xl border-2 border-white/30 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-stone-800">Active Members</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-medium">{activeMembers.filter(m => m.status === 'online').length} online</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {activeMembers.map((member, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 rounded-2xl bg-white/30 hover:bg-white/40 transition-all cursor-pointer group shadow-md hover:shadow-lg">
                      <div className="relative">
                        <img 
                          src={member.avatar} 
                          alt={member.name}
                          className="w-14 h-14 rounded-2xl shadow-lg border-2 border-white/40"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-3 border-white shadow-lg ${
                          member.status === 'online' ? 'bg-green-400' : 
                          member.status === 'away' ? 'bg-yellow-400' : 'bg-gray-400'
                        }`}></div>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-stone-800 group-hover:text-amber-700 transition-colors text-lg">{member.name}</p>
                        <p className="text-sm text-stone-600 font-medium">{member.activity}</p>
                        <p className="text-xs text-stone-500">{member.lastSeen}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-8 pt-6 border-t-2 border-white/30">
                  <h4 className="text-lg font-bold text-stone-800 mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 p-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                      <Mic className="w-6 h-6" />
                      <span className="font-bold">Record Memory</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-4 rounded-2xl backdrop-blur-md bg-white/30 border-2 border-white/40 text-stone-700 shadow-lg hover:bg-white/40 transition-all hover:scale-105">
                      <Camera className="w-6 h-6" />
                      <span className="font-bold">Upload Photo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER - Memory Feed */}
          <div className="col-span-6">
            <div className="backdrop-blur-2xl bg-white/20 rounded-3xl border-2 border-white/30 p-6 shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-stone-800">Family Memory Feed</h3>
                  <p className="text-stone-600 font-medium">Stories that connect generations</p>
                </div>
                <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-110 transition-all flex items-center space-x-2">
                  <Plus className="w-5 h-5" />
                  <span>New Memory</span>
                </button>
              </div>
              
              <div className="space-y-8 max-h-[75vh] overflow-y-auto pr-2">
                {memories.map((memory) => (
                  <div key={memory.id} className="backdrop-blur-md bg-white/30 rounded-3xl p-8 border-2 border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white/35 hover:scale-[1.02]">
                    <div className="flex items-center space-x-4 mb-6">
                      <img 
                        src={memory.avatar} 
                        alt={memory.author}
                        className="w-16 h-16 rounded-3xl shadow-xl border-3 border-white/50"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-stone-800 text-xl mb-1">{memory.title}</h4>
                        <p className="text-stone-600 font-medium">{memory.author} • {memory.time}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          {memory.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-amber-100/60 text-amber-700 rounded-full text-xs font-semibold">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      {memory.type === 'voice' && (
                        <div className="p-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl shadow-lg">
                          <Mic className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>
                    
                    <div className="rounded-3xl overflow-hidden mb-6 shadow-2xl">
                      <img 
                        src={memory.image}
                        alt={memory.title}
                        className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    <p className="text-stone-700 mb-6 leading-relaxed text-lg font-medium">{memory.content}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-3 bg-white/40 rounded-2xl px-6 py-3 hover:bg-white/50 transition-all group shadow-lg hover:shadow-xl">
                          <Heart className="w-5 h-5 text-red-500 group-hover:scale-125 transition-transform" />
                          <span className="font-bold text-stone-700">{memory.reactions}</span>
                        </button>
                        <button className="flex items-center space-x-3 bg-white/40 rounded-2xl px-6 py-3 hover:bg-white/50 transition-all shadow-lg hover:shadow-xl">
                          <MessageCircle className="w-5 h-5 text-stone-600" />
                          <span className="font-bold text-stone-700">{memory.comments}</span>
                        </button>
                      </div>
                      <button className="p-3 rounded-2xl bg-white/40 hover:bg-white/50 transition-all shadow-lg hover:shadow-xl hover:scale-110">
                        <Share className="w-5 h-5 text-stone-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR - Family Circle */}
          <div className="col-span-3">
            <div className="sticky top-24 space-y-6">
              <div className="backdrop-blur-2xl bg-white/20 rounded-3xl border-2 border-white/30 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-stone-800">Family Circles</h3>
                  <Users className="w-7 h-7 text-amber-600" />
                </div>
                
                <div className="space-y-4">
                  {familyCircle.map((circle, index) => (
                    <div key={index} className="p-5 rounded-3xl bg-white/30 hover:bg-white/40 transition-all cursor-pointer group shadow-lg hover:shadow-xl hover:scale-105">
                      <div className="flex items-center space-x-4 mb-4">
                        <img 
                          src={circle.avatar} 
                          alt={circle.name}
                          className="w-16 h-16 rounded-3xl shadow-xl border-3 border-white/50"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-stone-800 group-hover:text-amber-700 transition-colors text-lg">{circle.name}</h4>
                          <p className="text-sm text-stone-600 font-medium">{circle.members} members</p>
                        </div>
                        {circle.newMemories > 0 && (
                          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white text-sm font-bold">{circle.newMemories}</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-sm text-stone-600 mb-4 font-medium">{circle.recentActivity}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-3">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full border-3 border-white shadow-lg"></div>
                          ))}
                          <div className="w-8 h-8 bg-stone-300 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                            <span className="text-xs font-bold text-stone-600">+{circle.members - 4}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-stone-600 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Create New Circle */}
                <div className="mt-6 pt-6 border-t-2 border-white/30">
                  <button className="w-full p-5 rounded-3xl border-3 border-dashed border-amber-400/60 text-amber-600 hover:bg-amber-50/30 hover:border-amber-500 transition-all group shadow-lg hover:shadow-xl">
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Plus className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold text-lg">Create New Circle</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Memory of the Day */}
              <div className="backdrop-blur-2xl bg-white/20 rounded-3xl border-2 border-white/30 p-6 shadow-xl">
                <h3 className="text-xl font-bold text-stone-800 mb-6">Memory of the Day</h3>
                <div className="rounded-3xl overflow-hidden mb-4 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=200&fit=crop&crop=faces"
                    alt="Featured memory"
                    className="w-full h-40 object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <p className="font-bold text-stone-800 mb-2 text-lg">Christmas Morning 2023</p>
                <p className="text-sm text-stone-600 mb-6 leading-relaxed">The joy on everyone faces when we opened presents together...</p>
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  View Full Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemoraHeroFooter;