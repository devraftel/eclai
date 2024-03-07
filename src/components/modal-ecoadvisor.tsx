'use client';

import { useChat } from 'ai/react';

import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from '@nextui-org/modal';

import { Button as IconButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEcoAdvisorStore } from '@/store/ecoadvisor';
import { useUser } from '@clerk/nextjs';
import { Avatar } from '@nextui-org/avatar';
import { Input } from '@nextui-org/input';
import { useDisclosure } from '@nextui-org/modal';
import { BotMessageSquareIcon, UserIcon } from 'lucide-react';
import { useState } from 'react';

const UserAvatar = () => {
	const { user } = useUser();

	const ava = user?.hasImage
		? user.imageUrl
		: 'https://images.unsplash.com/photo-1636889647964-c759d54751ef?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	const name = user?.fullName?.slice(0, 1);

	return (
		<>
			{user?.hasImage ? (
				<div className=' h-fit rounded-full mr-2'>
					<IconButton
						size={'icon'}
						variant={'secondary'}
						className='rounded-full '
					>
						<Avatar src={ava} />
					</IconButton>
				</div>
			) : (
				<>
					<div className='flex-shrink-0 bg-esl-bg h-fit rounded-xl p-2 text-esl-pm-sec mr-2 '>
						<UserIcon />
					</div>
				</>
			)}
		</>
	);
};

export function ModalEcoAdvisor() {
	const { messages, input, handleInputChange, handleSubmit, isLoading } =
		useChat();

	const { isEcoAdvisorOpen, setIsEcoAdvisorOpen } = useEcoAdvisorStore();

	const [scrollBehavior, setScrollBehavior] = useState<
		'inside' | 'normal' | 'outside' | undefined
	>('inside');

	const { isOpen, onOpen, onOpenChange } = useDisclosure({
		id: 'eco-advisor',
		isOpen: isEcoAdvisorOpen,
		// onChange: setIsEcoAdvisorOpen,
		onClose() {
			setIsEcoAdvisorOpen(!isOpen);
		},
	});

	return (
		<div className='flex flex-col flex-1'>
			{/* <Button onPress={onOpen}>Open Modal</Button> */}

			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				scrollBehavior={scrollBehavior}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1 bg-stone-200 text-esl-fg rounded-t-xl'>
								Eco Advisor
							</ModalHeader>
							<ModalBody className=''>
								<div className='flex flex-col w-full max-w-md mx-auto stretch min-h-unit-7xl relative'>
									{messages.map((m) => (
										<div
											key={m.id}
											className={cn(
												'whitespace-pre-wrap flex drop-shadow mb-2 z-40',
												m.role === 'user' ? 'self-start' : 'self-end'
											)}
										>
											{m.role === 'user' ? (
												<UserAvatar />
											) : (
												<div className='flex-shrink-0 bg-[#f8f7f1] h-fit rounded-xl p-2 text-esl-pm-sec mr-2'>
													<BotMessageSquareIcon />
												</div>
											)}
											<div
												className={cn(
													'rounded p-2 prose-sm',
													m.role === 'user' ? 'bg-esl-bg' : 'bg-[#f8f7f1]'
												)}
											>
												{m.content}
											</div>
										</div>
									))}
								</div>
							</ModalBody>
							<ModalFooter className='bg-stone-200 rounded-b-xl'>
								<form
									onSubmit={handleSubmit}
									className='w-full'
								>
									<Input
										className='w-full max-w-md rounded'
										value={input}
										placeholder='Ask your eco advisor...'
										onChange={handleInputChange}
									/>
								</form>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
}
