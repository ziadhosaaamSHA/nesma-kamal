export interface PodcastEpisodeItem {
  id: string;
  episodeNumber: number;
  theme: "primary" | "secondary" | "tertiary";
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  durationEn: string;
  durationAr: string;
  dateEn: string;
  dateAr: string;
  spotifyUrl?: string;
  appleUrl?: string;
  youtubeUrl?: string;
}
