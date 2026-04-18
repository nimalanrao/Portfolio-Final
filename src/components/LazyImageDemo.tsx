'use client';
import React from 'react';
import { LazyImage } from '@/components/ui/lazy-image';
import { Button } from '@/components/ui/button';

export default function LazyImageDemo() {
	const [instance, setInstance] = React.useState(0);
	return (
		<div key={instance} className="py-20 px-4">
			<div className="max-w-4xl mx-auto space-y-8">
				<div className="flex flex-col items-center gap-4">
					<h2 className="text-3xl font-medium text-primary-cream">Lazy Image Performance Demo</h2>
					<Button onClick={() => setInstance((prev) => prev + 1)} variant="outline" className="rounded-full px-8">
						Reload Image
					</Button>
				</div>
				<div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
					<LazyImage
						alt="High Resolution Random Unsplash"
						src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop`}
						ratio={16 / 9}
						fallback="https://placehold.co/1280x720?text=Loading+Portfolio+Media..."
						inView={true}
					/>
				</div>
			</div>
		</div>
	);
}
