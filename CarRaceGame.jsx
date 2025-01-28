'use client'

import React, { useEffect, useRef, useState } from 'react'

const CarRaceGame = () => {
  const canvasRef = useRef(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let carPosition = 150
    let obstacles = []
    let speed = 2

    const car = new Image()
    car.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzMzMzMzMyIgZD0iTTUgMTNhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoMWEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMmgxdjRINnYtNEg1bTE0LTJhMiAyIDAgMCAwLTIgMnY0YTIgMiAwIDAgMCAyIDJoMWEyIDIgMCAwIDAgMi0ydi00YTIgMiAwIDAgMC0yLTJ6bTAgMmgxdjRoLTF2LTRoLTFtLTYtNmMtMy4zMSAwLTYgMi42OS02IDZoMTJjMC0zLjMxLTIuNjktNi02LTZtLTMuODUgMS40NEwxMS4wMSA5SDEzYy41NSAwIDEgLjQ1IDEgMWg0YzEuMTEgMCAyIC44OSAyIDJ2M2gtMnYtM0g2djNoLTJWMTJjMC0xLjExLjg5LTIgMi0yaDRjMC0uNTUuNDUtMSAxLTFoMS45OWwtMS44NS0xLjU2eiIvPjwvc3ZnPg=='

    const drawCar = () => {
      ctx.drawImage(car, carPosition, 300, 50, 50)
    }

    const drawObstacle = (x, y) => {
      ctx.fillStyle = '#FF0000'
      ctx.fillRect(x, y, 30, 30)
    }

    const updateObstacles = () => {
      obstacles = obstacles.filter(obs => obs.y < 400)
      obstacles.forEach(obs => {
        obs.y += speed
        drawObstacle(obs.x, obs.y)
        if (
          obs.y > 250 &&
          obs.y < 350 &&
          obs.x > carPosition - 30 &&
          obs.x < carPosition + 50
        ) {
          setGameOver(true)
        }
      })
      if (Math.random() < 0.02) {
        obstacles.push({ x: Math.random() * 320, y: -30 })
      }
    }

    const updateScore = () => {
      setScore(prevScore => prevScore + 1)
    }

    const animate = () => {
      ctx.clearRect(0, 0, 350, 400)
      drawCar()
      updateObstacles()
      updateScore()
      if (!gameOver) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && carPosition > 0) {
        carPosition -= 10
      } else if (e.key === 'ArrowRight' && carPosition < 300) {
        carPosition += 10
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [gameOver])

  const restartGame = () => {
    setScore(0)
    setGameOver(false)
  }

  return (
    <div className="relative">
      <canvas ref={canvasRef} width={350} height={400} className="border border-gray-300" />
      <div className="absolute top-2 left-2 text-white font-bold">Score: {score}</div>
      {gameOver && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded">
            <p className="text-xl font-bold mb-2">Game Over!</p>
            <p className="mb-4">Your score: {score}</p>
            <button
              onClick={restartGame}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CarRaceGame
