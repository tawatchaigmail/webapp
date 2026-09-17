export const Count = signalStore(
 /* .....   /*
 withHooks((store)=>{
  const logger = inject(Logger);
  let interval = 0 ;
  return {
     interval = serIntervalval(() => store.increement(),20_00);
  },
  onDestroy() {
           logger.info(' count on destrou', store.count());
           clearinterval(interval);
  }

 })
);