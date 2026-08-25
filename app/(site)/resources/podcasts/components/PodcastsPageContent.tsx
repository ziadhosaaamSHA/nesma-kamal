"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MicrophoneStage,
  Play,
  Clock,
  CalendarBlank,
  SpotifyLogo,
  ApplePodcastsLogo,
  YoutubeLogo,
  Headphones,
} from "@phosphor-icons/react";
import { useLanguage } from "@/context/LanguageContext";
import Section from "@/components/ui/Section";
import Headings from "@/components/ui/Headings";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { podcastEpisodeItems } from "./podcasts.data";
import { cn } from "@/components/ui/utils";

const THEME_CLASSES = {
  primary: {
    cardBg: "bg-moss-200 text-moss-950",
    badge: "bg-moss-300 text-moss-900",
    pillBg: "bg-moss-400 text-white",
    playBtn: "bg-moss-400 hover:bg-moss-500 text-white",
    btnVariant: "primary" as const,
    accent: "text-moss-800",
  },
  secondary: {
    cardBg: "bg-burgundy-200 text-burgundy-950",
    badge: "bg-burgundy-300 text-burgundy-900",
    pillBg: "bg-burgundy-600 text-white",
    playBtn: "bg-burgundy-600 hover:bg-burgundy-700 text-white",
    btnVariant: "secondary" as const,
    accent: "text-burgundy-800",
  },
  tertiary: {
    cardBg: "bg-navy-200 text-navy-950",
    badge: "bg-navy-300 text-navy-900",
    pillBg: "bg-navy-600 text-white",
    playBtn: "bg-navy-600 hover:bg-navy-700 text-white",
    btnVariant: "navy" as const,
    accent: "text-navy-800",
  },
};

export default function PodcastsPageContent() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  const content = {
    en: {
      heading: "Conversations on <span class='text-moss-700'>Healing & Growth</span>",
      subtitle:
        "Join Nesma Kamal in transformative audio dialogues exploring clinical psychology, emotional agility, relationship dynamics, and mindful living.",
      episode: "Episode",
      listenOn: "Listen On",
      spotify: "Spotify",
      apple: "Apple Podcasts",
      youtube: "YouTube",
    },
    ar: {
      heading: "حوارات في <span class='text-moss-700'>التعافي والنمو النفسي</span>",
      subtitle:
        "استمع إلى حوارات وتحليلات د. نسمة كمال حول علم النفس الإكلينيكي، المرونة العاطفية، تفكيك العلاقات المستنزفة، والعيش بوعي وسكينة.",
      episode: "الحلقة",
      listenOn: "استمع عبر",
      spotify: "سبوتيفاي",
      apple: "آبل بودكاست",
      youtube: "يوتيوب",
    },
  };

  const t = content[lang] || content.en;

  return (
    <div className="relative py-12 md:py-20">
      <Container size="content">
        {/* Header */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-moss-200 text-moss-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Headphones size={16} className="text-moss-700" />
            <span>{isAr ? "البودكاست الصوتي" : "Audio Podcast Series"}</span>
          </div>

          <Headings
            variant="h1"
            align="center"
            color="brand"
            lang={lang}
          >
            <span dangerouslySetInnerHTML={{ __html: t.heading }} />
          </Headings>

          <p className="body-copy leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Podcast Episode Cards Stream */}
        <div className="space-y-6 sm:space-y-8">
          {podcastEpisodeItems.map((episode, index) => {
            const theme = THEME_CLASSES[episode.theme];
            const title = isAr ? episode.titleAr : episode.titleEn;
            const desc = isAr ? episode.descriptionAr : episode.descriptionEn;
            const duration = isAr ? episode.durationAr : episode.durationEn;
            const date = isAr ? episode.dateAr : episode.dateEn;

            return (
              <motion.article
                key={episode.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 shadow-lg transition-all duration-300 hover:shadow-2xl",
                  theme.cardBg
                )}
              >
                {/* Left/Main Column: Episode Info */}
                <div className="flex-1 space-y-4">
                  {/* Meta Tags Row */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={cn(
                        "text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider",
                        theme.badge
                      )}
                    >
                      {t.episode} {episode.episodeNumber}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs opacity-75">
                      <CalendarBlank size={14} />
                      <span>{date}</span>
                    </div>

                    <span className="opacity-30">•</span>

                    <div className="flex items-center gap-1.5 text-xs opacity-75">
                      <Clock size={14} />
                      <span>{duration}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm opacity-85 leading-relaxed max-w-3xl">
                    {desc}
                  </p>

                  {/* Streaming Service Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-2">
                    <span className="text-xs font-bold opacity-60 mr-1">
                      {t.listenOn}:
                    </span>

                    {episode.spotifyUrl && (
                      <a
                        href={episode.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 hover:bg-white text-xs font-semibold text-gray-900 transition-colors shadow-xs"
                      >
                        <SpotifyLogo size={16} weight="fill" className="text-green-600" />
                        <span>{t.spotify}</span>
                      </a>
                    )}

                    {episode.appleUrl && (
                      <a
                        href={episode.appleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 hover:bg-white text-xs font-semibold text-gray-900 transition-colors shadow-xs"
                      >
                        <ApplePodcastsLogo size={16} weight="fill" className="text-purple-600" />
                        <span>{t.apple}</span>
                      </a>
                    )}

                    {episode.youtubeUrl && (
                      <a
                        href={episode.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 hover:bg-white text-xs font-semibold text-gray-900 transition-colors shadow-xs"
                      >
                        <YoutubeLogo size={16} weight="fill" className="text-red-600" />
                        <span>{t.youtube}</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Action Column: Direct Play / Launch CTA */}
                <div className="w-full md:w-auto flex md:flex-col items-center justify-end shrink-0 pt-2 md:pt-0">
                  <a
                    href={episode.spotifyUrl || episode.appleUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto"
                  >
                    <Button
                      variant={theme.btnVariant}
                      size="md"
                      className="w-full md:w-auto flex items-center justify-center gap-2.5 px-6 py-3 shadow-md hover:shadow-lg"
                    >
                      <Play size={18} weight="fill" />
                      <span>{isAr ? "استمع للحلقة" : "Play Episode"}</span>
                    </Button>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
