<script lang="ts">
	interface Member {
		name: string;
		roles: string[];
		image?: string;
		bio?: string;
	}

	const team: Member[] = [
		{
			name: 'Richard',
			roles: ['Lead Director', 'Curriculum Developer', 'Instructor'],
			image: '/assets/founders/richard.png',
			bio: "I'm dedicated to providing all students at GFA fun, engaging, and helpful learning. I enjoy playing badminton and studying. Professional Eater."
		},
		{
			name: 'Michael',
			roles: ['Technical Director', 'Web Developer', 'Instructor'],
			image: '/assets/founders/michael.jpg',
			bio: "I've been using low level programming languages ever since I was a wee little boy. I'm an expert in Java, C, C++, and most importantly, RUST."
		},
		{
			name: 'Ethan',
			roles: ['Co-Lead', 'Instructor', 'Curriculum Developer'],
			image: '/assets/founders/ethan.jpg',
      			bio: "I'm passionate about helping students build confidence in core subjects as they prepare for the transition to high school. As an instructor, I strive to make learning engaging and approachable, creating a space where every student feels supported and empowered."
		},
		{
			name: 'Matthew',
			roles: ['Curriculum Developer', 'Instructor', 'Disciplinary Lead'],
			image: '/assets/founders/matt.webp',
			bio: 'I am dedicated to developing a honest and professional curriculum for all students in the GFA. Beyond education I like skiing and sleeping'
		},
		{
			name: 'Aarav',
			roles: ['Technical', 'Instructor'],
			image: '/assets/founders/aarav.jpg',
      bio: "I’m dedicated to making learning fun and engaging. I’ve been a huge science, music, and aviation nerd for all my life. I enjoy game development and webdev as hobbies."
		},
		{
			name: 'Josh',
			roles: ['Event Coordinator', 'Partnership Manager', 'Instructor', 'Curriculum Developer'],
			image: '/assets/founders/josh.jpg',
      bio: "I’m passionate about making learning exciting, accessible, and hands-on for everyone at GFA. I’m deep into robotics and 3D printing—bringing ideas to life layer by layer and servo by servo."
		},
		{
			name: 'Gary',
			roles: ['Curriculum Developer', 'Instructor'],
			image: '/assets/founders/gary.webp',
			bio: "I'm a dedicated high school student with a passion for math, science, and music. At Glass Frog Academy, I develop engaging curriculums and instruct students, striving for more accessible and enjoyable learning experience."
		},
		{
			name: 'Amy',
			roles: ['Course Moderator'],
			image: '/assets/founders/amy.png',
      bio: "Throughout junior high and now high school, learning has been a major part of my life just like many students. I hope to share my experiances with others and help them learn and be very prepared for what is to come."
		},
		{
			name: 'Megan',
			roles: ['Advertising Manager', 'Course Moderator', 'Instructor'],
			image: '/assets/founders/megan.png',
	bio: "I want to help all gfa students to be more prepared for highschool so they won't suffer like I did. I enjoy math and science, but outside of academics I like to indulge in art, music, and badminton"
		},
		{
			name: 'Joanna',
			roles: ['Advertising Manager', 'Course Moderator', 'Instructor'],
			image: '/assets/founders/joanna.png',
			bio: "I'm a huge social studies nerd, would totally love to talk about the political and economic state of the world anytime. I strive to be as non-judgmental as I could be."
		},
		{
			name: 'Bryan',
			roles: ['Instructor'],
			image: '/assets/founders/bryan.jpg',
			bio: "I’m very interested in learning and passionate about sharing knowledge. My field of focus is math, science, and second language. GFA’s #1 soccer fan and Marvel fan. But overall, I’m just a chill guy."
		}
		// {
		// 	name: '<s style="color: black; text-decoration-thickness: 3px"><span style="color: red">Zoon Minotaur</span></s>',
		// 	roles: ['Bull of Hell'],
		// 	image: '/assets/founders/zoon.webp',
		// 	bio: '<s style="color: black; text-decoration-thickness: 3px"><span style="color: red">The Minotaur, one of the oldest known surviving demons, was sculpted by ████ ██████ as a gift for the then Judge of Hell, Minos, in an attempt to form some kind of rapport.</span></s>'
		// }
	];
</script>

<section class="py-12 px-4 mx-auto flex items-center flex-col max-w-5xl">
<!-- <section class="mx-auto max-w-4xl px-4 py-12"> -->
  <h1 class="text-5xl font-bold text-center mb-4">Our Team</h1>

	<div class="flex flex-col gap-12">
		{#each team as member}
			<div class="flex flex-col md:flex-row items-center">
				<div
					class="h-40 w-40 overflow-hidden rounded-full border-2 border-gray-100 shadow-md transition-transform duration-300 hover:scale-105 flex items-center justify-center"
				>
					<img
            src={member.image || '/assets/founders/frog.svg'}
						alt={member.name}
						class="h-60 w-60 object-cover"
					/>
				</div>
				<div class="ml-4 flex w-60 flex-col justify-center">
					<h3 class="text-center text-lg font-semibold">{@html member.name}</h3>
					<ul class="text-center text-gray-600">
            {#each member.roles as role}
              <li>{role}</li>
            {/each}
					</ul>
				</div>
				<div class="flex items-center mt-4 md:mt-0">
          {#if member.bio}
            <div class="h-min border-y-zinc-400 border-y-2 md:border-y-0 md:border-l-zinc-400 md:border-l-2 p-4">
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
