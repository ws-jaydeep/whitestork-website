"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomVideoPlayerProps {
  src: string;
  poster?: string;
  isPreNextVideo?: boolean;
  onPreviousVideo?: () => void;
  onNextVideo?: () => void;
  className?: string;
}

const playbackRates = [1, 1.25, 1.5, 2];

const formatTime = (time: number) => {
  if (!Number.isFinite(time) || time < 0) {
    return "0:00";
  }

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export function CustomVideoPlayer({
  src,
  isPreNextVideo = false,
  onPreviousVideo,
  onNextVideo,
  className,
}: CustomVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasEnteredViewportRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.volume = volume;
    video.muted = isMuted;
    video.playbackRate = playbackRate;

    const syncState = () => {
      setCurrentTime(video.currentTime);
      setDuration(video.duration || 0);
      setIsPlaying(!video.paused && !video.ended);
      setIsMuted(video.muted);
      setVolume(video.muted ? 0 : video.volume);
    };

    const syncFullscreen = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    syncState();

    video.addEventListener("loadedmetadata", syncState);
    video.addEventListener("timeupdate", syncState);
    video.addEventListener("play", syncState);
    video.addEventListener("pause", syncState);
    video.addEventListener("ended", syncState);
    video.addEventListener("volumechange", syncState);
    document.addEventListener("fullscreenchange", syncFullscreen);

    return () => {
      video.removeEventListener("loadedmetadata", syncState);
      video.removeEventListener("timeupdate", syncState);
      video.removeEventListener("play", syncState);
      video.removeEventListener("pause", syncState);
      video.removeEventListener("ended", syncState);
      video.removeEventListener("volumechange", syncState);
      document.removeEventListener("fullscreenchange", syncFullscreen);
    };
  }, [isMuted, playbackRate, volume, src]);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const playWhenVisible = async () => {
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasEnteredViewportRef.current) {
            hasEnteredViewportRef.current = true;
            video.currentTime = 0;
          }

          void playWhenVisible();
          return;
        }

        video.pause();
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  const togglePlayback = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    video.pause();
  };

  const handleSeek = (nextTime: number) => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handleVolumeChange = (nextVolume: number) => {
    const video = videoRef.current;

    if (!video) return;

    video.volume = nextVolume;
    video.muted = nextVolume === 0;
    setVolume(nextVolume);
    setIsMuted(nextVolume === 0);
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;

    if (!nextMuted && video.volume === 0) {
      video.volume = 0.7;
      setVolume(0.7);
    }

    setIsMuted(nextMuted);
  };

  const cyclePlaybackRate = () => {
    const video = videoRef.current;

    if (!video) return;

    const currentIndex = playbackRates.indexOf(playbackRate);
    const nextRate = playbackRates[(currentIndex + 1) % playbackRates.length];

    video.playbackRate = nextRate;
    setPlaybackRate(nextRate);
  };

  const toggleFullscreen = async () => {
    const container = containerRef.current;

    if (!container) return;

    if (!document.fullscreenElement) {
      await container.requestFullscreen?.();
      return;
    }

    await document.exitFullscreen?.();
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const volumePercent = Math.max((isMuted ? 0 : volume) * 100, 0);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative overflow-hidden rounded-[30px] border border-[rgba(255,255,255,0.18)] bg-transparent shadow-[0_28px_72px_rgba(10,22,42,0.18)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(116,175,237,0.18),transparent_66%)] sm:h-32" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-[linear-gradient(180deg,rgba(9,19,37,0)_0%,rgba(9,19,37,0.14)_24%,rgba(9,19,37,0.82)_100%)] sm:h-40" />

      <video
        ref={videoRef}
        className="aspect-[1/1] w-full object-cover sm:aspect-[16/10]"
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        onClick={togglePlayback}
      />

      {isPreNextVideo ? (
        <div className="absolute right-3 top-3 z-20 flex items-center gap-2 sm:right-4 sm:top-4">
          <button
            type="button"
            onClick={onPreviousVideo}
            disabled={!onPreviousVideo}
            className="flex size-10 items-center justify-center rounded-full border border-white/35 bg-[rgba(12,16,27,0.72)] text-white shadow-[0_12px_30px_rgba(19,87,178,0.28)] transition duration-300 hover:scale-105 hover:border-white/55 hover:shadow-[0_16px_36px_rgba(19,87,178,0.36)] disabled:cursor-not-allowed disabled:opacity-50 sm:size-12"
            aria-label="Show previous video"
          >
            <ChevronLeft className="size-4 sm:size-5" />
          </button>

          <button
            type="button"
            onClick={onNextVideo}
            disabled={!onNextVideo}
            className="flex size-10 items-center justify-center rounded-full border border-white/35 bg-[rgba(12,16,27,0.72)] text-white shadow-[0_12px_30px_rgba(19,87,178,0.28)] transition duration-300 hover:scale-105 hover:border-white/55 hover:shadow-[0_16px_36px_rgba(19,87,178,0.36)] disabled:cursor-not-allowed disabled:opacity-50 sm:size-12"
            aria-label="Show next video"
          >
            <ChevronRight className="size-4 sm:size-5" />
          </button>
        </div>
      ) : null}

      <div className="absolute bottom-2 left-1/2 z-20 w-[calc(100%-1rem)] max-w-[44rem] -translate-x-1/2 rounded-[20px] border border-white/18 bg-[rgba(12,16,27,0.72)] px-2.5 py-2 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_40px_rgba(6,10,22,0.34)] backdrop-blur-xl transition duration-300 sm:bottom-0 sm:w-[calc(100%-2rem)] sm:rounded-[24px] sm:px-4 sm:py-2.5 md:w-[84%] md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100">
        <div className="flex items-center gap-2 text-xs text-white/88 sm:gap-3 sm:text-sm">
          <span className="w-8 text-left tabular-nums sm:w-10">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={(event) => handleSeek(Number(event.target.value))}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-white"
            style={{
              background: `linear-gradient(90deg, var(--brand-soft) 0%, var(--brand-base) ${progressPercent}%, rgba(255,255,255,0.18) ${progressPercent}%, rgba(255,255,255,0.18) 100%)`,
            }}
            aria-label="Seek video"
          />
          <span className="w-8 text-right tabular-nums sm:w-10">
            {formatTime(duration)}
          </span>
        </div>

        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={togglePlayback}
              className="flex size-8 items-center justify-center rounded-full bg-[rgba(18,34,61,0.92)] text-white transition duration-300 hover:scale-105 hover:bg-[rgba(29,54,92,0.96)] sm:size-9"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="size-3.5 sm:size-4" />
              ) : (
                <Play className="ml-0.5 size-3.5 sm:size-4" />
              )}
            </button>

            <button
              type="button"
              onClick={toggleMute}
              className="flex size-8 items-center justify-center rounded-full bg-[rgba(18,34,61,0.7)] text-white/85 transition duration-300 hover:scale-105 hover:bg-[rgba(29,54,92,0.92)] sm:size-9"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="size-3.5 sm:size-4" />
              ) : (
                <Volume2 className="size-3.5 sm:size-4" />
              )}
            </button>

            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={isMuted ? 0 : volume}
              onChange={(event) => handleVolumeChange(Number(event.target.value))}
              className="hidden h-1.5 w-20 cursor-pointer appearance-none rounded-full bg-white/15 accent-[var(--brand-base)] sm:block"
              style={{
                background: `linear-gradient(90deg, var(--brand-soft) 0%, var(--brand-base) ${volumePercent}%, rgba(255,255,255,0.16) ${volumePercent}%, rgba(255,255,255,0.16) 100%)`,
              }}
              aria-label="Adjust volume"
            />
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={cyclePlaybackRate}
              className="rounded-full bg-[rgba(18,34,61,0.7)] px-2.5 py-1.5 text-xs font-semibold text-white/88 transition duration-300 hover:bg-[rgba(29,54,92,0.92)] sm:px-3 sm:text-sm"
              aria-label="Change playback speed"
            >
              {playbackRate}x
            </button>

            <button
              type="button"
              onClick={toggleFullscreen}
              className="flex size-8 items-center justify-center rounded-full bg-[rgba(18,34,61,0.7)] text-white/88 transition duration-300 hover:scale-105 hover:bg-[rgba(29,54,92,0.92)] sm:size-9"
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              <Expand className="size-3.5 sm:size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
