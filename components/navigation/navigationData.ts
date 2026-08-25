import type { NavigationItem } from "@/app/types/navigation";

export const navigationItems: NavigationItem[] = [
  { label: "About", labelAr: "عن نسمة", href: "/about" },
  {
    label: "Services",
    labelAr: "الخدمات",
    dropdown: [
      { name: "Live Workshops", nameAr: "ورش عمل مباشرة", href: "/services/workshops" },
      { name: "1:1 Consultation", nameAr: "استشارة فردية", href: "/services/consultation" },
      { name: "Recorded Courses", nameAr: "دورات مسجلة", href: "/services/courses" },
    ],
  },
  { label: "Gallery", labelAr: "المعرض", href: "/gallery" },
  { label: "Testimonials", labelAr: "آراء العملاء", href: "/testimonials" },
  {
    label: "Resources",
    labelAr: "المصادر",
    dropdown: [
      { name: "Podcasts", nameAr: "بودكاست", href: "/resources/podcasts" },
      { name: "Videos", nameAr: "فيديوهات", href: "/resources/videos" },
      { name: "Blog", nameAr: "المدونة", href: "/resources/blog" },
      { name: "Assessments", nameAr: "اختبارات", href: "/resources/assessments" },
    ],
  },
  { label: "Connect", labelAr: "تواصل", href: "/contact" },
];
