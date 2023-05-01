import { expect, describe, it, beforeEach } from 'vitest'
import { CreateGymUseCase } from './create-gym'
import { InMemoryGymRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let gymsRepository: InMemoryGymRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript Gym',
      description: null,
      phone: null,
      latitude: 3.7722138,
      longitude: -38.5795397,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
