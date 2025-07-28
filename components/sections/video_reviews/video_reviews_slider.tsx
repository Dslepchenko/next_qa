"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect } from "react";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Функция для извлечения ID видео из YouTube URL
function getYouTubeVideoId(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : "";
}

// Функция для получения thumbnail YouTube видео
function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

const videoData = [
  {
    id: 1,
    title: "סיפור הצלחה - מרים כהן",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "איך השתלבתי בעבודה חדשה תוך 3 חודשים",
  },
  {
    id: 2,
    title: "מחשב שכר - דוד לוי",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "מעבודה פיזית לקריירה במשרד",
  },
  {
    id: 3,
    title: "הכשרה מקצועית - שרה אברהם",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "התחלה חדשה בגיל 40",
  },
  {
    id: 4,
    title: "הצלחה בעסקים - יוסי זוהר",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description: "פתיחת עסק עצמאי אחרי הקורס",
  },
];

export function VideoSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="w-full mx-auto px-4 ">
      <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-8 items-center justify-center gap-6 relative">
        {/* Основной слайдер */}
        <div className="relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[340px]">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {videoData.map((video, index) => {
                const videoId = getYouTubeVideoId(video.youtubeUrl);
                return (
                  <CarouselItem key={video.id}>
                    <div className="relative bg-black overflow-hidden w-[280px] h-[500px] sm:w-[320px] sm:h-[580px] lg:w-[340px] lg:h-[645px] mx-auto">
                      {/* YouTube iframe */}
                      <iframe
                        className="w-full h-full "
                        src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&modestbranding=1`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />

                      {/* Overlay с информацией */}
                      <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 to-transparent p-3 rounded-lg">
                        <h3 className="text-white text-sm font-bold mb-1">
                          {video.title}
                        </h3>
                        <p className="text-gray-200 text-xs">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Навигация и пагинация */}
        <div className="flex flex-row lg:flex-col items-center gap-4 lg:min-w-[120px] w-full lg:w-auto justify-center">
          {/* Стрелка влево/вверх */}
          <button
            onClick={scrollPrev}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors text-black hover:text-primary z-10 flex-shrink-0"
          >
            <ChevronRight className="lg:hidden" size={25} strokeWidth={3} />
            <ChevronUp className="hidden lg:block" size={40} strokeWidth={3} />
          </button>

          {/* Пагинация между стрелками */}
          <div className="flex flex-row lg:flex-col gap-3 lg:gap-3  lg:pb-0 px-2 lg:px-0">
            {videoData.map((video, index) => {
              const videoId = getYouTubeVideoId(video.youtubeUrl);
              const isActive = current === index;

              return (
                <button
                  key={video.id}
                  onClick={() => scrollTo(index)}
                  className={`flex-shrink-0 relative overflow-hidden transition-all duration-300 
                    w-[20px] h-[20px] lg:w-[75px] lg:h-[144px]
                    ${
                      isActive
                        ? "border-3 border-primary scale-105"
                        : "border-2 border-gray-300 hover:border-gray-400 hover:scale-102"
                    }`}
                >
                  {/* Мобильная версия - черный квадрат */}
                  <div className="lg:hidden w-full h-full bg-black " />

                  {/* Десктопная версия - превью */}
                  <div className="hidden lg:block w-full h-full">
                    <Image
                      src={getYouTubeThumbnail(videoId)}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />

                    {/* Play icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-5 h-5 bg-white/95 rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="black"
                        >
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </div>
                    </div>

                    {/* Активный индикатор на десктопе */}
                    {isActive && (
                      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-lg animate-pulse" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Стрелка вправо/вниз */}
          <button
            onClick={scrollNext}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors text-black hover:text-primary z-10 flex-shrink-0"
          >
            <ChevronLeft className="lg:hidden" size={25} strokeWidth={3} />
            <ChevronDown
              className="hidden lg:block"
              size={40}
              strokeWidth={3}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
