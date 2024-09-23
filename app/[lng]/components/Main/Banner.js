import React, { useState } from 'react'
import ServiceModal from '../Modal/SeriviceModal'
import Image from 'next/image'
import { useCustomTranslation } from '../../../i18n/client'
import { useParams } from 'next/navigation'

const Banner = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { lng } = useParams()
	const { t } = useCustomTranslation(lng, 'banner')

	// Open modal function
	const openModal = () => {
		setIsModalOpen(true)
	}

	// Close modal function
	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div className='w-full rounded-b-[30px] 2xl:rounded-b-[100px] bg-violet100  relative  mdl:h-[90vh] 4xl:h-[100vh]'>
			<div className='w-full pt-[50px]  2xl:w-[80%] 2xl:mx-auto flex flex-col justify-center items-center '>
				<div className=' 2xl:w-[100%] flex flex-col justify-center items-center text-center mb-[200px] mdl:mb-[250px] 4xl:mb-[500px]'>
					<h1 className=' font-bold text-[35px] w-[60%] md:w-[55%] text-white100 bn:w-[50%] mdx:w-[40%] mdl:w-[35%] slg:w-[50%] slg:text-[70px] 2xl:w-[75%] 4xl:text-[90px] font-montserrat lg:w-[40%] text-center'>
						{t('title')}
					</h1>
					<p className='w-[70%] text-[15px] font-semibold text-white100 mt-[16px] mdl:text-[16px] font-montserrat '>
						{t('subtitle')}
					</p>
					<button
						onClick={openModal}
						className='bg-white100 rounded-[60px] px-[30px] py-[20px] w-[230px] mt-[30px] mdl:w-[300px] z-[99]'
					>
						<p className='text-violet100 text-[14px] font-bold mdl:text-[18px] font-montserrat'>
							{t('getInfo')}
						</p>
					</button>
				</div>
				{/* Pass the modal open/close state to the modal component */}
				<ServiceModal isOpen={isModalOpen} onClose={closeModal} />
				<div className='w-full mt-[30px] absolute bottom-0'>
					<Image
						src='https://ucarecdn.com/eb83945a-4701-42a1-8a78-ffdfc03c4523/-/preview/1000x357/'
						width={1400}
						height={600}
						quality={100}
						alt='Main banner image'
						sizes='(max-width: 600px) 100vw, (max-width: 1400px) 50vw, 1400px'
						className='w-[70%] mdl:w-[100%] xl:w-[60%] 4xl:w-[100%] mx-auto'
					/>
					<Image
						src='https://ucarecdn.com/ebb06761-5765-4c2c-8e8f-e6c2777cea6d/-/preview/360x247/'
						width={1200}
						height={400}
						quality={100}
						alt='blurred background image'
						className='object-cover absolute bottom-0 w-full h-[40px] 3xl:h-[100px] rounded-b-[30px] 2xl:rounded-b-[100px] opacity-[70%]'
					/>
				</div>
			</div>
		</div>
	)
}

export default Banner
