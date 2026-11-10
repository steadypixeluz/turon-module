export enum OrderStatus {
  draft = "draft", // Черновик
  new = "new", // Новый
  preparing = "preparing", // Собирается
  international_delivery = "international_delivery", // Международная доставка
  delivered_uzbekistan = "delivered_uzbekistan", // Доставлен в Узбекистан
  shipped = "shipped", // Передан в доставку
  arrived_pvz = "arrived_pvz", // Прибыл в пункт выдачи (ПВЗ)
  courier_on_way = "courier_on_way", // Доставляется (курьер в пути)
  delivered = "delivered", // Получен
  returned = "returned", // Возврат оформлен
  cancelled = "cancelled", // Отменен
}

export enum OrderInfoStatus {
  draft = "draft",
  completed = "completed",
  cancelled = "cancelled",
}
export enum BrandStatus {
  new = "new",
  completed = "completed",
  rejected = "rejected",
}
export enum OrderWholesaleStatus {
  draft = "draft", // Черновик
  new = "new", // Новый
  cancelled = "rejected", // Отменен
  completed = "completed",
}

export enum OrderProductStatus {
  draft = "draft", // Черновик
  new = "new", // Новый
  cancelled = "cancelled", // Отменен
  completed = "completed",
  payment_pending = "payment_pending",
}
