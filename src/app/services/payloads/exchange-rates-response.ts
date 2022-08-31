export interface ExchangeRatesResponse {
    rates:{
        CAD: number,
        [key: string]: number
    }
    base: string,
    date: string
}

