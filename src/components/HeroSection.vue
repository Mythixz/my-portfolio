<template>
  <section class="hero">
    <div class="overlay"></div>
    <div class="content">
      <h1>
        Business value <br />
        through digital <br />
        products
      </h1>
      <button class="cta-button">Look More</button>
    </div>
    <div class="social-icons">
      <a href="#" aria-label="Behance">
  <i class="fab fa-behance"></i>
  <span class="visually-hidden">Behance</span>
</a>
<a href="#" aria-label="Pinterest">
  <i class="fab fa-pinterest"></i>
  <span class="visually-hidden">Pinterest</span>
</a>
    </div>
    <div class="navigation-arrows">
      <button class="prev">&#8592;</button>
      <button class="next">&#8594;</button>
    </div>
    <div class="section-indicator">3 / 3</div>
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  background: url('/hero-1.jpg') no-repeat center center/cover; /* ใช้พาธตรงจาก public */
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

.content h1 {
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
  background: linear-gradient(to right, #ff7eb3, #6c63ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

.social-icons {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.social-icons a {
  color: white;
  font-size: 1.5rem;
}

.navigation-arrows {
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
}

.navigation-arrows button {
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

.section-indicator {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: white;
  font-size: 1rem;
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

</style>
