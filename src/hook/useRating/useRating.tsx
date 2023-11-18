/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-syntax */
import { useSetState } from '@mantine/hooks'
import { useEffect } from 'react'
import type { RatingsData } from './useRating.type'
import type { UserRating } from '../../types/UserRating'

function useRating(ratings: UserRating[]) {
  const [ratingsData, setRatingData] = useSetState<RatingsData>({
    media: 0,
    sumStars: 0,
    quant: ratings.length,
  })

  const updateRatingsData = () => {
    const quant = ratings.length
    let sumStars = 0
    let media = 0

    if (quant > 0) {
      for (const rating of ratings) {
        sumStars += rating.stars
      }
      media = Math.round(sumStars / quant)
    }
    setRatingData({ media, sumStars, quant })
  }

  useEffect(() => {
    updateRatingsData()
  }, [ratings.length])

  return {
    ratingsData,
    updateRatingsData,
  }
}

export default useRating
