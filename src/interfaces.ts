export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  providerData: ProviderData[];
};

export interface SavedNews {
  userId: string;
  savedArticles: string[];
};

export interface ProviderData {
  providerId: string;
  uid: string;
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
};

export interface NewsArticleSource{
  id: string | null;
  name: string;
};

export interface NewsArticle{
  source: NewsArticleSource;
  author: string | null;
  title: string;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export interface Source{
  id: string | null;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
};
