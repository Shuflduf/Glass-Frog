<script lang="ts">
	interface Member {
		name: string;
		roles: string[];
		image: string;
		bio?: string;
	}

	const team: Member[] = [
		{
			name: 'Reecher',
			roles: ['Lead Director', 'Curriculum Developer', 'Instructor'],
			image: '/assets/founders/richard.gif',
			bio: "I'm dedicated to providing all students at GFA fun, engaging, and helpful learning. I enjoy playing badminton and studying. Professional Eater."
		},
		{
			name: 'Schmikal',
			roles: ['Technical Director', 'Web Developer', 'Instructor'],
			image: '/assets/founders/michael.webp',
			bio: "I've been using low level programming languages ever since I was a wee little boy. I'm an expert in Java, C, C++, and most importantly, RUST."
		},
		{
			name: 'Peethan',
			roles: ['Co-Lead', 'Instructor'],
			image: '/assets/founders/ethan.webp'
		},
		{
			name: 'Mote',
			roles: ['Curriculum Developer', 'Instructor', 'Disciplinary Lead'],
			image: '/assets/founders/matt.webp',
			bio: '<b>The chance of precipitation is quite high.</b>'
		},
		{
			name: 'Rav',
			roles: ['Technical', 'Instructor'],
			image: '/assets/founders/aarav.webp'
		},
		{
			name: 'Jog',
			roles: ['Event Coordinator', 'Partnership Manager'],
			image: '/assets/founders/josh.webp'
		},
		{
			name: 'Gary',
			roles: ['Curriculum Developer', 'Instructor'],
			image: '/assets/founders/gary.webp',
			bio: "I'm a dedicated high school student with a passion for math, science, and music. At Glass Frog Academy, I develop engaging curriculums and instruct students, striving for more accessible and enjoyable learning experience."
		},
		{
			name: 'Mi',
			roles: ['Course Moderator'],
			image: '/assets/founders/whotfisthis.webp'
		},
		{
			name: 'Jasper Springs',
			roles: ['Instructor'],
			image: '/assets/founders/jasper.webp',
			bio: "I'm an excellent student and a wonderful teacher, I'm very talented in mathematics and a fan of clash royal."
		},
		{
			name: 'Ega',
			roles: ['Advertising Manager', 'Course Moderator'],
			image: '/assets/founders/megan.webp'
		},
		{
			name: 'Zoon Minotaur',
			roles: ['Advertising Manager', 'Course Moderator'],
			image: '/assets/founders/zoon.webp',
			bio: '<s style="color: black; text-decoration-thickness: 3px"><span style="color: red">The Minotaur, one of the oldest known surviving demons, was sculpted by ████ ██████ as a gift for the then Judge of Hell, Minos, in an attempt to form some kind of rapport.</span></s>'
		}
	];
</script>

<section class="py-12 px-4 mx-auto flex items-center flex-col max-w-5xl">
<!-- <section class="mx-auto max-w-4xl px-4 py-12"> -->
  <h1 class="text-5xl font-bold text-center mb-4">Our Team</h1>

	<div class="flex flex-col gap-12">
		{#each team as member}
			<div class="flex">
				<div
					class="h-40 w-40 overflow-hidden rounded-full border-2 border-gray-100 shadow-md transition-transform duration-300 hover:scale-105"
				>
					<img
            src={member.image}
						alt={member.name}
						class="h-60 w-60 object-cover"
					/>
				</div>
				<div class="ml-4 flex w-60 flex-col justify-center">
					<h3 class="text-center text-lg font-semibold">{member.name}</h3>
					<ul class="text-center text-gray-600">
            {#each member.roles as role}
              <li>{role}</li>
            {/each}
					</ul>
				</div>
				<div class="flex items-center">
          {#if member.bio}
            <div class="h-min border-l-zinc-400 border-l-2 p-4">
              <p class="w-80 italic">
                {@html member.bio}
              </p>
            </div>
          {/if}
				</div>
			</div>
		{/each}
	</div>
</section>
