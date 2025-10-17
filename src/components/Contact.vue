<template>
  <section class="container max-w-screen-xl mx-auto my-20">
    <div class="px-10 space-y-3 border border-gray-400">
      <h2
        class="font-bold text-5xl text-center mb-10 mx-auto border w-fit border-gray-400 px-10 py-3 -translate-y-1/2 bg-white"
      >
        Contact Us
      </h2>
      <form class="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 pt-0">
        <div class="flex gap-3">
          <label for="fname">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            class="border border-gray-400 flex-1 rounded"
          />
        </div>
        <div class="flex gap-3">
          <label for="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            class="border border-gray-400 flex-1 rounded"
          />
        </div>
        <div class="flex gap-3">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            class="border border-gray-400 flex-1 rounded"
          />
        </div>
        <div class="flex gap-3">
          <label for="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            class="border border-gray-400 flex-1 rounded"
          />
        </div>
      </form>
    </div>
  </section>
</template>
