import { Stack } from '@mui/material'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Stack alignItems='center' height='100vh' justifyContent='center'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </Stack>
  )
}