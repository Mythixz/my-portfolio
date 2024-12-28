<template>
<section class="hero bg-cover bg-center bg-[url('/hero-1.jpg')]">
  <div class="overlay"></div>
    <div class="content">
      <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">
        Business value <br />
        through digital <br />
        products
      </h1>
      <button class="cta-button">Look More</button>
    </div>
    <!-- ส่วนอื่นๆ ของโค้ดยังคงเดิม -->
  </section>
</template>

<style>

.hero {
  width: 100%;
  height: 100vh;
  background: url('/hero-1.jpg') no-repeat center center/cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* เพิ่มความเข้ม */
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.cta-button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid white;
  background: transparent;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: white;
  color: black;
}
</style>
