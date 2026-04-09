export interface Villa {
  id: string;
  name: string;
  image: string;
  description: {
    en: string;
    fr: string;
    th: string;
  };
}

export const villas: Villa[] = [
  {
    id: "villa-1",
    name: "Villa Lotus",
    image: "/images/villa-lotus.jpg",
    description: {
      en: "Our signature villa surrounded by a lotus pond and lush tropical vegetation, offering complete privacy and serenity.",
      fr: "Notre villa signature entourée d'un étang de lotus et d'une végétation tropicale luxuriante, offrant intimité et sérénité complètes.",
      th: "วิลล่าเด่นของเราล้อมรอบด้วยบ่อบัวและพืชเขตร้อนอันเขียวชอุ่ม มอบความเป็นส่วนตัวและความสงบสุข",
    },
  },
  {
    id: "villa-2",
    name: "Villa Bamboo",
    image: "/images/villa-bamboo.jpg",
    description: {
      en: "Nestled among bamboo groves, this villa blends Balinese design with Thai tropical charm for an unforgettable stay.",
      fr: "Nichée parmi les bosquets de bambou, cette villa mêle le design balinais au charme tropical thaïlandais pour un séjour inoubliable.",
      th: "ซ่อนตัวอยู่ท่ามกลางสวนไผ่ วิลล่านี้ผสมผสานการออกแบบแบบบาหลีกับเสน่ห์เขตร้อนไทยเพื่อการเข้าพักที่น่าจดจำ",
    },
  },
  {
    id: "villa-3",
    name: "Villa Frangipani",
    image: "/images/villa-frangipani.jpg",
    description: {
      en: "Surrounded by fragrant frangipani trees, this villa offers a peaceful garden retreat with mountain views.",
      fr: "Entourée de frangipaniers parfumés, cette villa offre une retraite paisible avec vue sur la montagne.",
      th: "ล้อมรอบด้วยต้นลีลาวดีหอม วิลล่านี้มอบที่พักท่ามกลางสวนอันเงียบสงบพร้อมวิวภูเขา",
    },
  },
];
