import TopicLIst from '@/components/TopicLIst';
import Image from 'next/image';
import AddTopic from './addTopic/page';

export default function Home() {
  return (
    <>
    <div className='bg-primary'>
      <h1 className='text-center' style={{fontSize:'25px'}}>Next js 2</h1>
      <div>
        <TopicLIst/>   
      </div>

    </div>
    </>
  )
}
