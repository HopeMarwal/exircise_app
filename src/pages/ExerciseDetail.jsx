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

  //Fetch Data
  useEffect(() => {
    const fetchExerciseDetail = async () => {
      //Fetch exercise detail
      const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`
      const dataDetail = await fetchData(`${ exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(dataDetail)

      //Fetch video detail
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
      const videoData = await fetchData(`${youtubeSearchUrl}/search?query=${dataDetail.name}`, videoOptions)
      setVideoDetail(videoData.contents)
    }

    fetchExerciseDetail();
  }, [id])


  return (
    <Box>
      <Detail exerciseData={exerciseDetail} />
      <ExerciseVideos videoData={videoDetail} name={exerciseDetail.name} />
      <SimilarExercises />
    </Box>
  )
}
