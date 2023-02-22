import { useNavigate } from 'react-router';
import { useEffect } from "react"

export default function NavToError() {
   const navigate = useNavigate()

   useEffect(() => {
      navigate("/error");
   })
}
