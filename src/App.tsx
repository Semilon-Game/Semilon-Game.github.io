import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const games = [
  {
    title: "Cosmic Clash",
    image: "https://images.unsplash.com/photo-1614932257675-ea8c7c8d338d?auto=format&fit=crop&q=80&w=1920"
  },
  {
    title: "Neon Riders",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1920"
  },
  {
    title: "Cyber Warriors",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Logo Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="w-64 mx-auto mb-12">
          <img 
            src="/logo.png" 
            alt="Semilon Games" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Game Slider */}
      <div className="relative h-[70vh]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full"
        >
          {games.map((game, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h2 className="text-4xl font-bold text-white">{game.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default App;