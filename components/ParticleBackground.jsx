import Particle from "./Particle";

const ParticleBackground = () => {
  const particles = Array.from({ length: 150 }); 

  return (
    <div className="fixed inset-0 overflow-hidden z-10 pointer-events-none">
      {particles.map((_, index) => (
        <Particle key={index} />
      ))}
    </div>
  );
};

export default ParticleBackground;
