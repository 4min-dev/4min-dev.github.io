import type { BarDatum } from "@nivo/bar"

export type OrdersDynamicObject = BarDatum & {
    month: string,
    normalActive: number,
    overdueActive: number,
    criticalActive: number,
    closed: number
}