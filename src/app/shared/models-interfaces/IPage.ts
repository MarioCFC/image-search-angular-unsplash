import { Result } from "./IResult"

export interface IPage {
  total: number
  total_pages: number
  results: Result[]
}