import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../styles/partner-dashboard.css'

const PartnerDashboard = () => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/food/partner', {
        withCredentials: true
      })
      .then((res) => {
        setVideos(res.data.foodItems || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const totalLikes = videos.reduce((sum, v) => sum + (v.likeCount || 0), 0)
  const totalSaves = videos.reduce((sum, v) => sum + (v.savesCount || 0), 0)

  if (loading) return <div className="pd-loading">Loading dashboard…</div>

  return (
    <div className="pd-wrapper">
      <h1 className="pd-title">Partner Dashboard</h1>

      {/* Stats */}
      <div className="pd-stats">
        <div className="pd-card">
          <span>Total Videos</span>
          <strong>{videos.length}</strong>
        </div>
        <div className="pd-card">
          <span>Total Likes</span>
          <strong>{totalLikes}</strong>
        </div>
        <div className="pd-card">
          <span>Total Saves</span>
          <strong>{totalSaves}</strong>
        </div>
      </div>

      {/* Video list */}
      <div className="pd-videos">
        {videos.map((video) => (
          <div key={video._id} className="pd-video-card">
            <video
              src={`http://localhost:3000${video.video}`}
              muted
              controls
            />
            <div className="pd-video-info">
              <p>{video.description || 'No description'}</p>
              <div className="pd-metrics">
                ❤️ {video.likeCount || 0}
                📌 {video.savesCount || 0}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PartnerDashboard
