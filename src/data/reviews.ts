export type Review = {
  id: string;
  name: string;
  avatar: string; // initials fallback
  rating: number; // 1-5
  date: string;
  content: string;
};

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Nguyễn Thị Lan',
    avatar: 'NL',
    rating: 5,
    date: '2025-05-10',
    content: 'Cơm gà ở đây ngon lắm, thịt mềm mà đậm vị. Quán sạch sẽ, phục vụ nhanh. Mình hay ghé buổi trưa, lần nào cũng hài lòng!',
  },
  {
    id: '2',
    name: 'Trần Minh Khoa',
    avatar: 'TK',
    rating: 5,
    date: '2025-05-03',
    content: 'Bún bò Huế nước dùng ngọt tự nhiên, cay vừa đủ. Combo gia đình giá hợp lý cho cả nhà. Sẽ quay lại nhiều lần nữa.',
  },
  {
    id: '3',
    name: 'Phạm Thu Hương',
    avatar: 'PH',
    rating: 4,
    date: '2025-04-28',
    content: 'Trà sữa trân châu uống ngon, không ngọt quá. Không gian quán gia đình ấm cúng, phù hợp để ngồi ăn tối cùng nhau.',
  },
  {
    id: '4',
    name: 'Lê Văn Đức',
    avatar: 'LĐ',
    rating: 5,
    date: '2025-04-20',
    content: 'Bánh mì giòn, nhân đầy đặn mà giá chỉ 25k. Cà phê sữa đá đặc vừa, uống là tỉnh ngay. Quán nhỏ nhưng chất lượng!',
  },
  {
    id: '5',
    name: 'Võ Thị Mai',
    avatar: 'VM',
    rating: 5,
    date: '2025-04-15',
    content: 'Mình ăn chay nên hay gọi bún chay, topping nấm tươi ngon. Chủ quán thân thiện, hay hỏi thăm khách quen. Cảm giác như ăn cơm nhà.',
  },
  {
    id: '6',
    name: 'Hoàng Bảo Long',
    avatar: 'HL',
    rating: 4,
    date: '2025-04-08',
    content: 'Sinh tố bơ sánh mịn, không bị loãng. Combo đôi tiết kiệm được kha khá so với gọi lẻ. Giao hàng nhanh khi đặt qua điện thoại.',
  },
];
