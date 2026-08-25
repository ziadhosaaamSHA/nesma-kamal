export interface NavigationSubItem {
  name: string;
  nameAr: string;
  href: string;
}

export interface NavigationItem {
  label: string;
  labelAr: string;
  href?: string;
  dropdown?: NavigationSubItem[];
}

