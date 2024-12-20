'use client'
import { GrLinkPrevious } from 'react-icons/gr'
import { GrLinkNext } from 'react-icons/gr'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { useRef } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import One from '@/public/images/partners/1.png'
import Two from '@/public/images/partners/2.png'
import Three from '@/public/images/partners/3.png'
import Four from '@/public/images/partners/4.png'

import Five from '@/public/images/partners/5.png'
import Sixe from '@/public/images/partners/6.png'
import Seven from '@/public/images/partners/7.png'
import Eigth from '@/public/images/partners/8.png'

import Nine from '@/public/images/partners/9.png'
import Ten from '@/public/images/partners/10.png'
import Eleven from '@/public/images/partners/11.png'
import Tvelwe from '@/public/images/partners/12.png'
import Link from 'next/link'
import { useCustomTranslation } from '@/app/i18n/client'

const SampleNextArrow = ({ onClick }) => (
	<div className='cursor-pointer text-[20px]' onClick={onClick}>
		<GrLinkNext />
	</div>
)

const SamplePrevArrow = ({ onClick }) => (
	<div className='cursor-pointer text-[20px]' onClick={onClick}>
		<GrLinkPrevious />
	</div>
)

const Partners = () => {
	const sliderRef = useRef(null)
	const {lng} = useParams()
	const {t} = useCustomTranslation(lng , 'partner')
	const settings = {
		dots: false,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false, // Disable built-in arrows
	}

	const handlePrev = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev() // Trigger prev slide
		}
	}

	const handleNext = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext() // Trigger next slide
		}
	}

	return (
		<section className='flex flex-col rounded-[30px] bg-[#F8F8F8] mt-[20px] py-[30px] px-[20px] 4xl:py-[80px] 4xl:px-[70px]'>
			<div className='flex flex-row items-center justify-between'>
				<div>
					<h4 className='text-[28px] font-bold 4xl:text-[50px] '>
						{t('title')}
						</h4>
				</div>
				{/* Custom navigation buttons */}
				<div className='flex flex-row gap-[8px] 2xl:hidden'>
					<SamplePrevArrow onClick={handlePrev} />
					<SampleNextArrow onClick={handleNext} />
				</div>
				{/* End of custom navigation */}
			</div>
			<div className='mt-[30px] 2xl:hidden h-auto'>
				<Slider
					ref={sliderRef}
					{...settings}
					className='flex mdl:flex mdl:flex-row'
				>
					{/* CARD 1 */}
					<div className='flex flex-col '>
						<div className='mdl:flex mdl:flex-row mdl:flex-wrap mdl:justify-between px-[10px]'>
							<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]  mdl:w-[49%]  mdl:flex mdl:items-center  h-[165px] flex items-center justify-center '>
								<div>
									<Image
										src={One}
										width={400}
										height={400}
										quality={100}
										alt='partners Logo  h-[100px]'
									/>
								</div>
							</div>
							
							<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px] mdl:w-[49%]  mdl:flex mdl:items-center h-[165px] flex items-center justify-center '>
								<div>
									<Image
										src={Three}
										width={400}
										height={400}
										quality={100}
										alt='partners Logo h-[100px]'
									/>
								</div>
							</div>
							<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px] mdl:w-[49%]  mdl:flex mdl:items-center h-[165px] flex items-center justify-center '>
								<div>
									<Image
										src={Four}
										width={200}
										height={100}
										quality={100}
										alt='partners Logo h-[100px]'
									/>
								</div>
							</div>
							<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px] mdl:w-[49%] h-[165px] flex items-center justify-center    mdl:flex mdl:items-center 	'>
								<div>
									<Image
										src={Five}
										width={400}
										height={400}
										quality={100}
										alt='partners Logo h-[100px]'
									/>
								</div>
							</div>
							
						</div>
					</div>

				{/* CARD 2 */}
					<div className='flex flex-col mdl:flex-row mdl:flex-wrap px-[10px]'>
						<div className='mdl:flex mdl:flex-row mdl:flex-wrap mdl:justify-between'>
						<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]  mdl:w-[49%] h-[165px] flex items-center justify-center   mdl:flex mdl:items-center '>
								<Link href='/about'>
									<Image
										src={Seven}
										width={400}
										height={400}
										quality={100}
										alt='partners Logo h-[100px]'
									/>
								</Link>
							</div>
						<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px] mdl:w-[49%] md mdl:flex mdl:items-center h-[165px] flex items-center justify-center  '>
								<Link href='/about'>
									<Image
										src={Two}
										width={400}
										height={400}
										quality={100}
										alt='partners Logo h-[100px]'
									/>
								</Link>
							</div>

							<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]  mdl:w-[49%] h-[165px] flex items-center justify-center  mdl:flex mdl:items-center '>
							<Link href='/about'>
									<Image
										src={Sixe}
										width={400}
										height={400}
										quality={100}
										alt='partners Logo h-[100px]'
									/>
								</Link>
							</div>
							
							<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]  mdl:w-[49%] h-[165px] flex items-center justify-center   mdl:flex mdl:items-center '>
								<Link href='/about'>
									<Image
										src={Eigth}
										width={400}
										height={400}
										quality={100}
										alt='partners Logo h-[100px]'
									/>
								</Link>
							</div>
						</div>
					</div>
					{/* CARD 3  */}
					<div className='flex flex-col mdl:flex-row mdl:flex-wrap px-[10px]'>
						<div className='mdl:flex mdl:flex-row mdl:flex-wrap mdl:justify-between'>
							<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px] mdl:w-[49%] h-[165px] flex items-center justify-center    mdl:flex mdl:items-center 	'>
								<Link href='/about'>
									<Image
										src={Nine}
										width={400}
										height={400}
										quality={100}
										alt='partners Logo h-[100px]'
									/>
								</Link>
							</div>
							<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]  mdl:w-[49%] h-[165px] flex items-center justify-center  mdl:flex mdl:items-center '>
								<Link href='/about'>
									<Image
										src={Ten}
										width={400}
										height={400}
										quality={100}
										alt='partners Logo h-[100px]'
									/>
								</Link>
							</div>
							<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]  mdl:w-[49%] h-[165px] flex items-center justify-center   mdl:flex mdl:items-center '>
								<Link href='/about'>
									<Image
										src={Eleven}
										width={400}
										height={400}
										quality={100}
										alt='partners Logo h-[100px]'
									/>
								</Link>
							</div>
							<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]  mdl:w-[49%] h-[165px] flex items-center justify-center   mdl:flex mdl:items-center '>
								<Link href='/about'>
									<Image
										src={Tvelwe}
										width={400}
										height={400}
										quality={100}
										alt='partners Logo h-[100px]'
									/>
								</Link>
							</div>
							
						</div>
					</div>
				</Slider>
			</div>

			{/* DESKTOP */}
			<div className='hidden mt-[40px] 2xl:flex flex-row flex-wrap justify-evenly'>
				<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]  2xl:w-[24%] 2xl:min-h-[250px] mdl:flex mdl:items-center '>
					<div>
						<Image
							src={One}
							width={400}
							height={400}
							quality={100}
							alt='partners Logo'
						/>
					</div>
				</div>
				<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]   2xl:w-[24%] mdl:min-h-[250px] mdl:flex mdl:items-center '>
					<div>
						<Image
							src={Two}
							width={400}
							height={400}
							quality={100}
							alt='partners Logo'
						/>
					</div>
				</div>
				<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]   2xl:w-[24%] mdl:min-h-[250px] mdl:flex mdl:items-center '>
					<div>
						<Image
							src={Three}
							width={400}
							height={400}
							quality={100}
							alt='partners Logo'
						/>
					</div>
				</div>
				<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]   2xl:w-[24%] mdl:min-h-[250px] mdl:flex mdl:items-center '>
					<div>
						<Image
							src={Four}
							width={400}
							height={400}
							quality={100}
							alt='partners Logo'
						/>
					</div>
				</div>
				<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]   2xl:w-[24%] mdl:min-h-[250px] mdl:flex mdl:items-center '>
					<div>
						<Image
							src={Five}
							width={400}
							height={400}
							quality={100}
							alt='partners Logo'
						/>
					</div>
				</div>
				<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]   2xl:w-[24%] mdl:min-h-[250px] mdl:flex mdl:items-center '>
					<div>
						<Image
							src={Sixe}
							width={400}
							height={400}
							quality={100}
							alt='partners Logo'
						/>
					</div>
				</div>
				<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]   2xl:w-[24%] mdl:min-h-[250px] mdl:flex mdl:items-center '>
					<div>
						<Image
							src={Seven}
							width={400}
							height={400}
							quality={100}
							alt='partners Logo'
						/>
					</div>
				</div>
				<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]   2xl:w-[24%] mdl:min-h-[250px] mdl:flex mdl:items-center '>
					<div>
						<Image
							src={Eigth}
							width={400}
							height={400}
							quality={100}
							alt='partners Logo'
						/>
					</div>
				</div>
				<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]   2xl:w-[24%] mdl:min-h-[250px] mdl:flex mdl:items-center '>
					<div>
						<Image
							src={Nine}
							width={400}
							height={400}
							quality={100}
							alt='partners Logo'
						/>
					</div>
				</div>
				<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]   2xl:w-[24%] mdl:min-h-[250px] mdl:flex mdl:items-center '>
					<div>
						<Image
							src={Ten}
							width={400}
							height={400}
							quality={100}
							alt='partners Logo'
						/>
					</div>
				</div>
				<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]   2xl:w-[24%] mdl:min-h-[250px] mdl:flex mdl:items-center '>
					<div>
						<Image
							src={Eleven}
							width={400}
							height={400}
							quality={100}
							alt='partners Logo'
						/>
					</div>
				</div>
				<div className='cursor-pointer rounded-[20px] bg-white100 py-[36px] px-[66px] mb-[20px]   2xl:w-[24%] mdl:min-h-[250px] mdl:flex mdl:items-center '>
					<div>
						<Image
							src={Tvelwe}
							width={400}
							height={400}
							quality={100}
							alt='partners Logo'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Partners
