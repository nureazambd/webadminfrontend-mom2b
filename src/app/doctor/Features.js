import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Features() {
  return (
    <div className=''> <h1 className='mb-4 '>Features Page</h1>

<Card style={{ width: '600px' }} className="bg-dark text-white mb-4">
      <Card.Img src="https://www.verywellhealth.com/thmb/GRauWOmgWe_7ZaDvdEOKeoqDNhA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/90038143-56a46dca3df78cf7728260d8.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='bg-white text-black p-2'>Anesthesiology Specialist</Card.Title>
        <Card.Text className='bg-white text-black p-2'>
        An anesthesiologist or pain management specialist is a doctor who gives a patient 
        medication so they do not feel pain when they are undergoing surgery. 
        Here in this page you can find out & choose the best pain management specialist 
        doctor in Dhaka with their chamber information & contact number.
        </Card.Text>
        <Card.Text className='bg-white text-black p-2'>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>

    <Card style={{ width: '600px' }} className="bg-dark text-white mb-4">
      <Card.Img src="https://1.bp.blogspot.com/-FDPEoeVybSw/Xu8Za0gb-8I/AAAAAAAAYe4/gagAPSA0ez8Ez7TG6BDlGwz042z_wwk9gCPcBGAYYCw/s1100/SAVE_20200618_153333.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='bg-white text-black p-2'>Cancer Specialist</Card.Title>
        <Card.Text className='bg-white text-black p-2'>
        A cancer specialist or oncologist is a doctor who skilled in cancer treatment like breast 
        cancer, liver cancer, lung cancer, skin cancer, etc. Here in this page you can find 
        out & choose the best cancer specialist doctor in Dhaka with their chamber 
        information & contact number.
        </Card.Text>
        <Card.Text className='bg-white text-black p-2'>Last updated 30 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>

    <Card style={{ width: '600px' }} className="bg-dark text-white mb-4">
      <Card.Img src="https://i.ytimg.com/vi/qid-tK9I7uw/maxresdefault.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='bg-white text-black p-2'>Cardiac Surgery Specialist</Card.Title>
        <Card.Text className='bg-white text-black p-2'>
        A Cardiovascular & Thoracic is a medical doctor who specializes in surgery of the 
        heart, lungs, esophagus, & other organs in the chest. Here in this page you can 
        find out & choose the best cardiovascular surgeon & thoracic surgeon in Dhaka with 
        their chamber information & contact number.
        </Card.Text>
        <Card.Text className='bg-white text-black p-2'>Last updated 48 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
  )
}
