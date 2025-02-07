"use client";

import { useState, useEffect } from 'react';

interface NewsArticle {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

interface NewsResponse {
  totalArticles: number;
  articles: NewsArticle[];
  errors?: string[];
}

export default function NewsSection() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/news');
        const data: NewsResponse = await response.json();

        if (!response.ok) {
          throw new Error(data.errors?.[0] || 'Failed to fetch news');
        }
        
        if (data.articles && Array.isArray(data.articles)) {
          setArticles(data.articles);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        console.error('Error fetching news:', err);
        setError(err instanceof Error ? err.message : 'Er is een fout opgetreden bij het laden van het nieuws');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
    
    // Refresh news every 30 minutes
    const interval = setInterval(fetchNews, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <p className="text-red-800 text-center">{error}</p>
        <p className="text-red-600 text-sm text-center mt-2">
          Probeer het later opnieuw of neem contact met ons op.
        </p>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center text-gray-600 py-8">
        Er zijn momenteel geen nieuwsartikelen beschikbaar.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          {article.image && (
            <div className="relative h-48 w-full">
              <img
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <span>{article.source.name}</span>
              <span className="mx-2">•</span>
              <span>
                {new Date(article.publishedAt).toLocaleDateString('nl-NL', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {article.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {article.description}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              Lees meer
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}