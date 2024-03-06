'use client';

import { useChat } from 'ai/react';

import { Button } from '@nextui-org/button';
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from '@nextui-org/modal';

import { cn } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';
import { Avatar } from '@nextui-org/avatar';
import { useDisclosure } from '@nextui-org/modal';
import { BotMessageSquareIcon } from 'lucide-react';
import { useState } from 'react';

import { Button as IconButton } from '@/components/ui/button';

const UserAvatar = () => {
	const { user } = useUser();

	const ava = user?.hasImage
		? user.imageUrl
		: 'https://images.unsplash.com/photo-1636889647964-c759d54751ef?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	const name = user?.fullName?.slice(0, 1);

	return (
		<IconButton
			size={'icon'}
			variant={'secondary'}
			className='rounded-full'
		>
			<Avatar src={ava} />
		</IconButton>
	);
};

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();
	const [scrollBehavior, setScrollBehavior] = useState<
		'inside' | 'normal' | 'outside' | undefined
	>('inside');
	const { isOpen, onOpen, onOpenChange } = useDisclosure({
		// isOpen: true,
	});

	return (
		<>
			<Button onPress={onOpen}>Open Modal</Button>

			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				scrollBehavior={scrollBehavior}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className='flex flex-col gap-1'>
								Eco Assistant
							</ModalHeader>
							<ModalBody>
								<div className='flex flex-col w-full max-w-md mx-auto stretch'>
									{messages.map((m) => (
										<div
											key={m.id}
											className={cn(
												'whitespace-pre-wrap flex drop-shadow mb-2 w-10/12',
												m.role === 'user' ? 'self-start' : 'self-end'
											)}
										>
											{m.role === 'user' ? (
												<div className=' h-fit rounded-full mr-2'>
													<UserAvatar />
												</div>
											) : (
												<div className='flex-shrink-0 bg-esl-bg h-fit rounded-full p-2 text-esl-pm-sec mr-2'>
													<BotMessageSquareIcon />
												</div>
											)}
											{/* {m.role === 'user' ? 'User: ' : 'AI: '} */}
											<div className='bg-esl-bg rounded p-2 prose-sm'>
												{m.content}
											</div>
										</div>
									))}
								</div>
							</ModalBody>
							<ModalFooter>
								<form
									onSubmit={handleSubmit}
									className='bg-purple-100 w-full'
								>
									<input
										className='w-full max-w-md p-2 border border-gray-300 rounded shadow-xl '
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
		</>
	);
}
