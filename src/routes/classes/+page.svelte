<script lang="ts">
const classes = [
  {
    name: "Math",
    subjects: [
      "Math 7",
      "Math 8",
      "Math 9",
      "Math 10",
      "Math 10 IB",
      "Math 20 IB",
    ],
  },
  {
    name: "Sciences",
    subjects: [
      "Science 10 IB",
      "Physics 20 IB",
      "Biology 20 IB",
      "Chemistry 20",
    ],
  },
  {
    name: "Humanities",
    subjects: ["Compositional Writing 10 IB", "Reading Comprehension 10 IB"],
  },
  {
    name: "Computer Science",
    subjects: ["Web Design and Development", "Systems Programming"],
  },
];
</script>

<section class="py-12 px-4 mx-auto flex items-center flex-col max-w-5xl">
  <h1 class="text-5xl font-bold text-center mb-4">Classes</h1>
  <h2 class="text-xl font-semibold mb-8">
    <i>All courses provided by Glass Frog Academy are free of charge, and will be held on Zoom</i>
  </h2>
  <p class="mb-8 text-center">
    Glass Frog Academy is offering a free 8 week course for the summer of 2025 from the start of July to the end of August. 
    Please fill out this interest form if you wish to attend this course. More information will be provided later.
  </p>
  <div class="flex flex-col gap-4 mb-8">
    {#each classes as classItem}
      <div class="flex flex-col">
        <h2 class="text-3xl font-semibold">{classItem.name}</h2>
        <ul class="list-disc pl-6">
          {#each classItem.subjects as subject}
            <li>
              <h3 class="text-lg">{subject}</h3>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
  <iframe 
    src="https://docs.google.com/forms/d/e/1FAIpQLSfmGyqcoztTjJlr062c2C7hDmYPZ9nA_LPCt1ck0Np3f9C72g/viewform?embedded=true" 
    width="700" 
    height="1800"
    title="Course Interest Form"
  >Loading…</iframe>
</section>
