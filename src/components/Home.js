import Bloglist from './Bloglist';
import useFetch from '../useFetch';

export default function Home() {
const {data:blogs ,error}=useFetch("http://localhost:8000/blogs")
 
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {blogs && <Bloglist blogs={blogs} /> }
    </div>
  )
}
