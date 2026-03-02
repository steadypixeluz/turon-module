export enum OrderStatus {
  draft = 'draft',                     // Черновик
  new = 'new',                       // Новый
  preparing = 'preparing',           // Собирается
  shipped = 'shipped',               // Передан в доставку
  arrived_pvz = 'arrived_pvz',       // Прибыл в пункт выдачи (ПВЗ)
  courier_on_way = 'courier_on_way', // Доставляется (курьер в пути)
  delivered = 'delivered',           // Получен
  returned = 'returned',             // Возврат оформлен
  cancelled = 'cancelled',           // Отменен
}

export enum OrderInfoStatus {
  draft = 'draft',
  completed = 'completed',
}

export enum OrderWholesaleStatus {
  draft = 'draft',                     // Черновик
  new = 'new',                       // Новый
  cancelled = 'rejected',           // Отменен
  completed = 'completed',
}

export enum OrderProductStatus {
  draft = 'draft',                     // Черновик
  new = 'new',                       // Новый
  cancelled = 'cancelled',           // Отменен
  completed = 'completed',
  payment_pending='payment_pending'
}
