export interface Delivery {
    id: string
    date: string
    recipient: string
    city: string
    carrier: string
    carrierLogo: string
    track: string
    cost: number
    status: 'paid' | 'partial' | 'pending' | 'error'
}