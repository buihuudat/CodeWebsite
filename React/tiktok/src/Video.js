import { forwardRef, useImperativeHandle, useRef } from 'react'
import video from './Videos/Facebook_12.mp4'

function Video(props,ref) {
  const videoRef = useRef()
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play()
    },
    pause() {
      videoRef.current.pause()
    }
  }))
  return (
    <div>
      <video 
        ref={videoRef}
        src={video}
      />
    </div>
  )
}
export default forwardRef(Video)