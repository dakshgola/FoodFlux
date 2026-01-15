import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../styles/reels.css'
import ReelFeed from '../../components/ReelFeed'
import AppContainer from '../../components/AppContainer'

const Home = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/food', { withCredentials: true })
      .then((res) => setVideos(res.data.foodItems))
      .catch(() => {})
  }, [])

  async function likeVideo(item) {
    const response = await axios.post(
      'http://localhost:3000/api/food/like',
      { foodId: item._id },
      { withCredentials: true }
    )

    setVideos((prev) =>
      prev.map((v) =>
        v._id === item._id
          ? { ...v, likeCount: v.likeCount + (response.data.like ? 1 : -1) }
          : v
      )
    )
  }

  async function saveVideo(item) {
    const response = await axios.post(
      'http://localhost:3000/api/food/save',
      { foodId: item._id },
      { withCredentials: true }
    )

    setVideos((prev) =>
      prev.map((v) =>
        v._id === item._id
          ? { ...v, savesCount: v.savesCount + (response.data.save ? 1 : -1) }
          : v
      )
    )
  }

  return (
    <AppContainer>
      <ReelFeed
        items={videos}
        onLike={likeVideo}
        onSave={saveVideo}
        emptyMessage="No videos available."
      />
    </AppContainer>
  )
}

export default Home
