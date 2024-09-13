import { NewsArticle, NewsArticleSource, SavedNews, User } from "./interfaces";
import { Source } from "./interfaces";

export const user: User = {
  uid: "123456",
  email: "user@example.com",
  displayName: "John Doe",
  photoURL: "https://example.com/photo.jpg",
  emailVerified: true,
  phoneNumber: null,
  providerData: []
};

export const sources: Source[] = [
  {
    id: "bbc-news",
    name: "BBC News",
    description: "Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.",
    url: "https://www.bbc.co.uk/news",
    category: "general",
    language: "en",
    country: "gb"
  }, {
    id: "wired",
    name: "Wired",
    description: "Wired reports on how emerging technologies affect culture, the economy and politics.",
    url: "https://www.wired.de",
    category: "technology",
    language: "de",
    country: "de"
  }, {
    id: "google-news",
    name: "Google News",
    description: "Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News.",
    url: "https://news.google.com",
    category: "general",
    language: "en",
    country: "us"
  }, {
    id: "nbc-news",
    name: "NBC News",
    description: "Breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture.",
    url: "http://www.nbcnews.com",
    category: "general",
    language: "en",
    country: "us"
  }, {
    id: "new-scientist",
    name: "New Scientist",
    description: "Breaking science and technology news from around the world. Exclusive stories and expert analysis on space, technology, health, physics, life and Earth.",
    url: "https://www.newscientist.com/section/news",
    category: "science",
    language: "en",
    country: "us"
  } , {
    id: "fox-news",
    name: "Fox News",
    description: "Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.",
    url: "http://www.foxnews.com",
    category: "general",
    language: "en",
    country: "us"
  }
];

export const newsArticleSource: NewsArticleSource[] = [
  {
    id: "bbc-news",
    name: "BBC News"
  }, {
    id: "wired",
    name: "Wired"
  }, {
    id: "google-news",
    name: "Google News"
  }, {
    id: "nbc-news",
    name: "NBC News"
  }, {
    id: "new-scientist",
    name: "New Scientist"
  } , {
    id: "fox-news",
    name: "Fox News"
  }
];

export const newsArticles: NewsArticle[] = [
  {
    source: {
      id: "wired",
      name: "Wired"
    },
    author: "Joel Khalili",
    title: "The World’s Biggest Bitcoin Mine Is Rattling This Texas Oil Town",
    description: "A cash-strapped city in rural Texas will soon be home to the world’s largest bitcoin mine. Local protesters are “raising hell.”",
    url: "https://www.wired.com/story/the-worlds-biggest-bitcoin-mine-is-rattling-this-texas-oil-town/",
    urlToImage: "https://media.wired.com/photos/66c5ecc5724cee849e3104da/191:100/w_1280,c_limit/WIRED_BTC_EC_B-Elena-Chudoba.jpg",
    publishedAt: "2024-09-11T10:00:00Z",
    content: "The previous October, Sawicky organized a weeklong protest alongside environmental activist group Greenpeace and brandished various anti-bitcoin signs at anyone who entered the Riot facility. Only a … [+3641 chars]"
  }, {
    source: {
      id: null,
      name: "BBC News"
    },
    author: null,
    title: "Ohio dad tells Trump to stop using son's death for 'political gain' - BBC.com",
    description: "Governor Mike DeWine defended Haitians in the town of Springfield as people who 'work very, very hard'",
    url: "https://www.bbc.com/news/articles/cj35kk42k5vo",
    urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/7b7c/live/24e98950-7089-11ef-b34b-d51c0d1b0fff.jpg",
    publishedAt: "2024-09-12T11:35:40Z",
    content: "Leaders in the US state of Ohio are trying to douse baseless rumours that Haitian immigrants in a town there have been eating residents' pets as food.\r\nThe allegations have percolated up through righ… [+5119 chars]"
  }, {
    source: {
      id: "google-news",
      name: "Google News"
    },
    author: "The Guardian US",
    title: "Swing state voters respond to the presidential debate: ‘Trump couldn’t even look at her!’ - The Guardian US",
    description: null,
    url: "https://news.google.com/rss/articles/CBMiigFBVV95cUxORlNIZTA2RVBZeE96b0Y2eFhoNUVsWUw0dk83cGE0bW1EVmdUZkItMGFjeVlTZmZ1UjdSMVNmeDFPTExZZWl2bXZfX1A4TEpENzBIdzVnNGVjVzd5UlVWcm96enAtaVhxRGJ5Qnh2ZTZZbmZJS2tYZjkwc0JURWNybFlfMmNUUjBrSGc?oc=5",
    urlToImage: null,
    publishedAt: "2024-09-12T15:26:00+00:00",
    content: null
  }, {
    source: {
      id: "google-news",
      name: "Google News"
    },
    author: "CBS News",
    title: "Alberto Gonzales, Bush's attorney general, endorses Kamala Harris, warning of Donald Trump's \"threat to the rule of law\" - CBS News",
    description: null,
    url: "https://news.google.com/rss/articles/CBMifEFVX3lxTFBVWTBhazNINGtQQXJ5SWp6TUVZMUpMSl9Ub1UtS1gxbF9zZjFxZjRSbVNMcXh2ZlBobFVvZnBzb3QxclJKQVpQUEFPV2MxLVN6VU5RSzl2QTFRWWt1bU9WeEZ2V1NiQ2w2VUdUTXlHR3VudzlfVmVLbmluajPSAYIBQVVfeXFMUGJwczlTcUpaQU1oNWIzVlp5emhBZER1OF9xcllxbTRuZzZjTUprWGdrenBYUmF1X241RDVDaGpNbEhCMEhQd3JLZjlsVXhoUmM1TXRWMFdYeldIdUNYUGtvUWtUekEwTUJrWnlPdWI1Ym9ySGZ3Nm9IVWcxaVdYRDBCUQ?oc=5",
    urlToImage: null,
    publishedAt: "2024-09-12T13:04:35+00:00",
    content: null
  }, {
    source: {
      id: "fox-news",
      name: "Fox News"
    },
    author: "Rémy Numa",
    title: "Fox News Power Rankings: Trump loses his edge as we brace again for post-debate impact",
    description: "The latest Fox News Power Rankings presidential forecast has Vice President Kamala Harris in the lead, but this election is still anyone's game.",
    url: "https://www.foxnews.com/politics/fox-news-power-rankings-trump-loses-his-edge-forecast-we-brace-again-post-debate-impact",
    urlToImage: "https://static.foxnews.com/foxnews.com/content/uploads/2024/09/ELEC24_FS_POWER_RANKINGS_Forecast_Map.png",
    publishedAt: "2024-09-12T12:55:12Z",
    content: "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nBy entering your email and pushing continue, you are ag… [+7157 chars]"
  }, {
    source: {
      id: "fox-news",
      name: "Fox News"
    },
    author: "Rémy Numa",
    title: "Fox News Power Rankings: Trump loses his edge as we brace again for post-debate impact",
    description: "The latest Fox News Power Rankings presidential forecast has Vice President Kamala Harris in the lead, but this election is still anyone's game.",
    url: "https://www.foxnews.com/politics/fox-news-power-rankings-trump-loses-his-edge-forecast-we-brace-again-post-debate-impact",
    urlToImage: "https://static.foxnews.com/foxnews.com/content/uploads/2024/09/ELEC24_FS_POWER_RANKINGS_Forecast_Map.png",
    publishedAt: "2024-09-12T12:55:12Z",
    content: "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nBy entering your email and pushing continue, you are ag… [+7157 chars]"
  }
];