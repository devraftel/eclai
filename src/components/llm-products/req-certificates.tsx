'use client';

export function RequiredCertificatesUI(
	ecoCertifications: AllRequiredCertificatesProps
) {
	return (
		<div className='p-4 text-esl-bg border rounded-xl bg-esl-pm-sec font-nunitoSans'>
			<div className='text-xl pb-2 font-semibold text-white text-balance font-lato'>
				Required ECO Certifications
			</div>
			<ul className='list-none m-0 p-0'>
				{ecoCertifications.certifications.map((certification, index) => {
					return (
						<li key={index}>
							<div className='text-lg font-semibold font-nunitoSans text-esl-bg mt-2'>
								{index + 1}- {certification.certification_name}
							</div>
							<div className='text-sm py-2 text-zinc-300 font-nunitoSans'>
								{certification.reason}
							</div>
							{/* A LINE */}
							{index < ecoCertifications.certifications.length - 1 && (
								<div className='w-full border bg-esl-bg border-esl-bg opacity-30 my-1' />
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
