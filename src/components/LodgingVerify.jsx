import React from 'react'
import { useParams } from 'react-router'
import LodgingList from '../datas/LodgingList'
import Lodging from "../pages/Lodging"
import NavToError from '../utils/NavToError';

export default function LodgingVerify() {

  const lodgingId = useParams('id').id;
  const dataLodgingId = LodgingList.filter(data => data.id === lodgingId);

  let IdVerify = Boolean(false)

  if (dataLodgingId.length) {
    IdVerify = true
  }

  return IdVerify ? <Lodging /> : <NavToError />
}
