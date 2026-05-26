export type Tag = 'bestseller' | 'mới' | 'chay' | 'cay' | 'ít cay';

type BaseItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  tags?: Tag[];
  discount?: number; // % giảm, ví dụ: 10 = giảm 10%
  soldOut?: boolean; // true = hết hôm nay, cập nhật mỗi ngày
};

export type SingleItem = BaseItem & {
  type: 'single';
};

export type ComboItem = BaseItem & {
  type: 'combo';
  includes: string[]; // tên các món trong combo
};

export type MenuItem = SingleItem | ComboItem;

export type MenuCategory = {
  id: string;
  name: string;
  slug: 'do-an' | 'thuc-uong';
  items: MenuItem[];
};

export function discountedPrice(item: BaseItem): number {
  if (!item.discount) return item.price;
  return Math.round(item.price * (1 - item.discount / 100));
}

export const menu: MenuCategory[] = [
  {
    id: 'do-an',
    name: 'Đồ ăn',
    slug: 'do-an',
    items: [
      {
        id: 'com-ga',
        type: 'single',
        name: 'Cơm gà',
        price: 45000,
        image: '/assets/food/do-an/com-ga.jpg',
        description: 'Cơm gà hầm rau củ, đậm đà, ăn kèm canh chua.',
        tags: ['bestseller'],
      },
      {
        id: 'bun-bo',
        type: 'single',
        name: 'Bún bò Huế',
        price: 50000,
        image: '/assets/food/do-an/bun-bo.jpg',
        description: 'Bún bò Huế cay nồng đặc trưng, nước dùng hầm xương 8 tiếng.',
        tags: ['cay', 'bestseller'],
        soldOut: true,
      },
      {
        id: 'banh-mi',
        type: 'single',
        name: 'Bánh mì thịt',
        price: 25000,
        image: '/assets/food/do-an/banh-mi.jpg',
        description: 'Bánh mì giòn, nhân thịt nguội, pate, rau thơm.',
        tags: ['mới'],
        discount: 10,
      },
      {
        id: 'bun-chay',
        type: 'single',
        name: 'Bún chay',
        price: 35000,
        image: '/assets/food/do-an/bun-chay.jpg',
        description: 'Bún với topping đậu hũ, nấm, rau xanh tươi.',
        tags: ['chay'],
      },
      {
        id: 'combo-gia-dinh',
        type: 'combo',
        name: 'Combo gia đình',
        price: 180000,
        image: '/assets/food/do-an/combo-gia-dinh.jpg',
        description: 'Phần ăn cho 4 người: cơm gà, bún bò, 2 ly trà sữa.',
        tags: ['bestseller'],
        discount: 15,
        includes: ['Cơm gà (x2)', 'Bún bò Huế (x1)', 'Trà sữa trân châu (x2)'],
      },
      {
        id: 'combo-doi',
        type: 'combo',
        name: 'Combo đôi',
        price: 95000,
        image: '/assets/food/do-an/combo-doi.jpg',
        description: 'Dành cho 2 người: 1 cơm gà + 1 bún bò + 2 nước.',
        tags: ['mới'],
        discount: 10,
        includes: ['Cơm gà (x1)', 'Bún bò Huế (x1)', 'Nước ngọt (x2)'],
      },
    ],
  },
  {
    id: 'thuc-uong',
    name: 'Thức uống',
    slug: 'thuc-uong',
    items: [
      {
        id: 'tra-sua',
        type: 'single',
        name: 'Trà sữa trân châu',
        price: 30000,
        image: '/assets/food/thuc-uong/tra-sua.jpg',
        description: 'Trà sữa kem cheese béo ngậy, trân châu dai mềm.',
        tags: ['bestseller'],
      },
      {
        id: 'nuoc-ep-cam',
        type: 'single',
        name: 'Nước ép cam',
        price: 25000,
        image: '/assets/food/thuc-uong/nuoc-ep-cam.jpg',
        description: 'Cam tươi ép nguyên chất, không đường.',
        tags: ['mới'],
      },
      {
        id: 'ca-phe-sua',
        type: 'single',
        name: 'Cà phê sữa đá',
        price: 20000,
        image: '/assets/food/thuc-uong/ca-phe-sua.jpg',
        description: 'Cà phê phin truyền thống, đậm vị, pha với sữa đặc.',
        tags: ['bestseller'],
      },
      {
        id: 'sinh-to-bo',
        type: 'single',
        name: 'Sinh tố bơ',
        price: 35000,
        image: '/assets/food/thuc-uong/sinh-to-bo.jpg',
        description: 'Bơ chín xay mịn, sữa tươi, béo ngậy bổ dưỡng.',
        tags: [],
        discount: 20,
      },
    ],
  },
];
