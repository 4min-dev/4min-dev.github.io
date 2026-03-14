import type { BarDatum } from "@nivo/bar";

export type BalanceAnalyticsObject = BarDatum & {
    month: string,
    replenishment: number,
    spending: number
}