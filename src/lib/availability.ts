import type { Booking, WorkshopId } from '../models/booking'
import { TYPESCRIPT_CAPACITY, BUILD_CAPACITY } from '../data/capacities'
import { countSeats } from './count-seats'

const capacities: Record<WorkshopId, number> = {
  typescript: TYPESCRIPT_CAPACITY,
  build: BUILD_CAPACITY,
}

export function countWorkshopSeats(items: Booking[], workshop: WorkshopId): number {
  return countSeats(items.filter((booking) => booking.workshop === workshop))
}

export function getRemainingSeats(items: Booking[], workshop: WorkshopId): number {
  return capacities[workshop] - countWorkshopSeats(items, workshop)
}
