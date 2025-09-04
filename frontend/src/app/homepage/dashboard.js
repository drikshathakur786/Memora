import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Heart, 
  MessageCircle, 
  Share2, 
  Mic, 
  Camera, 
  Users, 
  Calendar,
  Bell,
  Settings,
  ArrowRight,
  Play,
  Pause,
  MoreHorizontal,
  ChevronDown,
  Bookmark,
  Star,
  Upload,
  X,
  Send
} from 'lucide-react';

export default function MemoraSaaSDashboard() {
  const [activeView, setActiveView] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showNewMemoryModal, setShowNewMemoryModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [likedMemories, setLikedMemories] = useState(new Set());
  const [bookmarkedMemories, setBookmarkedMemories] = useState(new Set());
  const [activeFilter, setActiveFilter] = useState('All Types');
  const [newMemoryTitle, setNewMemoryTitle] = useState('');
  const [newMemoryContent, setNewMemoryContent] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [memories, setMemories] = useState([
    {
      id: 1,
      title: "Family Reunion Summer 2024",
      author: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      time: "2 hours ago",
      type: "photo",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
      preview: "Amazing day with the whole family gathered together for the first time in years. The laughter, stories, and shared memories created lasting bonds that will be treasured forever.",
      reactions: 12,
      comments: 8,
      tags: ["Family", "Reunion"],
      featured: true
    },
    {
      id: 2,
      title: "Dad's Famous Pancake Recipe",
      author: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      time: "1 day ago",
      type: "voice",
      duration: "3:24",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&h=400&fit=crop",
      preview: "Recording the secret ingredients and techniques that Dad used for his legendary Sunday pancakes. A tradition that spans three generations.",
      reactions: 18,
      comments: 12,
      tags: ["Recipe", "Tradition"]
    },
    {
      id: 3,
      title: "Emma's First Steps",
      author: "Lisa Thompson",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      time: "3 days ago",
      type: "video",
      duration: "1:12",
      image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&h=400&fit=crop",
      preview: "Captured the magical moment when Emma took her very first independent steps. Pure joy and determination in every wobble.",
      reactions: 24,
      comments: 15,
      tags: ["Milestone", "Baby"]
    }
  ]);

  const activeMembers = [
    {
      name: "Sarah J.",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      status: "online",
      activity: "Uploading photos"
    },
    {
      name: "Michael C.",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      status: "online",
      activity: "Recording memory"
    },
    {
      name: "Lisa T.",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      status: "away",
      activity: "Last seen 1h ago"
    },
    {
      name: "David R.",
      avatar: "https://randomuser.me/api/portraits/men/7.jpg",
      status: "online",
      activity: "Viewing memories"
    }
  ];

  const notifications = [
    { id: 1, message: "Sarah Johnson added 3 new photos", time: "5 min ago", read: false },
    { id: 2, message: "New comment on 'Family Reunion Summer 2024'", time: "10 min ago", read: false },
    { id: 3, message: "Michael Chen shared a voice note", time: "1 hour ago", read: true },
    { id: 4, message: "You have 2 pending circle invitations", time: "2 hours ago", read: false }
  ];

  const handleLike = (memoryId) => {
    setLikedMemories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(memoryId)) {
        newSet.delete(memoryId);
        setMemories(memories.map(m => 
          m.id === memoryId ? { ...m, reactions: m.reactions - 1 } : m
        ));
      } else {
        newSet.add(memoryId);
        setMemories(memories.map(m => 
          m.id === memoryId ? { ...m, reactions: m.reactions + 1 } : m
        ));
      }
      return newSet;
    });
  };

  const handleBookmark = (memoryId) => {
    setBookmarkedMemories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(memoryId)) {
        newSet.delete(memoryId);
      } else {
        newSet.add(memoryId);
      }
      return newSet;
    });
  };

  const handleShare = (memory) => {
    if (navigator.share) {
      navigator.share({
        title: memory.title,
        text: memory.preview,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`${memory.title} - ${memory.preview}`);
      alert('Memory details copied to clipboard!');
    }
  };

  const handleCreateMemory = () => {
    if (newMemoryTitle.trim() && newMemoryContent.trim()) {
      const newMemory = {
        id: memories.length + 1,
        title: newMemoryTitle,
        author: "You",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        time: "Just now",
        type: "photo",
        image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=600&h=400&fit=crop",
        preview: newMemoryContent,
        reactions: 0,
        comments: 0,
        tags: ["New"],
        featured: false
      };
      setMemories([newMemory, ...memories]);
      setNewMemoryTitle('');
      setNewMemoryContent('');
      setShowNewMemoryModal(false);
    }
  };

  const handleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate recording
      setTimeout(() => {
        setIsRecording(false);
        const voiceMemory = {
          id: memories.length + 1,
          title: "New Voice Note",
          author: "You",
          avatar: "https://randomuser.me/api/portraits/women/8.jpg",
          time: "Just now",
          type: "voice",
          duration: "0:45",
          image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=400&fit=crop",
          preview: "A new voice memory has been recorded and added to your collection.",
          reactions: 0,
          comments: 0,
          tags: ["Voice"],
          featured: false
        };
        setMemories([voiceMemory, ...memories]);
      }, 3000);
    }
  };

  const filteredMemories = memories.filter(memory => {
    const matchesSearch = memory.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         memory.preview.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesView = activeView === 'all' || 
                       (activeView === 'photos' && memory.type === 'photo') ||
                       (activeView === 'voices' && memory.type === 'voice');
    const matchesFilter = activeFilter === 'All Types' ||
                         (activeFilter === 'Photos' && memory.type === 'photo') ||
                         (activeFilter === 'Voice Notes' && memory.type === 'voice') ||
                         (activeFilter === 'Videos' && memory.type === 'video');
    return matchesSearch && matchesView && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-200/20 to-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-amber-200/15 to-orange-300/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-orange-100/25 to-amber-100/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header */}
      <header className={`relative z-10 backdrop-blur-xl bg-white/20 border-b border-white/30 shadow-lg transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className={`flex items-center space-x-8 transition-all duration-500 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Memora
                </h1>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                {[
                  { view: 'all', label: 'All Memories' },
                  { view: 'photos', label: 'Photos' },
                  { view: 'voices', label: 'Voice Notes' }
                ].map((item) => (
                  <button 
                    key={item.view}
                    onClick={() => setActiveView(item.view)}
                    className={`text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-full hover:scale-105 active:scale-95 ${
                      activeView === item.view 
                        ? 'text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg' 
                        : 'text-gray-700 hover:text-orange-600 hover:bg-white/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className={`flex items-center space-x-4 transition-all duration-500 delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="text"
                  placeholder="Search memories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-6 py-3 w-80 text-sm bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-transparent placeholder-gray-500 shadow-lg transition-all duration-300 focus:scale-105"
                />
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-3 rounded-xl bg-white/30 backdrop-blur-lg border border-white/40 hover:bg-white/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 relative"
                >
                  <Bell className="w-5 h-5 text-gray-700" />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  )}
                </button>
                
                {showNotifications && (
                  <div className="absolute right-0 top-16 w-80 bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl p-4 z-50">
                    <h3 className="font-bold text-gray-800 mb-3">Notifications</h3>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {notifications.map(notification => (
                        <div key={notification.id} className={`p-3 rounded-lg border transition-all ${notification.read ? 'bg-gray-50 border-gray-200' : 'bg-orange-50 border-orange-200'}`}>
                          <p className="text-sm text-gray-800">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <button className="p-3 rounded-xl bg-white/30 backdrop-blur-lg border border-white/40 hover:bg-white/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95">
                <Settings className="w-5 h-5 text-gray-700" />
              </button>
              
              <div className="relative hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://randomuser.me/api/portraits/women/8.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-3 border-white/60 shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          
          {/* Left Sidebar */}
          <div className={`col-span-3 transition-all duration-700 delay-100 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="space-y-6">
              
              {/* Quick Actions */}
              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-orange-500" />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => setShowNewMemoryModal(true)}
                    className="w-full flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Create New Memory</span>
                  </button>
                  
                  <button 
                    onClick={handleRecording}
                    className={`w-full flex items-center space-x-4 p-4 rounded-xl backdrop-blur-lg border font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 ${
                      isRecording 
                        ? 'bg-red-100/80 border-red-300 text-red-700' 
                        : 'bg-white/30 border-white/40 text-gray-700 hover:bg-white/40'
                    }`}
                  >
                    <Mic className={`w-5 h-5 ${isRecording ? 'animate-pulse' : ''}`} />
                    <span>{isRecording ? 'Recording...' : 'Record Voice Note'}</span>
                  </button>
                  
                  <label className="w-full flex items-center space-x-4 p-4 rounded-xl bg-white/30 backdrop-blur-lg border border-white/40 text-gray-700 font-medium hover:bg-white/40 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer">
                    <Camera className="w-5 h-5" />
                    <span>Upload Photos</span>
                    <input type="file" accept="image/*" className="hidden" multiple />
                  </label>
                </div>
              </div>

              {/* Active Members */}
              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-orange-500" />
                    Active Members
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-semibold">{activeMembers.filter(m => m.status === 'online').length} online</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {activeMembers.map((member, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-4 p-3 rounded-xl hover:bg-white/30 transition-all duration-300 cursor-pointer hover:translate-x-2"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative">
                        <img 
                          src={member.avatar} 
                          alt={member.name}
                          className="w-10 h-10 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
                        />
                        <div className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-white shadow-sm ${
                          member.status === 'online' ? 'bg-green-500' : 
                          member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                        }`}></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-800">{member.name}</p>
                        <p className="text-sm text-gray-600 truncate">{member.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filters */}
              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2 text-orange-500" />
                  Filter Memories
                </h3>
                <div className="space-y-2">
                  {['All Types', 'Photos', 'Voice Notes', 'Videos', 'Stories'].map((filter, index) => (
                    <button 
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`w-full text-left p-3 rounded-lg font-medium transition-all duration-300 hover:translate-x-2 ${
                        activeFilter === filter 
                          ? 'bg-orange-100/80 text-orange-700 border border-orange-300' 
                          : 'text-gray-700 hover:bg-white/30 hover:text-orange-600'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={`col-span-6 transition-all duration-700 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Memory Feed</h2>
                  <p className="text-gray-600">Recent family memories and cherished moments ({filteredMemories.length} memories)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setActiveFilter('All Types')}
                    className="p-3 rounded-xl bg-white/30 backdrop-blur-lg border border-white/40 hover:bg-white/40 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 active:scale-95"
                  >
                    <Filter className="w-5 h-5 text-gray-700" />
                  </button>
                  <button 
                    onClick={() => setBookmarkedMemories(new Set())}
                    className="p-3 rounded-xl bg-white/30 backdrop-blur-lg border border-white/40 hover:bg-white/40 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 active:scale-95"
                  >
                    <Bookmark className={`w-5 h-5 ${bookmarkedMemories.size > 0 ? 'text-orange-500 fill-current' : 'text-gray-700'}`} />
                  </button>
                </div>
              </div>
              
              <div className="space-y-6">
                {filteredMemories.map((memory, index) => (
                  <div 
                    key={memory.id}
                    className={`backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl p-6 hover:bg-white/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-2 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: `${0.1 * index + 0.3}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <img 
                        src={memory.avatar} 
                        alt={memory.author}
                        className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <h4 className="text-lg font-bold text-gray-800">{memory.title}</h4>
                            {memory.featured && (
                              <div className="px-3 py-1 bg-gradient-to-r from-orange-400 to-amber-400 text-white rounded-full text-xs font-bold flex items-center animate-pulse">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            {memory.tags.map((tag, i) => (
                              <span key={i} className="px-3 py-1 bg-orange-100/80 text-orange-700 rounded-full text-sm font-semibold shadow-sm hover:scale-105 transition-transform duration-300">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                          <span className="font-medium">{memory.author}</span>
                          <span>•</span>
                          <span>{memory.time}</span>
                          {memory.duration && (
                            <>
                              <span>•</span>
                              <div className="flex items-center space-x-1">
                                {memory.type === 'voice' ? <Mic className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                <span>{memory.duration}</span>
                              </div>
                            </>
                          )}
                        </div>
                        
                        <div className="rounded-xl overflow-hidden mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group relative">
                          <img 
                            src={memory.image}
                            alt={memory.title}
                            className="w-full h-64 object-cover"
                          />
                          {memory.type === 'video' && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                                <Play className="w-8 h-8 text-gray-700 ml-1" />
                              </div>
                            </div>
                          )}
                          {memory.type === 'voice' && (
                            <div className="absolute inset-0 flex items-center justify-center bg-orange-500/10 group-hover:bg-orange-500/20 transition-all">
                              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                                <Mic className="w-8 h-8 text-orange-600" />
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-gray-700 mb-6 leading-relaxed">{memory.preview}</p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-white/30">
                          <div className="flex items-center space-x-6">
                            <button 
                              onClick={() => handleLike(memory.id)}
                              className={`flex items-center space-x-2 transition-all duration-300 hover:scale-110 active:scale-95 ${
                                likedMemories.has(memory.id) ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                              }`}
                            >
                              <Heart className={`w-5 h-5 ${likedMemories.has(memory.id) ? 'fill-current' : ''}`} />
                              <span className="font-semibold">{memory.reactions}</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-all duration-300 hover:scale-110 active:scale-95">
                              <MessageCircle className="w-5 h-5" />
                              <span className="font-semibold">{memory.comments}</span>
                            </button>
                            <button 
                              onClick={() => handleShare(memory)}
                              className="text-gray-600 hover:text-orange-500 transition-all duration-300 hover:scale-110 active:scale-95"
                            >
                              <Share2 className="w-5 h-5" />
                            </button>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => handleBookmark(memory.id)}
                              className={`transition-all duration-300 hover:scale-110 active:scale-95 ${
                                bookmarkedMemories.has(memory.id) ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'
                              }`}
                            >
                              <Bookmark className={`w-5 h-5 ${bookmarkedMemories.has(memory.id) ? 'fill-current' : ''}`} />
                            </button>
                            <button className="text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-110 active:scale-95">
                              <MoreHorizontal className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {filteredMemories.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-10 h-10 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No memories found</h3>
                    <p className="text-gray-600">Try adjusting your search or filters to find more memories.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className={`col-span-3 transition-all duration-700 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="space-y-6">
              
              {/* Family Circles */}
              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-orange-500" />
                    Family Circles
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: "Johnson Family", members: 12, newMemories: 2, avatar: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=40&h=40&fit=crop", active: true },
                    { name: "Extended Family", members: 28, newMemories: 0, avatar: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=40&h=40&fit=crop", active: false }
                  ].map((circle, index) => (
                    <button 
                      key={circle.name}
                      className="w-full p-4 rounded-xl bg-white/30 border border-white/40 hover:bg-white/40 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:-translate-x-2 text-left"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <img 
                          src={circle.avatar}
                          alt={circle.name}
                          className="w-10 h-10 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800">{circle.name}</h4>
                          <p className="text-sm text-gray-600">{circle.members} members</p>
                        </div>
                        {circle.newMemories > 0 && (
                          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md animate-pulse">
                            <span className="text-white text-xs font-bold">{circle.newMemories}</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">
                        {circle.active ? `${circle.newMemories} new memories today` : 'Active 2 hours ago'}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {[1,2,3,4].map((i) => (
                            <div key={i} className="w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"></div>
                          ))}
                          <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
                            <span className="text-xs font-bold text-gray-600">+{circle.members - 4}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 hover:text-orange-500 transition-colors duration-300" />
                      </div>
                    </button>
                  ))}
                </div>

                <button className="w-full mt-4 p-4 border-2 border-dashed border-orange-300/60 rounded-xl text-orange-600 hover:border-orange-400 hover:bg-orange-50/20 transition-all duration-300 font-semibold hover:scale-105 active:scale-95">
                  <div className="flex items-center justify-center space-x-3">
                    <Plus className="w-5 h-5" />
                    <span>Create New Circle</span>
                  </div>
                </button>
              </div>

              {/* Featured Memory */}
              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-orange-500" />
                  Featured Memory
                </h3>
                <button className="w-full text-left group">
                  <div className="rounded-xl overflow-hidden mb-4 shadow-lg hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <img 
                      src="https://picsum.photos/400/240?random=40"
                      alt="Featured"
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">Christmas Morning 2023</h4>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">The magic of family traditions and shared joy during the holidays creates memories that last a lifetime...</p>
                </button>
                <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                  View Memory
                </button>
              </div>

              {/* Statistics */}
              <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-orange-500" />
                  This Month
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Memories Created", value: memories.length, color: "text-orange-600" },
                    { label: "Voice Notes", value: memories.filter(m => m.type === 'voice').length, color: "text-amber-600" },
                    { label: "Photos Uploaded", value: memories.filter(m => m.type === 'photo').length, color: "text-orange-500" },
                    { label: "Total Reactions", value: memories.reduce((sum, m) => sum + m.reactions, 0), color: "text-amber-500" }
                  ].map((stat, index) => (
                    <div 
                      key={stat.label}
                      className="flex justify-between items-center p-3 rounded-lg bg-white/30 border border-white/40 hover:bg-white/40 hover:-translate-x-1 transition-all duration-300"
                      style={{ transitionDelay: `${0.1 * index}s` }}
                    >
                      <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                      <span className={`text-lg font-bold ${stat.color}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Dropdown - Rendered at root level */}
      {showNotifications && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            style={{ 
              zIndex: 999998,
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
            onClick={() => setShowNotifications(false)}
          />
          
          {/* Notification dropdown */}
          <div 
            className="fixed w-96 bg-white rounded-2xl shadow-2xl border border-gray-200"
            style={{ 
              zIndex: 999999,
              position: 'fixed',
              top: '5rem',
              right: '2rem',
              maxHeight: 'calc(100vh - 8rem)'
            }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Notifications</h3>
                <button 
                  onClick={() => setShowNotifications(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {notifications.map(notification => (
                  <div key={notification.id} className={`p-4 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer ${notification.read ? 'bg-gray-50 border-gray-200' : 'bg-orange-50 border-orange-200'}`}>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bell className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 mt-2"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="w-full text-center text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors">
                  Mark all as read
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* New Memory Modal */}
      {showNewMemoryModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full shadow-2xl border border-white/40">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Create New Memory</h3>
              <button 
                onClick={() => setShowNewMemoryModal(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Memory Title</label>
                <input 
                  type="text"
                  value={newMemoryTitle}
                  onChange={(e) => setNewMemoryTitle(e.target.value)}
                  placeholder="Enter a title for your memory..."
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Memory Description</label>
                <textarea 
                  value={newMemoryContent}
                  onChange={(e) => setNewMemoryContent(e.target.value)}
                  placeholder="Share your memory story..."
                  rows={4}
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-transparent resize-none"
                />
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <button 
                  onClick={handleCreateMemory}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Create Memory</span>
                </button>
                <button 
                  onClick={() => setShowNewMemoryModal(false)}
                  className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}