export interface MobileNavOpenCloseService_Interface {
  open(): void; // should execute idempotently
  
  close(): void; // should execute idempotently
}
