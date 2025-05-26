<script>
	import BentoItem from './BentoItem.svelte';

	const classes = ['Math', 'Science', 'Humanities', 'Computer Science'];
</script>

<div class="mx-auto flex max-w-5xl flex-col justify-center gap-6 px-4 pb-12">
	<div class="flex w-full flex-wrap gap-6">
		<BentoItem classes="flex-2/5">
			<h2 class="mb-2 text-xl font-bold">About Glass Frog Academy</h2>
			<p>
				At Glass Frog Academy, we believe the leap from middle school to high school is one of the
				most difficult jumps in a student's life.<br /> Our name embodies this philosophy:
				<i>Glass</i>
				symbolizes clarity, and a window into the future, while <i>Frog</i> represents the academic leap
				all students make at the end of middle school.
			</p>
		</BentoItem>
		<BentoItem classes="flex-2/5">
			<h2 class="mb-2 text-xl font-bold">Our Mission</h2>
			<p>
				We prepare middle school students to thrive in high school and beyond through online
				classes, and in person hackathons. With a focus on the International Baccalaureate (IB)
				curriculum, we equip students with the tools to navigate complex challenges, think
				critically, and embrace their potential.
			</p>
		</BentoItem>
	</div>
	<div class="flex w-full flex-wrap gap-6">
		<BentoItem classes="flex-1/3">
			<h2 class="mb-2 text-xl font-bold">What we Teach</h2>
			<ul class="list-disc pl-4">
				{#each classes as clas}
					<li>{clas}</li>
				{/each}
				<li>
					<button class="background-zinc-800 text-blue-500">
						<a href="/classes" class="text-blue-500 hover:underline"> View All / Sign Up </a>
					</button>
				</li>
			</ul>
		</BentoItem>
		<BentoItem classes="flex-1/2">
			<h2 class="mb-2 text-xl font-bold">What we do</h2>
			<ul class="list-disc pl-4">
				<li>
					<b>Summer Online Courses</b>: Tailored classes in IB Science, Math, writing, plus advanced
					topics like Physics, Biology, and Computer Science.
				</li>
				<li>
					<b>In-person events</b>: Competitions and hackathons that help build abilities through
					interactive and physical activities
				</li>
				<li>
					<b>Provide Future Readiness</b>: We provide experience from current IB high school
					students and help students get used to the high school workflow
				</li>
			</ul>
		</BentoItem>
	</div>
</div>
