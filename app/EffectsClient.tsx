'use client'

import { useEffect } from 'react'
import { initEffects } from './effects.js'

export default function EffectsClient() {
  useEffect(() => {
    const cleanup = initEffects()

    return () => {
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [])

  return null
}