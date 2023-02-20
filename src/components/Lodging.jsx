import React from 'react'
import { useParams } from 'react-router'
import LodgingList from '../datas/LodgingList'
import Lodge from "../pages/Lodge"
import LodgingError from '../utils/LodgingError';

export default function Lodging() {

  const lodgingId = useParams('id').id;
  const dataLodgingId = LodgingList.filter(data => data.id === lodgingId);

  let IdVerify = Boolean(false)

  if (!dataLodgingId.length) {
    IdVerify = false
  } else {
    IdVerify = true
  }

  const id = IdVerify

  return id ? <Lodge /> : <LodgingError />
}
