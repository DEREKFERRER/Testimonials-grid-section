import image1 from './assets/images/image-daniel.jpg'
import image2 from './assets/images/image-jonathan.jpg'
import image3 from './assets/images/image-jeanette.jpg'
import image4 from './assets/images/image-patrick.jpg'
import image5 from './assets/images/image-kira.jpg'
import './App.css'

function App() {
  return (
    <>
    <div className='px-6 py-14 lg:p-24 '>
      <div className='lg:grid lg:grid-cols-4 lg:gap-4'>
        <div className=' bg-moderatePurple bg-quotation-pattern bg-no-repeat bg-[top_right_2rem] lg:bg-[top_right_6rem] bg-[length:auto_120px] p-8 mb-8 lg:mb-0 rounded-lg text-white lg:col-span-2 relative'>
          <div className='flex items-center'>
            <img className='rounded-full w-10 mr-5 border-2 border-[#8f6dc7]' src={image1} alt="" />
            <div className='leading-4'>
              <p className='font-normal'>Daniel Clifford</p>
              <span className='opacity-50'>Verified Graduate</span>
            </div>
          </div>
            <p className='pt-5 text-[1.3rem] font-semibold leading-7 '>I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                in the company I joined. I honestly feel I got every penny’s worth.</p>
            <p className='opacity-70 pt-5 '>“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
                transition and have heard some people who had an amazing experience here. I signed up 
                for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                The next 12 weeks was the best - and most grueling - time of my life. Since completing 
                the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
        </div>

        <div className='bg-vdgBlue p-8 mb-8 lg:mb-0 rounded-lg text-white'>
          <div className='flex items-center'>
            <img className='rounded-full w-10  mr-5' src={image2} alt="" />
            <div className='leading-4'>
              <p className='font-normal'>Jonathan Walters</p>
              <span className='opacity-50'>Verified Graduate</span>
            </div>
          </div>
          <p className='text-[1.3rem] pt-5 font-semibold leading-7'>The team was very supportive and kept me motivated</p>
          <p className='opacity-70 pt-5'>“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
              for a big company. This was one of the best investments I’ve made in myself. ”</p>
        </div>

        <div className='bg-white p-8 mb-8 lg:mb-0 rounded-lg '>
          <div className='flex items-center'>
            <img className='rounded-full w-10  mr-5' src={image3} alt="" />
            <div className='leading-4'>
              <p className='font-normal'>Jeanette Harmon</p>
              <span className='opacity-50'>Verified Graduate</span>
            </div>
          </div>
          <p className='text-[1.4rem] pt-5 font-semibold leading-7'>An overall wonderful and rewarding experience</p>
          <p className='opacity-70 pt-5'>“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
              while doing something I love. ”</p>
        </div>

        <div className='bg-vdbBlue p-8 mb-8 lg:mb-0 rounded-lg text-white lg:col-span-2'>
          <div className='flex items-center'>
            <img className='rounded-full w-10 mr-5 border-2 border-moderatePurple' src={image4} alt="" />
            <div className='leading-4'>
              <p className='font-normal'>Patrick Abrams</p>
              <span className='opacity-50'>Verified Graduate</span>
            </div>
          </div>
          <p className='text-[1.3rem] pt-5 font-semibold leading-7' >Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
              learning from their experiences was easy.</p>
          <p className='opacity-70 pt-5'>“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
              gave me the confidence necessary to be able to go out in the world and present myself as a capable 
              junior developer. The standard is above the rest. You will get the personal attention you need from 
              an incredible community of smart and amazing people. ”</p>
        </div>
   

        <div className='bg-white p-8 rounded-lg lg:col-start-4 row-[1_/_span_2]'>
          <div className='flex items-center'>
            <img className='rounded-full w-10 mr-5' src={image5} alt="" />
            <div className='leading-4'>
              <p className='font-normal'>Kira Whittle</p>
              <span className='opacity-50'>Verified Graduate</span>
            </div>
          </div>
          <p className='text-[1.3rem] pt-5 font-semibold leading-7'>Such a life-changing experience. Highly recommended!</p>
          <p className='opacity-70 pt-5'>“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
              professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
              student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
              did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
              project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
              could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
              experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
              100% recommend! ”</p>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
