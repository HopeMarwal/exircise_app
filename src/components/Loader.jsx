import { Stack } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <Stack
      direction='row'
      justifyContent='center'
      alignItem='center'
      width='100%'
    >
      <InfinitySpin color='gray' />
    </Stack>
  )
}
