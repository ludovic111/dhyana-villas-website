export interface Review {
  id: string;
  name: string;
  country: string;
  rating: number;
  text: {
    en: string;
    fr: string;
    th: string;
  };
}

export const reviews: Review[] = [
  {
    id: "review-1",
    name: "Michael",
    country: "United Kingdom",
    rating: 10,
    text: {
      en: "We had a fantastic week staying at this villa and couldn't have asked for a better base in Koh Phangan. The location is absolutely perfect.",
      fr: "Nous avons passé une semaine fantastique dans cette villa et n'aurions pas pu demander mieux à Koh Phangan. L'emplacement est absolument parfait.",
      th: "เราใช้เวลาหนึ่งสัปดาห์ที่ยอดเยี่ยมในวิลล่านี้ ไม่สามารถขอฐานที่ดีกว่านี้ในเกาะพะงันได้ ที่ตั้งสมบูรณ์แบบอย่างแท้จริง",
    },
  },
  {
    id: "review-2",
    name: "Sophie",
    country: "France",
    rating: 10,
    text: {
      en: "Beautiful, light and spacious villa with decor reminiscent of Bali. Surrounded by a beautiful garden full of greenery with a refreshing pool.",
      fr: "Belle villa lumineuse et spacieuse avec un décor rappelant Bali. Entourée d'un magnifique jardin verdoyant avec une piscine rafraîchissante.",
      th: "วิลล่าที่สวยงาม สว่าง และกว้างขวาง ตกแต่งสไตล์บาหลี ล้อมรอบด้วยสวนสีเขียวสวยงามพร้อมสระว่ายน้ำเย็นสดชื่น",
    },
  },
  {
    id: "review-3",
    name: "Thomas",
    country: "Germany",
    rating: 9,
    text: {
      en: "Jackie and Frank are wonderful hosts. The villa is immaculately maintained and the private pool is a dream. We will definitely return!",
      fr: "Jackie et Frank sont des hôtes merveilleux. La villa est impeccablement entretenue et la piscine privée est un rêve. Nous reviendrons certainement !",
      th: "แจ็คกี้และแฟรงก์เป็นเจ้าบ้านที่ยอดเยี่ยม วิลล่าดูแลอย่างดีเยี่ยมและสระว่ายน้ำส่วนตัวเหมือนฝัน เราจะกลับมาอีกแน่นอน!",
    },
  },
  {
    id: "review-4",
    name: "Emma",
    country: "Australia",
    rating: 10,
    text: {
      en: "The perfect tropical getaway. Steps from the beach, incredible hosts, and the villa itself is stunning. Worth every penny.",
      fr: "L'escapade tropicale parfaite. À quelques pas de la plage, des hôtes incroyables, et la villa elle-même est magnifique. Chaque centime en vaut la peine.",
      th: "การพักผ่อนเขตร้อนที่สมบูรณ์แบบ ใกล้ชายหาด เจ้าบ้านที่ยอดเยี่ยม และตัววิลล่าสวยงามมาก คุ้มค่าทุกบาท",
    },
  },
  {
    id: "review-5",
    name: "Kenji",
    country: "Japan",
    rating: 9,
    text: {
      en: "A truly peaceful retreat. The garden setting, private pool, and proximity to the beach make this the ideal vacation spot. Highly recommended.",
      fr: "Une retraite vraiment paisible. Le cadre du jardin, la piscine privée et la proximité de la plage en font l'endroit idéal pour les vacances. Hautement recommandé.",
      th: "ที่พักที่สงบสุขอย่างแท้จริง บรรยากาศสวน สระว่ายน้ำส่วนตัว และความใกล้ชายหาดทำให้ที่นี่เป็นจุดพักร้อนในอุดมคติ แนะนำอย่างยิ่ง",
    },
  },
];
