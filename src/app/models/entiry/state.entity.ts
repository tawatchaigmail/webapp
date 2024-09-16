interface EntityState<V>{
 ids: string[] | number[];
 entities: {[id: string | id: number]: V}
}