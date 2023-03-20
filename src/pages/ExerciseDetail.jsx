//React router
import { useParams } from "react-router-dom";
//MUI
import { Box } from "@mui/material";
//React
import { useEffect, useState } from "react";
//API
import { exerciseOptions, videoOptions, fetchData } from '../utils/fetchData'
//Components
import Detail from "../components/ExeDetail/Detail";
import ExerciseVideos from "../components/ExeDetail/ExerciseVideos";
import SimilarExercises from "../components/ExeDetail/SimilarExercises";


export default function ExerciseDetail() {
  //Router param
  const { id } = useParams()
  //State
  const [ exerciseDetail, setExerciseDetail ] = useState({})
  const [ videoDetail, setVideoDetail ] = useState([])
  const [ targetDetail, setTargetDetail ] = useState([])
  const [ equipmentDetail, setEquipmentDetail ] = useState([])

  //Fetch Data
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const fetchExerciseDetail = async () => {
      //Fetch exercise detail
      const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`
      const dataDetail = await fetchData(`${ exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(dataDetail)

      //Fetch video detail
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      const videoData = await fetchData(`${youtubeSearchUrl}/search?query=${dataDetail.name}`, videoOptions)
      setVideoDetail(videoData.contents)

      //Fetch exercises by same target muscle
      const targetData = await fetchData(`${exerciseDbUrl}/exercises/target/${dataDetail.target}`, exerciseOptions)
      setTargetDetail(targetData.slice(0, 15))

      //Fetch exercises by same equipment
      const equipmentData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${dataDetail.equipment}`, exerciseOptions)
      setEquipmentDetail(equipmentData.slice(0, 15))
    }

    fetchExerciseDetail();
  }, [id])


  return (
    <Box>
      <Detail exerciseData={exerciseDetail} />
      <ExerciseVideos videoData={videoDetail} name={exerciseDetail.name} />
      <SimilarExercises targetData={targetDetail} equipmentData={equipmentDetail} />
    </Box>
  )
}
