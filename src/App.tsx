import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  CheckSquare, 
  Info, 
  Map as MapIcon, 
  ShoppingBag, 
  ChevronRight, 
  ExternalLink,
  Search,
  CheckCircle2,
  Calendar,
  AlertCircle,
  Clock,
  Store
} from 'lucide-react';
import { 
  TRAVEL_SPOTS, 
  SHOPPING_CHECKLIST, 
  TASKS_BEFORE_TRIP, 
  ITINERARY,
  TravelSpot 
} from './data';

type Tab = 'dashboard' | 'itinerary' | 'spots' | 'checklist' | 'market';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [selectedRegion, setSelectedRegion] = useState<string>('전체');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [shoppingItems, setShoppingItems] = useState(() => {
    const saved = localStorage.getItem('tokyo_shopping_v4');
    return saved ? JSON.parse(saved) : SHOPPING_CHECKLIST;
  });

  useEffect(() => {
    localStorage.setItem('tokyo_shopping_v4', JSON.stringify(shoppingItems));
  }, [shoppingItems]);

  const toggleShoppingItem = (index: number) => {
    const newItems = [...shoppingItems];
    newItems[index].checked = !newItems[index].checked;
    setShoppingItems(newItems);
  };

  const filteredSpots = TRAVEL_SPOTS.filter(spot => {
    const matchesRegion = selectedRegion === '전체' || spot.region === selectedRegion;
    const isGeneralCategory = spot.category !== '아침/마트';
    const matchesCategory = selectedCategory === '전체' ? isGeneralCategory : spot.category === selectedCategory;
    const matchesSearch = spot.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         spot.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesCategory && matchesSearch;
  });

  const regions = ['전체', ...Array.from(new Set(TRAVEL_SPOTS.map(s => s.region)))];
  const categories = ['전체', '식당', '카페', '오전 오픈 카페', '디저트'];

  // Group itinerary by date
  const itineraryGrouped = Array.from(new Set(ITINERARY.map(item => item.date))).map(date => ({
    date,
    items: ITINERARY.filter(item => item.date === date)
  }));

  return (
    <div className="min-h-screen bg-background text-[#1E1B4B] font-sans pb-32">
      {/* Header */}
      <header className="px-8 pt-16 pb-8 bg-surface/80 backdrop-blur-md sticky top-0 z-40 border-b border-[#EEF2FF]">
        <div className="max-w-3xl mx-auto flex flex-col items-start gap-1">
          <p className="text-[10px] font-bold text-brand uppercase tracking-[0.3em]">
            Tokyo Travel Navigator
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#0F172A]">
            도쿄 <span className="text-brand">여행기</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-10"
            >
              {/* Overview & Quick Navigation */}
              <section className="space-y-6">
                <div className="flex justify-between items-center px-2">
                  <h2 className="text-xl font-bold flex items-center gap-2 text-[#0F172A]">
                    <MapIcon className="w-6 h-6 text-brand" />
                    트립 오버뷰
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setActiveTab('itinerary')} 
                    className="flex flex-col items-start p-6 bg-surface rounded-[2.5rem] border border-[#EEF2FF] hover:border-brand/40 hover:bg-brand-light/30 transition-all group shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
                  >
                    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Calendar className="w-6 h-6 text-orange-600" />
                    </div>
                    <span className="text-base font-bold text-[#1E1B4B]">일정</span>
                    <span className="text-xs text-[#94A3B8] mt-1 font-medium">Full Itinerary</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('spots')}
                    className="flex flex-col items-start p-6 bg-surface rounded-[2.5rem] border border-[#EEF2FF] hover:border-brand/40 hover:bg-brand-light/30 transition-all group shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-base font-bold text-[#1E1B4B]">맛집/카페</span>
                    <span className="text-xs text-[#94A3B8] mt-1 font-medium">{TRAVEL_SPOTS.length} Spots</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('checklist')}
                    className="flex flex-col items-start p-6 bg-surface rounded-[2.5rem] border border-[#EEF2FF] hover:border-brand/40 hover:bg-brand-light/30 transition-all group shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
                  >
                    <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <ShoppingBag className="w-6 h-6 text-pink-600" />
                    </div>
                    <span className="text-base font-bold text-[#1E1B4B]">쇼핑</span>
                    <span className="text-xs text-[#94A3B8] mt-1 font-medium">{SHOPPING_CHECKLIST.length} Items</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('market')}
                    className="flex flex-col items-start p-6 bg-surface rounded-[2.5rem] border border-[#EEF2FF] hover:border-brand/40 hover:bg-brand-light/30 transition-all group shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Store className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-base font-bold text-[#1E1B4B]">마트/편의점</span>
                    <span className="text-xs text-[#94A3B8] mt-1 font-medium">Markets</span>
                  </button>
                </div>
              </section>

              {/* Accommodation Information */}
              <section className="bg-surface p-8 rounded-[2.5rem] border border-[#EEF2FF] shadow-[0_15px_50px_-12px_rgba(124,58,237,0.05)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-[#0F172A]">숙소 정보</h2>
                </div>
                <div className="bg-brand-light/40 p-6 rounded-[2rem] border border-brand-light">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-brand">신주쿠 워싱턴 호텔</h3>
                      <p className="text-xs text-[#94A3B8] font-bold mt-1 uppercase tracking-tight">Shinjuku Washington Hotel</p>
                    </div>
                    <a 
                      href="https://www.google.com/maps/place/Shinjuku+Washington+Hotel/@35.6860014,139.6912389,17z" 
                      target="_blank" 
                      rel="no-referrer"
                      className="p-3 bg-white rounded-2xl shadow-sm text-brand hover:scale-110 transition-all border border-brand-light"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-[13px] text-[#475569] leading-relaxed font-medium">
                    3-2-9 Nishi-Shinjuku, Shinjuku-ku, Tokyo 163-0023, Japan
                    <br />
                    <span className="text-brand font-bold">●</span> 신주쿠역 서쪽 출구에서 도보 약 8-10분 거리
                  </p>
                </div>
              </section>

              {/* Morning Running Section */}
              <section className="bg-surface p-8 rounded-[2.5rem] border border-[#EEF2FF] shadow-[0_15px_50px_-12px_rgba(124,58,237,0.05)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-green-50 rounded-xl text-green-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-[#0F172A]">아침 러닝 가이드</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-6 bg-white rounded-[2rem] border border-[#EEF2FF] flex justify-between items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-green-700 mb-2">신주쿠 중앙공원</h3>
                      <p className="text-xs text-[#475569] leading-relaxed font-medium">
                        호텔과 매우 인접(도보 2-3분)하여 가볍게 아침 공기를 마시며 달리기 좋습니다. 도심 속 녹지를 즐길 수 있는 가장 가까운 코스입니다.
                      </p>
                    </div>
                    <a 
                      href="https://www.google.com/maps/place/Shinjuku+Chuo+Park/@35.6894073,139.6898877,17z" 
                      target="_blank" 
                      rel="no-referrer"
                      className="p-3 bg-green-50 rounded-2xl text-green-600 hover:bg-green-100 transition-colors"
                    >
                      <MapIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </section>

              {/* Trip Prep */}
              <section className="bg-surface p-8 rounded-[2.5rem] border border-[#EEF2FF] shadow-[0_15px_50px_-12px_rgba(124,58,237,0.05)]">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2.5 bg-orange-50 rounded-xl text-orange-600">
                    <CheckSquare className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-[#0F172A]">준비사항</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {TASKS_BEFORE_TRIP.map((task, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-white border border-[#EEF2FF] rounded-[1.5rem] group hover:border-brand/30 transition-all">
                      <div className="w-6 h-6 bg-brand-light rounded-lg flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-brand" />
                      </div>
                      <span className="text-sm text-[#334155] font-bold">{task}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Quick Info (Customs) */}
              <section className="bg-brand p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-3xl"></div>
                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <AlertCircle className="w-6 h-6 text-[#fbbf24]" />
                  </div>
                  <h2 className="text-xl font-bold">세관신고 및 면세 한도</h2>
                </div>
                <div className="space-y-6 relative z-10">
                  <div className="space-y-3">
                    <p className="text-[10px] text-white/60 font-black uppercase tracking-[0.2em]">KOREA CUSTOMS</p>
                    <div className="bg-white/10 p-5 rounded-[1.5rem] border border-white/10 backdrop-blur-sm">
                      <p className="text-sm leading-relaxed font-medium">
                        미화 800달러(약 118만원)를 초과하는 물품은 세관 신고 대상입니다.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 pt-2">
                    <p className="text-[10px] text-white/60 font-black uppercase tracking-[0.2em]">DUTY FREE LIMITS</p>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { label: '면세 한도', val: '¥200,000' },
                        { label: '주류', val: '3병' },
                        { label: '담배', val: '200개비' },
                        { label: '향수', val: '2온스' }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center bg-white/5 px-5 py-4 rounded-[1.2rem] border border-white/5">
                          <span className="text-xs font-bold text-white/80">{item.label}</span>
                          <span className="text-sm font-black">{item.val}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[11px] text-[#fbbf24] font-bold text-center mt-4">
                      * 5,000엔 이상 결제 시 면세 혜택 가능
                    </p>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'itinerary' && (
            <motion.div
              key="itinerary"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="flex items-center gap-2 text-[11px] font-black text-brand bg-brand-light px-4 py-2 rounded-full w-fit hover:bg-brand-light/70 transition-colors uppercase tracking-widest"
              >
                <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                Back to Home
              </button>

              <div className="flex items-center gap-4 px-2">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-[#EEF2FF]">
                  <Calendar className="w-6 h-6 text-brand" />
                </div>
                <h2 className="text-3xl font-black tracking-tight text-[#0F172A]">여행 일정</h2>
              </div>

              <div className="space-y-12 relative before:absolute before:left-[1.25rem] before:top-20 before:bottom-10 before:w-[3px] before:bg-brand/10">
                {itineraryGrouped.map((group, idx) => (
                  <div key={idx} className="space-y-8 relative">
                    <div className="flex items-center gap-3 bg-brand text-white px-6 py-3.5 rounded-[1.5rem] shadow-[0_10px_25px_-5px_rgba(124,58,237,0.3)] w-fit sticky top-28 z-10 font-bold">
                      <Clock className="w-4 h-4" />
                      <h3 className="text-sm tracking-wide">
                        {(() => {
                          const match = group.date.match(/(\d{4})-(\d{2})-(\d{2})\s\((.+)\)/);
                          if (match) {
                            const [_, year, month, day, dayOfWeek] = match;
                            return `DAY ${idx + 1} - ${parseInt(month)}월 ${parseInt(day)}일 (${dayOfWeek})`;
                          }
                          return `DAY ${idx + 1} - ${group.date}`;
                        })()}
                      </h3>
                    </div>
                    <div className="space-y-6">
                      {group.items.map(item => (
                        <div key={item.id} className="relative pl-12 group">
                          {/* Modern Timeline Dot */}
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-brand ring-4 ring-brand-light group-hover:scale-125 transition-transform" />
                          </div>
                          
                          <div className="bg-surface p-6 rounded-[2rem] border border-[#EEF2FF] shadow-[0_8px_30px_rgb(0,0,0,0.02)] group-hover:shadow-md group-hover:border-brand/20 transition-all">
                            <div className="flex justify-between items-start mb-3">
                              <span className="text-[10px] font-black text-brand uppercase tracking-[0.2em] bg-brand-light px-2.5 py-1 rounded-lg leading-none">{item.time}</span>
                              {item.googleMapsUrl && (
                                <a 
                                  href={item.googleMapsUrl} 
                                  target="_blank" 
                                  rel="no-referrer" 
                                  className="p-3 bg-brand-light/50 rounded-2xl text-brand hover:bg-brand hover:text-white transition-all transform hover:rotate-12"
                                >
                                  <MapPin className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                            <h4 className="text-lg font-bold text-[#1E1B4B] leading-snug">{item.name}</h4>
                            {(item.location || item.note) && (
                              <div className="mt-4 flex flex-wrap gap-2">
                                {item.location && <span className="text-[10px] bg-[#EEF2FF] text-brand px-3 py-1.5 rounded-full font-bold uppercase tracking-tight">{item.location}</span>}
                                {item.note && <span className="text-xs bg-surface border border-brand-light text-[#64748B] px-3 py-1.5 rounded-full font-medium italic">"{item.note}"</span>}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'spots' && (
            <motion.div
              key="spots"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Top Navigation */}
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="flex items-center gap-2 text-sm text-[#78716c] hover:text-[#1c1917] transition-colors mb-4"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                홈으로 돌아가기
              </button>

              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a8a29e]" />
                  <input 
                    type="text" 
                    placeholder="맛집, 장소 검색..."
                    className="w-full pl-10 pr-4 py-3 bg-white border border-[#e7e5e4] rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-[#0c0a09]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-hide">
                  {regions.map(r => (
                    <button
                      key={r}
                      onClick={() => setSelectedRegion(r)}
                      className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition-colors ${
                        selectedRegion === r 
                          ? 'bg-[#0c0a09] text-white shadow-sm' 
                          : 'bg-white border border-[#e7e5e4] text-[#78716c] hover:border-[#d6d3d1]'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
                <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
                  {categories.map(c => (
                    <button
                      key={c}
                      onClick={() => setSelectedCategory(c)}
                      className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap border transition-all ${
                        selectedCategory === c 
                          ? 'bg-orange-600 text-white border-orange-600 shadow-sm' 
                          : 'bg-white border-[#e7e5e4] text-[#78716c] hover:border-orange-200'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {filteredSpots.length > 0 ? (
                  filteredSpots.map(spot => (
                    <motion.div 
                      layout
                      key={spot.id} 
                      className="group bg-surface overflow-hidden rounded-[2.5rem] border border-[#EEF2FF] hover:shadow-xl hover:border-brand/20 transition-all shadow-sm"
                    >
                      <div className="p-7">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-[10px] font-black text-brand bg-brand-light px-3 py-1 rounded-lg uppercase tracking-widest">
                                {spot.region}
                              </span>
                              <span className="text-[10px] font-black text-[#64748B] bg-[#F1F5F9] px-3 py-1 rounded-lg uppercase tracking-widest">
                                {spot.category}
                              </span>
                            </div>
                            <h3 className="text-xl font-black text-[#0F172A] mb-1">{spot.name}</h3>
                            <p className="text-xs text-brand font-bold uppercase tracking-tight">{spot.type}</p>
                          </div>
                          <a 
                            href={spot.googleMapsUrl} 
                            target="_blank" 
                            rel="no-referrer"
                            className="p-4 bg-brand rounded-2xl shadow-lg shadow-brand/20 text-white hover:scale-110 transition-all"
                          >
                            <MapPin className="w-5 h-5" />
                          </a>
                        </div>
                        <p className="text-sm text-[#475569] leading-relaxed font-medium line-clamp-3 mb-6 bg-background/50 p-4 rounded-2xl">
                          {spot.description}
                        </p>
                        <div className="flex justify-between items-center text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.2em]">
                          <a href={spot.googleMapsUrl} target="_blank" rel="no-referrer" className="hover:text-brand flex items-center gap-1.5 transition-colors">
                            Explore on Maps <ExternalLink className="w-3 h-3" />
                          </a>
                          <div className="flex items-center gap-1 group-hover:text-brand transition-colors">
                            View Details <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-24 bg-surface rounded-[3rem] border border-dashed border-[#CBD5E1]">
                    <div className="w-16 h-16 bg-[#F1F5F9] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-[#94A3B8]" />
                    </div>
                    <p className="text-sm text-[#64748B] font-bold">검색 결과가 없습니다.</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === 'checklist' && (
            <motion.div
              key="checklist"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="space-y-6"
            >
              {/* Back Button */}
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="flex items-center gap-2 text-sm text-[#78716c] hover:text-[#1c1917] transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                홈으로 돌아가기
              </button>

              <div className="bg-surface p-10 rounded-[3rem] border border-[#EEF2FF] shadow-[0_20px_60px_-15px_rgba(124,58,237,0.1)]">
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-3 bg-pink-50 rounded-2xl text-[#ec4899]">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-black tracking-tight text-[#0F172A]">쇼핑 리스트</h2>
                </div>
                <div className="space-y-5">
                  {shoppingItems.filter((item: any) => !item.tags.some((t: string) => t.includes('편의점'))).map((item: any, i: number) => {
                    const originalIdx = shoppingItems.findIndex((si: any) => si.item === item.item);
                    return (
                      <div 
                        key={originalIdx} 
                        className={`relative flex flex-col p-6 rounded-[2rem] transition-all group ${
                          item.checked 
                            ? 'bg-background opacity-40 grayscale' 
                            : 'bg-white border border-[#EEF2FF] hover:border-brand/30 hover:shadow-[0_10px_30px_rgba(124,58,237,0.05)] shadow-sm'
                        }`}
                      >
                      <label className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-5">
                          <div className="relative">
                            <input 
                              type="checkbox" 
                              checked={item.checked}
                              onChange={() => toggleShoppingItem(originalIdx)}
                              className="w-7 h-7 rounded-full border-2 border-brand-light text-brand focus:ring-0 checked:bg-brand checked:border-brand transition-all cursor-pointer"
                            />
                            {item.checked && <CheckCircle2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />}
                          </div>
                          <span className={`text-base font-bold transition-all ${item.checked ? 'line-through text-[#94A3B8]' : 'text-[#1E1B4B] group-hover:text-brand'}`}>
                            {item.item}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          {item.tags.map((tag: string) => (
                            <span key={tag} className="text-[10px] px-3 py-1.5 bg-[#EEF2FF] text-brand rounded-full font-black uppercase tracking-tight">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </label>
                    </div>
                  );
                })}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'market' && (
            <motion.div
              key="market"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="space-y-12"
            >
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="flex items-center gap-2 text-[11px] font-black text-brand bg-brand-light px-4 py-2 rounded-full w-fit hover:bg-brand-light/70 transition-colors uppercase tracking-widest"
              >
                <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                Back to Home
              </button>

              {/* Markets Section */}
              <section className="space-y-8">
                <div className="flex items-center gap-4 px-2">
                  <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 shadow-sm border border-blue-100">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-black tracking-tight text-[#0F172A]">마트 위치</h2>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {TRAVEL_SPOTS.filter(s => s.category === '아침/마트').map(spot => (
                    <div key={spot.id} className="bg-surface p-6 rounded-[2.5rem] border border-[#EEF2FF] shadow-sm hover:shadow-md transition-all">
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-black text-[#1E1B4B]">{spot.name}</h3>
                            <p className="text-[10px] font-black text-brand uppercase tracking-widest mt-1">{spot.type}</p>
                          </div>
                          <a href={spot.googleMapsUrl} target="_blank" rel="no-referrer" className="p-3.5 bg-brand-light rounded-2xl text-brand hover:bg-brand hover:text-white transition-all transform hover:rotate-12">
                            <MapPin className="w-4 h-4" />
                          </a>
                        </div>
                        <p className="text-sm text-[#475569] leading-relaxed font-medium bg-background/50 p-4 rounded-2xl">{spot.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Convenience Store Items Section */}
              <section className="space-y-8">
                <div className="flex items-center gap-4 px-2">
                  <div className="p-3 bg-pink-50 rounded-2xl text-[#ec4899] shadow-sm border border-pink-100">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-black tracking-tight text-[#0F172A]">편의점 추천</h2>
                </div>
                <div className="bg-surface p-8 rounded-[3rem] border border-[#EEF2FF] shadow-sm space-y-5">
                  {shoppingItems.filter((i: any) => i.tags.some((t: string) => t.includes('편의점'))).map((item: any) => {
                    const originalIdx = shoppingItems.findIndex((si: any) => si.item === item.item);
                    return (
                      <div 
                        key={item.item} 
                        className={`flex flex-col p-6 rounded-[2rem] transition-all group ${
                          item.checked 
                            ? 'bg-background opacity-40 grayscale' 
                            : 'bg-white border border-[#EEF2FF] hover:border-brand/30 hover:shadow-sm'
                        }`}
                      >
                        <label className="flex items-center justify-between cursor-pointer">
                          <div className="flex items-center gap-5">
                            <div className="relative">
                              <input 
                                type="checkbox" 
                                checked={item.checked}
                                onChange={() => toggleShoppingItem(originalIdx)}
                                className="w-7 h-7 rounded-full border-2 border-brand-light text-brand focus:ring-0 checked:bg-brand checked:border-brand transition-all cursor-pointer"
                              />
                              {item.checked && <CheckCircle2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />}
                            </div>
                            <span className={`text-base font-bold transition-all ${item.checked ? 'line-through text-[#94A3B8]' : 'text-[#1E1B4B] group-hover:text-brand'}`}>
                              {item.item}
                            </span>
                          </div>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/80 backdrop-blur-2xl border border-white/50 px-8 py-4 z-50 rounded-[2.5rem] shadow-[0_20px_50px_rgba(124,58,237,0.15)]">
        <div className="flex justify-between items-center">
          <NavItem 
            id="dashboard" 
            label="홈" 
            icon={<MapIcon className="w-6 h-6" />} 
            activeId={activeTab} 
            onClick={() => setActiveTab('dashboard')} 
          />
          <NavItem 
            id="itinerary" 
            label="일정" 
            icon={<Calendar className="w-6 h-6" />} 
            activeId={activeTab} 
            onClick={() => setActiveTab('itinerary')} 
          />
          <NavItem 
            id="spots" 
            label="맛집/카페" 
            icon={<MapPin className="w-6 h-6" />} 
            activeId={activeTab} 
            onClick={() => setActiveTab('spots')} 
          />
          <NavItem 
            id="checklist" 
            label="쇼핑" 
            icon={<ShoppingBag className="w-6 h-6" />} 
            activeId={activeTab} 
            onClick={() => setActiveTab('checklist')} 
          />
          <NavItem 
            id="market" 
            label="마트" 
            icon={<Store className="w-6 h-6" />} 
            activeId={activeTab} 
            onClick={() => setActiveTab('market')} 
          />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ 
  id, 
  label, 
  icon, 
  activeId, 
  onClick 
}: { 
  id: Tab, 
  label: string, 
  icon: React.ReactNode, 
  activeId: Tab, 
  onClick: () => void 
}) {
  const isActive = id === activeId;
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 transition-all outline-none ${
        isActive ? 'text-brand' : 'text-[#94A3B8] hover:text-brand/70'
      }`}
    >
      <div className={`p-2 rounded-2xl transition-all ${isActive ? 'bg-brand-light scale-110' : 'bg-transparent'}`}>
        {icon}
      </div>
      <span className="text-[9px] font-black tracking-widest uppercase">{label}</span>
    </button>
  );
}
