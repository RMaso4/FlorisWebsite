// src/app/lib/NewsData.ts
export interface NewsItem {
    id: number;
    title: string;
    date: string;
    excerpt: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    count: number;
  }
  
  export const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Belangrijke wijzigingen in de belastingwetgeving 2024",
      date: "1 februari 2024",
      excerpt: "Een overzicht van de belangrijkste wijzigingen in de belastingwetgeving die in 2024 van kracht zijn geworden.",
    },
    {
      id: 2,
      title: "Nieuwe regels voor zzp'ers: dit moet u weten",
      date: "15 januari 2024",
      excerpt: "De overheid heeft nieuwe regels aangekondigd voor zzp'ers. Lees hier wat dit voor u betekent.",
    },
    {
      id: 3,
      title: "Tips voor een efficiënte bedrijfsadministratie",
      date: "1 januari 2024",
      excerpt: "Praktische tips om uw bedrijfsadministratie te optimaliseren en tijd te besparen.",
    },
  ];
  
  export const categories: Category[] = [
    { id: "belastingen", name: "Belastingen", count: 12 },
    { id: "administratie", name: "Administratie", count: 8 },
    { id: "ondernemers", name: "Ondernemers", count: 15 },
    { id: "zzp", name: "ZZP", count: 6 },
    { id: "agrarisch", name: "Agrarische sector", count: 4 },
  ];