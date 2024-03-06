import { Loader } from '@/components/loader';

const page = () => {
	return (
		<div className='flex flex-col space-y-8 items-center justify-center w-full h-full'>
			<Loader />
		</div>
	);
};

export default page;
