import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { removeVideoAPI, storeHistoryAPI } from '../services/allAPI';


const VideoCard = ({displayData,setDeleteVideoResponse,insideCategory}) => {
  console.log(displayData);
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async () => {
    setShow(true);
    // save history in json server
    const {caption,link} = displayData

    // get date&time to watch video
    const sysTime = new Date()

    const timeStamp = sysTime.toLocaleString('en-US',{timeZoneName:'short'})
    console.log(timeStamp);
    

    const videoDetails ={caption,link,timeStamp}
    await storeHistoryAPI(videoDetails)
    
    
  }

  const removeVideo = async (videoId)=>{
   const result = await removeVideoAPI (videoId)

    // pass response to view component (child to parent)

    setDeleteVideoResponse(result?.data)
  }

  const videoDragStart = (e,videoId)=>{
    console.log(`draging  starts  with video id :${videoId}`);
    e.dataTransfer.setData("vId",videoId)
  }

  return (
    <>
    {/* card attribute draggable set as 'true' */}
     <Card draggable={true} onDragStart={e=>videoDragStart(e,displayData?.id)} style={{height:'250px'}}>
      <Card.Img onClick={handleShow} variant="top" 
      height={'150px'} src={displayData?.url} />
      <Card.Body>
        <Card.Text className='d-flex align-items-center justify-content-between'>
          <p>{displayData?.caption}</p>
          {
            !insideCategory &&
            <button onClick={()=>removeVideo(displayData?.id)}  className='btn'> <i className='fa-solid fa-trash text-danger'></i></button>

          }
</Card.Text>
        
      </Card.Body>
    </Card>


    <Modal size='lg' centered
        show={show}
        onHide={handleClose}
      
      >
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
        <iframe width="100%" height="360" src={`${displayData?.link}?autoplay=1`} title="caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default VideoCard