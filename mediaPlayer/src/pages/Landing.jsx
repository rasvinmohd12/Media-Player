import React from 'react'
import { Link } from 'react-router-dom'
import giphy from '../assets/giphy.gif'
import { Card } from 'react-bootstrap'
import statik from '../assets/statik.jpg'
import p2 from '../assets/p2.jpeg'
import large from '../assets/large.jpeg'
const Landing = () => {
  return (
    <div style={{ paddingTop: '100px' }} className='container'>
      {/* landing part */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className='' style={{color:'#f775e8'}}>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }} className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis tenetur quod ut beatae debitis a cupiditate assumenda consequuntur molestiae perferendis cum odio, natus est inventore consequatur! Facere, hic dolorem?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit atque aut ipsum, doloribus nihil cupiditate ducimus dolor? Delectus explicabo neque tempora quod, excepturi minima repudiandae, magni sunt fugiat enim mollitia!</p>
          <Link to={'/home'} style={{ backgroundColor: '#a0efff',color:'black',fontWeight:'bold' }} className='btn '>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='ms-5' src={giphy} alt='landing Image' />
        </div>
      </div>
      {/* features */}
      <div className="my-5">
        <h3 className='text-center'>Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'250px'} src={statik} />
              <Card.Body>
                <Card.Title>Manging Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'250px'} src={p2} />
              <Card.Body>
                <Card.Title>Manging Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>


          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '18rem' }}>
              <Card.Img variant="top" height={'250px'} src={large} />
              <Card.Body>
                <Card.Title>Manging Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>




        </div>
      </div>

      {/* links */}

      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
<h3 className=""  style={{color:'#f775e8'}}>Simple, fast and Powerful</h3>
<p style={{textAlign:'justify'}}><span className='fs-5'>Play everything :</span> amet consectetur adipisicing elit. Quisquam qui totam error? Laudantium dicta ducimus veniam sit nisi, rerum praesentium! Necessitatibus recusandae cum illo exercitationem, quaerat voluptas aliquid iste accusamus.</p>


<p style={{textAlign:'justify'}}><span className='fs-5'>Play everything :</span> amet consectetur adipisicing elit. Quisquam qui totam error? Laudantium dicta ducimus veniam sit nisi, rerum praesentium! Necessitatibus recusandae cum illo exercitationem, quaerat voluptas aliquid iste accusamus.</p>


<p style={{textAlign:'justify'}}><span className='fs-5'>Play everything :</span> amet consectetur adipisicing elit. Quisquam qui totam error? Laudantium dicta ducimus veniam sit nisi, rerum praesentium! Necessitatibus recusandae cum illo exercitationem, quaerat voluptas aliquid iste accusamus.</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="497" height="360" src="https://www.youtube.com/embed/8GTEJRwVieY" title="BEN 10: Live Action Movie – Official Trailer | Tom Holland | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}
 

export default Landing