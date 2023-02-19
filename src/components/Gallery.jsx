import React from 'react'
import LodgingList from '../datas/LodgingList'
import Card from './Card'

export default function Gallery() {

   return (
      <main className='home_gallery'>
         {LodgingList.map(data => {
            return (
               <Card
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  cover={data.cover}
               />
            )
         })}
      </main>
   )
}