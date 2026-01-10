import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Reusable feed for vertical reels
const ReelFeed = ({ items = [], onLike, onSave, emptyMessage = 'No videos yet.' }) => {
  const videoRefs = useRef(new Map())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (!(video instanceof HTMLVideoElement)) return

          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: [0, 0.25, 0.6, 0.9, 1] }
    )

    videoRefs.current.forEach((vid) => observer.observe(vid))
    return () => observer.disconnect()
  }, [items])

  const setVideoRef = (id) => (el) => {
    if (!el) {
      videoRefs.current.delete(id)
      return
    }
    videoRefs.current.set(id, el)
  }

  // Correct video URL
  const getVideoUrl = (videoPath) => {
    if (!videoPath) return ''
    if (videoPath.startsWith('http')) return videoPath
    if (videoPath.startsWith('/videos/')) {
      return `http://localhost:3000${videoPath}`
    }
    return videoPath
  }

  return (
    <div className="reels-page">
      <div className="reels-feed" role="list">
        {items.length === 0 && (
          <div className="empty-state">
            <p>{emptyMessage}</p>
          </div>
        )}

        {items.map((item) => (
          <section key={item._id} className="reel" role="listitem">
            
            {/* ✅ FIXED VIDEO */}
            <video
              ref={setVideoRef(item._id)}
              className="reel-video"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            >
              <source
                src={getVideoUrl(item.video)}
                type="video/mp4"
              />
            </video>

            <div className="reel-overlay">
              <div className="video-progress" aria-hidden="true">
                <div className="ring" />
              </div>
              <div className="double-tap-heart" aria-hidden="true">
                <svg width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="url(#g)" strokeWidth="0" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0%" stopColor="#FF80BF" />
                      <stop offset="100%" stopColor="#FF6AEF" />
                    </linearGradient>
                  </defs>
                  <path d="M12 21s-6.716-4.35-9.06-7.062C-.4 9.69 2.8 5 7.5 5c2.26 0 3.99 1.257 4.5 2.237C12.51 6.257 14.24 5 16.5 5 21.2 5 24.4 9.69 21.06 13.938 18.716 16.65 12 21 12 21z" fill="url(#g)" />
                </svg>
              </div>
              <div className="reel-overlay-gradient" aria-hidden="true" />

              <div className="reel-actions">
                <div className="reel-action-group">
                  <button
                    onClick={onLike ? () => onLike(item) : undefined}
                    className="reel-action"
                    aria-label="Like"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-8.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
                    </svg>
                  </button>
                  <div className="reel-action__count">
                    {item.likeCount ?? item.likesCount ?? item.likes ?? 0}
                  </div>
                </div>

                <div className="reel-action-group">
                  <button
                    className="reel-action"
                    onClick={onSave ? () => onSave(item) : undefined}
                    aria-label="Bookmark"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" />
                    </svg>
                  </button>
                  <div className="reel-action__count">
                    {item.savesCount ?? item.bookmarks ?? item.saves ?? 0}
                  </div>
                </div>

                <div className="reel-action-group">
                  <button className="reel-action" aria-label="Comments">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                    </svg>
                  </button>
                  <div className="reel-action__count">
                    {item.commentsCount ?? (Array.isArray(item.comments) ? item.comments.length : 0)}
                  </div>
                </div>
              </div>

              <div className="reel-content">
                <div className="reel-meta glass-card">
                  <p className="reel-description" title={item.description}>
                    {item.description}
                  </p>

                  {item.foodPartner && (
                    <Link
                      className="reel-btn btn btn-primary"
                      to={`/food-partner/${item.foodPartner}`}
                    >
                      Visit store
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default ReelFeed
