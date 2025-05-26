<script lang="ts">
interface Member {
  name: string;
  roles: string[];
  image: string;
  bio?: string;
}

const team: Member[] = [
  {
    name: "Reecher",
    roles: ["Lead Director", "Curriculum Developer", "Instructor"],
    image: "/assets/founders/richard.gif",
    bio: "I'm dedicated to providing all students at GFA fun, engaging, and helpful learning. I enjoy playing badminton and studying. Professional Eater.",
  },
  {
    name: "Schmikal",
    roles: ["Technical Director", "Web Developer", "Instructor"],
    image: "/assets/founders/michael.webp",
    bio: "I've been using low level programming languages ever since I was a wee little boy. I'm an expert in Java, C, C++, and most importantly, RUST.",
  },
  {
    name: "Peethan",
    roles: ["Co-Lead", "Instructor"],
    image: "/assets/founders/ethan.webp",
  },
  {
    name: "Mote",
    roles: ["Curriculum Developer", "Instructor", "Disciplinary Lead"],
    image: "/assets/founders/matt.webp",
    bio: "<b>The chance of precipitation is quite high.</b>",
  },
  {
    name: "Rav",
    roles: ["Technical", "Instructor"],
    image: "/assets/founders/aarav.webp",
  },
  {
    name: "Jog",
    roles: ["Event Coordinator", "Partnership Manager"],
    image: "/assets/founders/josh.webp",
  },
  {
    name: "Gary",
    roles: ["Curriculum Developer", "Instructor"],
    image: "/assets/founders/gary.webp",
    bio: "I'm a dedicated high school student with a passion for math, science, and music. At Glass Frog Academy, I develop engaging curriculums and instruct students, striving for more accessible and enjoyable learning experience.",
  },
  {
    name: "Mi",
    roles: ["Course Moderator"],
    image: "/assets/founders/whotfisthis.webp",
  },
  {
    name: "Jasper Springs",
    roles: ["Instructor"],
    image: "/assets/founders/jasper.webp",
    bio: "I'm an excellent student and a wonderful teacher, I'm very talented in mathematics and a fan of clash royal.",
  },
  {
    name: "Ega",
    roles: ["Advertising Manager", "Course Moderator"],
    image: "/assets/founders/megan.webp",
  },
  {
    name: "Zoon Minotaur",
    roles: ["Advertising Manager", "Course Moderator"],
    image: "/assets/founders/zoon.webp",
    bio: '<s style="color: black; text-decoration-thickness: 3px"><span style="color: red">The Minotaur, one of the oldest known surviving demons, was sculpted by ████ ██████ as a gift for the then Judge of Hell, Minos, in an attempt to form some kind of rapport.</span></s>',
  },
];
</script>

<section class="py-12 px-4 max-w-7xl mx-auto">
  <h2 class="text-3xl font-bold text-center mb-12">Our Team</h2>

  <div class="flex flex-wrap gap-8 justify-center">
    {#each team as founder}
      <div class="flex flex-col md:flex-col items-center">
        <div class="relative mb-4 group">
          {#if founder.bio}
            <div class="
              absolute bottom-full left-1/2 -translate-x-1/2 mb-2 min-w-sm
              invisible group-hover:visible opacity-0 group-hover:opacity-100 
              transition-all z-40
              bg-gray-800 text-white p-3 rounded-lg text-sm text-center
              " >{@html founder.bio}
            </div>
          {/if}

          <div class="overflow-hidden rounded-full w-40 h-40 border-2 border-gray-100 shadow-md transition-transform duration-300 hover:scale-105">
            <img
              src={founder.image || "/assets/founders/frog.svg"}
              alt={founder.name}
              class="object-cover w-full h-full"
            />
          </div>
        </div>
        <h3 class="font-semibold text-lg text-center">{founder.name}</h3>
        <ul class="text-gray-600 text-center">
          {#each founder.roles as role}
            <li>{role}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>
