import { useNavigate } from 'react-router';
import { useEffect } from "react"

export default function LodgingError() {
   const navigate = useNavigate()

   useEffect(() => {
      navigate("/error");
   })
}
