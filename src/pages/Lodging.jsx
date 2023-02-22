import React from 'react'
import { useParams } from 'react-router'
import LodgingList from '../datas/LodgingList'
import Slideshow from "../components/Slideshow"
import Collapse from '../components/Collapse';
import greyStar from '../assets/images/grey_star.png';
import redStar from '../assets/images/red_star.png';

export default function Lodging() {

   const lodgingId = useParams('id').id;
   const dataLodgingId = LodgingList.filter(data => data.id === lodgingId);

   const slidesPictures = dataLodgingId?.[0]?.pictures || []

   const { title, location, host, tags, rating, description, equipments
   } = dataLodgingId?.[0] || {}

   const hostFullName = host.name.split(' ');
   const hostFirstName = hostFullName[0];
   const hostName = hostFullName[1];
   const hostPicture = host.picture;

   return (
      <>
         <Slideshow slidesPictures={slidesPictures} />
         <main className="lodging">
            <div className="lodging_content">
               <div className="lodging_content_infos">
                  <h1 className="lodging_content_infos_title">{title}</h1>
                  <p className="lodging_content_infos_location">{location}</p>
                  <div className="lodging_content_infos_tags">
                     {tags.map((tag, index) => {
                        return (
                           <button key={index}>{tag}</button>
                        )
                     })}
                  </div>
               </div>
               <div className="lodging_content_host">
                  <div>
                     <div className='lodging_content_host_name'>
                        <span>{hostFirstName}</span>
                        <span>{hostName}</span>
                     </div>
                     <img
                        className='lodging_content_host_picture'
                        src={hostPicture}
                        alt="L'hôte du logement" />
                  </div>

                  <div className="lodging_content_host_stars">
                     {[...Array(5)].map((star, index) => {
                        const ratingValue = index + 1;
                        return (
                           < img
                              className='lodging_content_host_stars_rating'
                              key={index}
                              src={ratingValue <= rating ? redStar : greyStar}
                              alt="Note sur 5 étoiles" />
                        )
                     })}
                  </div>
               </div>
            </div>
            <div className="lodging_collapse">
               <div className="lodging_collapse_item">
                  <Collapse title={'Description'} content={description} />
               </div>
               <div className="lodging_collapse_item">
                  <Collapse title={'Équipements'} content={equipments} />
               </div>
            </div>
         </main>
      </>
   )
}
