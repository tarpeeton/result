'use client'
import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'

import { IoClose } from 'react-icons/io5'
import { Dialog, DialogTitle, DialogContent } from '@mui/material'
import { FiGlobe } from 'react-icons/fi'
import { useParams } from 'next/navigation'
import { useCustomTranslation } from '@/app/i18n/client'

const CaseResultModalSocials = ({ isOpen, onClose, link }) => {
	const {lng} = useParams()
	const {t} = useCustomTranslation(lng , 'modal')
	return (
		<>
			{/* Main Form Modal */}
			<Dialog
				open={isOpen}
				onClose={onClose}
				fullWidth
				className='z-[9999]'
				PaperProps={{
					sx: {
						maxWidth: '460px',
						maxHeight: '360px',
						borderRadius: { xs: '20px', mdl: '30px' },

						zIndex: 9999, // Set z-index for the main modal
					},
				}}
			>
				<DialogTitle
					sx={{
						fontSize: {
							xs: '20px',
							'@media (min-width: 550px)': {
								fontSize: '30px',
							},
						},
						display: 'flex',
						justifyContent: 'space-between',
						fontWeight: 'bold',
						zIndex: 9999,
					}}
				>
					{t('view_result')} {/* Translated text for "Посмотреть результат" */}
					<div onClick={onClose} style={{ cursor: 'pointer' }}>
						<IoClose />
					</div>
				</DialogTitle>
				<DialogContent
					sx={{ zIndex: 99999 }}
					className='z-[9999] p-[24px] pb-[25px] mdl:p-[25px]'
				>
					<div className='flex flex-col gap-[12px] mdl:gap-[15px]'>
						{link.web && (
							<Link
								href={link.web}
								className='flex flex-row p-[20px] items-center border border-[#F0F0F0] rounded-[15px] gap-[12px] text-violet100 mdl:rounded-[20px]'
							>
								<FiGlobe className='text-[20px] mdl:text-[25px]' />
								<p className='text-[18px] mdl:text-[20px]'>{t('website')}</p> {/* Translated text for "Сайт" */}
							</Link>
						)}
						{link.instagram && (
							<Link
								href={link.instagram}
								className='flex flex-row p-[20px] items-center border border-[#F0F0F0] rounded-[15px] gap-[12px] text-[#F863A1] mdl:rounded-[20px]'
							>
								<FaInstagram className='text-[20px] mdl:text-[25px]' />
								<p className='text-[18px] mdl:text-[20px]'>{t('instagram')}</p> {/* Translated text for "Instagram" */}
							</Link>
						)}
						{link.telegram && (
							<Link
								href={link.telegram}
								className='flex flex-row p-[20px] items-center border border-[#F0F0F0] rounded-[15px] gap-[12px] text-[#2B99FF] mdl:rounded-[20px]'
							>
								<FaTelegramPlane className='text-[20px] mdl:text-[25px]' />
								<p className='text-[18px] mdl:text-[20px]'>{t('telegram')}</p> {/* Translated text for "Telegram" */}
							</Link>
						)}
					</div>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default CaseResultModalSocials
