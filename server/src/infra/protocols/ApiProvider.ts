export interface ApiProvider {
  getProducts: (product: string) => Promise<void>
}
