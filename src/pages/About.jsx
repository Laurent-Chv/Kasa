import React from 'react'
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import AboutTxt from '../datas/AboutTxt'

export default function About() {

  return (
    <div>
      <Banner />
      <main className='about'>
        {AboutTxt.map(data => {
          return (
            <div key={data.id} className="about_collapse">
              <Collapse title={data.title} content={data.content} />
            </div>
          )
        }
        )}
      </main>
    </div>
  )
}
