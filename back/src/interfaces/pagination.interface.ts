import Advertisement from "../entities/advertisement.entity"

type iPaginatedResponse = {
    count: number,
    next: string|null,
    previous: string|null,
    advertisements: Advertisement|Advertisement[]
}

export default iPaginatedResponse;